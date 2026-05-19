const database = window.VISA_SPONSOR_JOBS_DATABASE || { jobs: [] };
const allowedVisas = ["186", "482"];
const jobs = (database.jobs || [])
  .filter((job) => (job.visas || []).some((visa) => allowedVisas.includes(visa)))
  .map((job) => ({
    ...job,
    visas: (job.visas || []).filter((visa) => allowedVisas.includes(visa))
  }));

let currentPage = 1;
let pageSize = 30;
let filteredJobs = [...jobs];

const byId = (id) => document.getElementById(id);
const uniq = (items) => [...new Set(items.filter(Boolean))].sort((a, b) => a.localeCompare(b));

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function escapeAttr(value = "") {
  return escapeHtml(value);
}

function fillSelect(id, label, values) {
  byId(id).innerHTML = [
    `<option value="all">${label}</option>`,
    ...values.map((value) => `<option value="${escapeAttr(value)}">${escapeHtml(value)}</option>`)
  ].join("");
}

function getKeywordTerms(value) {
  const keyword = value.trim().toLowerCase();
  if (!keyword) return [];

  const terms = keyword
    .split(/[|\/,，、]+/)
    .map((term) => term.trim())
    .filter(Boolean);

  return terms.length > 1 ? terms : [keyword];
}

function renderMeta() {
  const countries = uniq(jobs.map((job) => job.country));
  const classifications = uniq(jobs.flatMap((job) => job.classifications));
  const visas = allowedVisas.filter((visa) => jobs.some((job) => (job.visas || []).includes(visa)));

  fillSelect("jobCountry", "全部国家", countries);
  fillSelect("jobClassification", "全部行业", classifications);
  fillSelect("jobVisa", "全部签证", visas);

  byId("databaseStats").innerHTML = `
    <div>
      <i data-lucide="briefcase-business"></i>
      <span class="metric-label">岗位样本</span>
      <strong>${database.capturedTotal || jobs.length}</strong>
      <span>已入库担保岗位</span>
    </div>
    <div>
      <i data-lucide="layers-3"></i>
      <span class="metric-label">覆盖范围</span>
      <strong>${classifications.length}</strong>
      <span>行业分类可筛选</span>
    </div>
  `;

  if (window.lucide) window.lucide.createIcons();
}

function filterJobs() {
  const keywordTerms = getKeywordTerms(byId("jobKeyword").value);
  const country = byId("jobCountry").value;
  const classification = byId("jobClassification").value;
  const visa = byId("jobVisa").value;

  filteredJobs = jobs.filter((job) => {
    const haystack = [
      job.title,
      job.employer,
      job.location,
      ...(job.classifications || []),
      ...(job.visas || [])
    ]
      .join(" ")
      .toLowerCase();

    const matchesKeyword =
      keywordTerms.length === 0 || keywordTerms.some((term) => haystack.includes(term));
    const matchesCountry = country === "all" || job.country === country;
    const matchesClassification =
      classification === "all" || (job.classifications || []).includes(classification);
    const matchesVisa = visa === "all" || (job.visas || []).includes(visa);

    return matchesKeyword && matchesCountry && matchesClassification && matchesVisa;
  });

  currentPage = 1;
  sortJobs();
  syncQueryString();
  renderJobs();
}

function getTime(value) {
  const time = Date.parse(value || "");
  return Number.isNaN(time) ? 0 : time;
}

function sortJobs() {
  const sort = byId("jobSort")?.value || "newest";
  const text = (value) => String(value || "").toLowerCase();
  filteredJobs.sort((a, b) => {
    if (sort === "title") return text(a.title).localeCompare(text(b.title));
    if (sort === "employer") return text(a.employer).localeCompare(text(b.employer));
    if (sort === "country") return text(a.country).localeCompare(text(b.country));
    return getTime(b.publishDate) - getTime(a.publishDate);
  });
}

function syncQueryString() {
  const params = new URLSearchParams();
  const keyword = byId("jobKeyword").value.trim();
  const country = byId("jobCountry").value;
  const classification = byId("jobClassification").value;
  const visa = byId("jobVisa").value;
  const sort = byId("jobSort")?.value || "newest";

  if (keyword) params.set("q", keyword);
  if (country !== "all") params.set("country", country);
  if (classification !== "all") params.set("classification", classification);
  if (visa !== "all") params.set("visa", visa);
  if (sort !== "newest") params.set("sort", sort);
  if (pageSize !== 30) params.set("pageSize", String(pageSize));

  const nextUrl = params.toString() ? `${window.location.pathname}?${params}` : window.location.pathname;
  window.history.replaceState({}, "", nextUrl);
}

function renderJobs() {
  const pages = Math.max(1, Math.ceil(filteredJobs.length / pageSize));
  currentPage = Math.min(currentPage, pages);
  const start = (currentPage - 1) * pageSize;
  const visibleJobs = filteredJobs.slice(start, start + pageSize);
  const rangeStart = filteredJobs.length ? start + 1 : 0;
  const rangeEnd = Math.min(start + pageSize, filteredJobs.length);

  byId("jobResultCount").textContent = `${filteredJobs.length} 个岗位`;
  byId("jobPageInfo").textContent = `${rangeStart}-${rangeEnd} / ${filteredJobs.length} · 第 ${currentPage} / ${pages} 页`;
  byId("prevJobPage").disabled = currentPage <= 1;
  byId("nextJobPage").disabled = currentPage >= pages;

  byId("jobTableBody").innerHTML =
    visibleJobs
      .map(
        (job) => `
          <tr>
            <td>
              <strong>${escapeHtml(job.title)}</strong>
              <small>ID: ${escapeHtml(job.id)}</small>
            </td>
            <td>${escapeHtml(job.employer || "未知公司")}</td>
            <td>${escapeHtml(job.location || "未知地点")}</td>
            <td>${(job.classifications || []).map((item) => `<span>${escapeHtml(item)}</span>`).join("")}</td>
            <td>${(job.visas || []).map((item) => `<span>${escapeHtml(item)}</span>`).join("")}</td>
            <td>${escapeHtml(job.publishDate || "-")}</td>
            <td><a href="index.html#contact"><i data-lucide="message-circle"></i>联系我</a></td>
          </tr>
        `
      )
      .join("") || `<tr><td colspan="7">没有匹配岗位，请调整筛选条件。</td></tr>`;

  if (window.lucide) window.lucide.createIcons();
}

function bindEvents() {
  byId("jobFilters").addEventListener("submit", (event) => {
    event.preventDefault();
    filterJobs();
  });

  ["jobCountry", "jobClassification", "jobVisa"].forEach((id) => {
    byId(id).addEventListener("change", filterJobs);
  });

  byId("jobSort").addEventListener("change", () => {
    currentPage = 1;
    sortJobs();
    syncQueryString();
    renderJobs();
  });

  byId("jobPageSize").addEventListener("change", () => {
    pageSize = Number(byId("jobPageSize").value) || 30;
    currentPage = 1;
    syncQueryString();
    renderJobs();
  });

  byId("resetJobFilters").addEventListener("click", () => {
    byId("jobFilters").reset();
    byId("jobSort").value = "newest";
    byId("jobPageSize").value = "30";
    pageSize = 30;
    filterJobs();
  });

  byId("prevJobPage").addEventListener("click", () => {
    currentPage -= 1;
    renderJobs();
  });

  byId("nextJobPage").addEventListener("click", () => {
    currentPage += 1;
    renderJobs();
  });
}

function applyInitialQuery() {
  const params = new URLSearchParams(window.location.search);
  const keyword = params.get("q");
  const country = params.get("country");
  const classification = params.get("classification");
  const visa = params.get("visa");
  const sort = params.get("sort");
  const initialPageSize = Number(params.get("pageSize"));
  if (keyword) {
    byId("jobKeyword").value = keyword;
  }
  if (country && byId("jobCountry").querySelector(`option[value="${CSS.escape(country)}"]`)) {
    byId("jobCountry").value = country;
  }
  if (
    classification &&
    byId("jobClassification").querySelector(`option[value="${CSS.escape(classification)}"]`)
  ) {
    byId("jobClassification").value = classification;
  }
  if (visa && byId("jobVisa").querySelector(`option[value="${CSS.escape(visa)}"]`)) {
    byId("jobVisa").value = visa;
  }
  if (sort && byId("jobSort").querySelector(`option[value="${CSS.escape(sort)}"]`)) {
    byId("jobSort").value = sort;
  }
  if ([20, 30, 50, 100].includes(initialPageSize)) {
    pageSize = initialPageSize;
    byId("jobPageSize").value = String(initialPageSize);
  }
  if (keyword || country || classification || visa || sort || initialPageSize) {
    filterJobs();
  } else {
    sortJobs();
    renderJobs();
  }
}

renderMeta();
bindEvents();
applyInitialQuery();
if (window.lucide) window.lucide.createIcons();
