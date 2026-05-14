import { mkdir, writeFile } from "node:fs/promises";
import https from "node:https";

const baseUrl = "https://visasponsor.jobs";
const listUrl = `${baseUrl}/api/jobs`;
const outFile = "data/visa-sponsor-jobs.json";

function fetchText(url) {
  return new Promise((resolve, reject) => {
    const request = https.get(
      url,
      {
        headers: {
          "user-agent":
            "Mozilla/5.0 (compatible; EmployerOpportunityNavigator/1.0)",
          accept: "text/html,application/xhtml+xml"
        },
        timeout: 30000
      },
      (response) => {
        if ([301, 302, 303, 307, 308].includes(response.statusCode)) {
          resolve(fetchText(new URL(response.headers.location, url).toString()));
          return;
        }

        if (response.statusCode < 200 || response.statusCode >= 300) {
          reject(new Error(`HTTP ${response.statusCode} for ${url}`));
          response.resume();
          return;
        }

        let body = "";
        response.setEncoding("utf8");
        response.on("data", (chunk) => {
          body += chunk;
        });
        response.on("end", () => resolve(body));
      }
    );

    request.on("timeout", () => {
      request.destroy(new Error(`Timeout for ${url}`));
    });
    request.on("error", reject);
  });
}

function decodeHtml(value = "") {
  const entities = {
    amp: "&",
    lt: "<",
    gt: ">",
    quot: '"',
    apos: "'",
    "#39": "'"
  };

  return value
    .replace(/<[^>]+>/g, " ")
    .replace(/&([^;]+);/g, (match, entity) => {
      if (entities[entity]) return entities[entity];
      if (entity.startsWith("#x")) return String.fromCodePoint(parseInt(entity.slice(2), 16));
      if (entity.startsWith("#")) return String.fromCodePoint(parseInt(entity.slice(1), 10));
      return match;
    })
    .replace(/\s+/g, " ")
    .trim();
}

function pick(pattern, html) {
  const match = html.match(pattern);
  return match ? decodeHtml(match[1]) : "";
}

function pickAll(pattern, html) {
  return [...html.matchAll(pattern)]
    .map((match) => decodeHtml(match[1]))
    .filter(Boolean);
}

function parseTotal(html) {
  const total = pick(/<div class="sub-font fw-semibold ms-2 mb-2 ps-2">([\d,]+)\s+jobs<\/div>/i, html);
  return Number(total.replace(/[^\d]/g, ""));
}

function parseJobs(html, page) {
  const cardPattern =
    /<a href="(\/api\/jobs\/[^"]+)" class="col-12 col-lg-4"[\s\S]*?(?=<\/a><a href="\/api\/jobs\/|<\/a>\s*<\/div>\s*<script|<\/a>\s*<\/div>\s*<nav|<\/a>\s*<script)/g;

  return [...html.matchAll(cardPattern)].map((match, index) => {
    const card = match[0];
    const detailPath = match[1];
    const location = pick(
      /<div class="row my-2">[\s\S]*?<div class="col-11 sub-font">([\s\S]*?)<\/div>/i,
      card
    )
      .replace(/\s+,/g, ",")
      .replace(/,\s*$/, "");

    const parts = location.split(",").map((item) => item.trim()).filter(Boolean);
    const country = parts.at(-1) || "";
    const region = parts.length > 1 ? parts.at(-2) : "";
    const city = parts.length > 2 ? parts.slice(0, -2).join(", ") : parts[0] || "";

    return {
      id: detailPath.split("/")[3] || `${page}-${index}`,
      title: pick(/<div class="fs-5 fw-medium mb-2 overflow-hidden"[^>]*>([\s\S]*?)<\/div>/i, card),
      employer: pick(/<span class="text-black-50 me-2 sub-font employer-name"[^>]*>([\s\S]*?)<\/span>/i, card)
        .replace(/\s+View all jobs$/i, ""),
      city,
      region,
      country,
      location,
      classifications: pickAll(/<span class="ms-2 text-nowrap sub-font">([\s\S]*?)<\/span>/gi, card),
      visas: pickAll(/<div class="rounded-5 px-2 py-1 gap-1 text-nowrap tag sub-font"[^>]*>([\s\S]*?)<\/div>/gi, card),
      publishDate: pick(/Publish date\s*<\/span><span[^>]*>([\s\S]*?)<\/span>/i, card),
      detailUrl: `${baseUrl}${detailPath}`,
      sourcePage: page
    };
  });
}

const firstHtml = await fetchText(listUrl);
const total = parseTotal(firstHtml);
const perPage = parseJobs(firstHtml, 0).length || 30;
const lastPage = Math.max(0, Math.ceil(total / perPage) - 1);
const jobs = [];

for (let page = 0; page <= lastPage; page += 1) {
  const html = page === 0 ? firstHtml : await fetchText(`${listUrl}?page=${page}`);
  const pageJobs = parseJobs(html, page);
  jobs.push(...pageJobs);
  process.stdout.write(`page ${page + 1}/${lastPage + 1}: ${pageJobs.length} jobs\n`);
}

const deduped = [...new Map(jobs.map((job) => [job.id, job])).values()];
const database = {
  source: listUrl,
  scrapedAt: new Date().toISOString(),
  reportedTotal: total,
  capturedTotal: deduped.length,
  pages: lastPage + 1,
  jobs: deduped
};

await mkdir("data", { recursive: true });
await writeFile(outFile, JSON.stringify(database, null, 2), "utf8");
process.stdout.write(`saved ${deduped.length} jobs to ${outFile}\n`);
