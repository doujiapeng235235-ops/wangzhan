const occupations = [
  {
    name: "Chef",
    anzsco: "351311",
    industry: "餐饮与酒店",
    lists: "常见于雇主担保相关职业范围，需核对最新清单",
    paths: ["482", "186", "494", "Labour Agreement"],
    regional: "适合偏远地区与酒店餐饮集团机会",
    titles: ["Chef", "Commis Chef", "Sous Chef", "Head Chef", "Cook"],
    keywords: [
      "Chef sponsorship",
      "482 visa sponsorship chef",
      "Sous chef regional sponsorship",
      "Head chef employer sponsored visa",
      "DAMA chef sponsorship"
    ]
  },
  {
    name: "Aged Care Worker",
    anzsco: "423111",
    industry: "养老护理",
    lists: "需按具体职业、协议或清单状态核对",
    paths: ["482", "494", "Labour Agreement"],
    regional: "强相关，偏远地区护理机构值得优先筛选",
    titles: ["Aged Care Worker", "Personal Care Assistant", "Care Assistant"],
    keywords: [
      "Aged care sponsorship",
      "482 visa sponsorship aged care",
      "Personal care assistant sponsorship",
      "Regional aged care jobs sponsorship"
    ]
  },
  {
    name: "Software Engineer",
    anzsco: "261313",
    industry: "信息技术",
    lists: "常见于技术类职业清单，需核对最新版本",
    paths: ["482", "186"],
    regional: "大城市机会更多，偏远地区可看政府、矿业、医疗 IT",
    titles: ["Software Engineer", "Backend Engineer", "Full Stack Developer"],
    keywords: [
      "Software engineer visa sponsorship Australia",
      "482 sponsorship software engineer",
      "Employer sponsored visa developer",
      "Relocation support software engineer Australia"
    ]
  },
  {
    name: "Accountant",
    anzsco: "221111",
    industry: "会计与专业服务",
    lists: "需核对职业清单、评估与薪资要求",
    paths: ["482", "186", "494"],
    regional: "中小企业、地区会计事务所可作为突破口",
    titles: ["Accountant", "Tax Accountant", "Management Accountant"],
    keywords: [
      "Accountant sponsorship Australia",
      "482 visa accountant",
      "Regional accountant sponsorship",
      "Employer sponsored visa accountant"
    ]
  }
];

const employers = [
  {
    name: "ABC Aged Care",
    industry: "养老护理",
    city: "Adelaide",
    address: "North Adelaide, SA",
    website: "#",
    linkedin: "#",
    careers: "#",
    history: true,
    regional: true,
    hiring: true,
    caution: false,
    roles: ["Aged Care Worker", "Registered Nurse"],
    recent: "Personal Care Assistant",
    action: "先投递官网 Careers 页面，再 LinkedIn 联系 HR。",
    risk: "核对岗位薪资、排班与证书要求。",
    x: 45,
    y: 58
  },
  {
    name: "Harbour Hospitality Group",
    industry: "餐饮与酒店",
    city: "Sydney",
    address: "Darling Harbour, NSW",
    website: "#",
    linkedin: "#",
    careers: "#",
    history: true,
    regional: false,
    hiring: true,
    caution: false,
    roles: ["Chef", "Cook", "Restaurant Manager"],
    recent: "Sous Chef",
    action: "先投岗位，再邮件联系 venue manager。",
    risk: "确认是否由总部统一处理 sponsorship。",
    x: 72,
    y: 51
  },
  {
    name: "Great Southern Motors",
    industry: "汽修",
    city: "Perth",
    address: "Cannington, WA",
    website: "#",
    linkedin: "#",
    careers: "#",
    history: false,
    regional: true,
    hiring: false,
    caution: false,
    roles: ["Motor Mechanic"],
    recent: "Light Vehicle Mechanic",
    action: "电话确认 workshop manager，再发简历和证书。",
    risk: "核对雇主规模与提名职位真实性。",
    x: 18,
    y: 58
  },
  {
    name: "CloudBridge Tech",
    industry: "信息技术",
    city: "Melbourne",
    address: "Docklands, VIC",
    website: "#",
    linkedin: "#",
    careers: "#",
    history: true,
    regional: false,
    hiring: true,
    caution: false,
    roles: ["Software Engineer", "DevOps Engineer"],
    recent: "Backend Engineer",
    action: "投递招聘页，LinkedIn 连接 engineering manager。",
    risk: "确认岗位是否接受海外或临签申请人。",
    x: 64,
    y: 72
  },
  {
    name: "Regional Harvest Kitchens",
    industry: "餐饮与酒店",
    city: "Toowoomba",
    address: "Toowoomba, QLD",
    website: "#",
    linkedin: "#",
    careers: "#",
    history: false,
    regional: true,
    hiring: true,
    caution: false,
    roles: ["Chef", "Cook"],
    recent: "Chef de Partie",
    action: "用地图扫街方式联系门店负责人。",
    risk: "确认地区属性、薪资与工时。",
    x: 76,
    y: 42
  },
  {
    name: "FastTrack Labour Hire",
    industry: "劳务与招聘",
    city: "Brisbane",
    address: "South Brisbane, QLD",
    website: "#",
    linkedin: "#",
    careers: "#",
    history: false,
    regional: false,
    hiring: false,
    caution: true,
    roles: ["Construction Labourer", "Cook"],
    recent: "General Labourer",
    action: "只做初步信息记录，不建议优先投入。",
    risk: "第三方收费、岗位真实性和担保承诺需谨慎。",
    x: 77,
    y: 37
  },
  {
    name: "Riverland Accounting Partners",
    industry: "会计与专业服务",
    city: "Adelaide",
    address: "Murray Bridge, SA",
    website: "#",
    linkedin: "#",
    careers: "#",
    history: false,
    regional: true,
    hiring: true,
    caution: false,
    roles: ["Accountant", "Tax Accountant"],
    recent: "Graduate Accountant",
    action: "先投递会计事务所岗位，再邮件说明地区稳定性和报税季经验。",
    risk: "确认岗位职责、薪资门槛与职业评估匹配度。",
    x: 48,
    y: 61
  }
];

const state = {
  occupation: occupations[0]
};

const $ = (selector) => document.querySelector(selector);
let currentLanguage = localStorage.getItem("siteLanguage") || "zh";
const sponsorJobs = window.VISA_SPONSOR_JOBS_DATABASE?.jobs || [];
const WORDPRESS_HOME_ENDPOINT =
  "https://cms.workroo.cn/?rest_route=/wp/v2/pages&slug=home&_embed=1";

function uniqueSorted(values) {
  return [...new Set(values.filter(Boolean))]
    .sort((a, b) => a.localeCompare(b, undefined, { sensitivity: "base" }));
}

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function populateHomeDatabaseOptions() {
  const classificationSelect = $("#heroClassification");
  if (classificationSelect && sponsorJobs.length) {
    const classifications = uniqueSorted(sponsorJobs.flatMap((job) => job.classifications || []));
    classificationSelect.innerHTML = [
      '<option value="all">全部行业</option>',
      ...classifications.map((item) => `<option value="${escapeHtml(item)}">${escapeHtml(item)}</option>`)
    ].join("");
  }

  const occupationSelect = $("#testOccupation");
  if (occupationSelect && sponsorJobs.length) {
    const priorityTitles = occupations.flatMap((item) => item.titles);
    const jobTitles = sponsorJobs.map((job) => job.title);
    const titles = uniqueSorted([...priorityTitles, ...jobTitles]);
    occupationSelect.innerHTML = titles
      .map((title) => `<option value="${escapeHtml(title)}"${title === "Chef" ? " selected" : ""}>${escapeHtml(title)}</option>`)
      .join("");
  }
}

const englishText = {
  "雇主机会导航": "Employer Opportunity Navigator",
  "公益型澳洲雇主担保信息平台": "Public-interest Australian employer sponsorship platform",
  "岗位数据库": "Job Database",
  "找雇主": "Find Employers",
  "职业库": "Occupations",
  "CSOL职业名单": "CSOL Occupation List",
  "签证路径": "Visa Pathways",
  "找雇主方法": "Employer Search Methods",
  "求职工具": "Job Search Tools",
  "避坑指南": "Risk Guide",
  "自测工具": "Self-check Tool",
  "联系我们": "Contact Us",
  "语言": "Language",
  "中文": "中文",
  "返回首页": "Back to Home",
  "主导航": "Main Navigation",
  "澳洲找工作 · 雇主担保机会导航": "Australia Jobs · Employer Sponsorship Navigator",
  "先找到岗位，再规划雇主担保": "Find the Job First, Then Plan Sponsorship",
  "面向澳洲求职和雇主担保申请人，聚合签证担保岗位、职业清单、求职网站和路径自测，帮你从职业关键词开始筛选机会。": "Built for Australian job seekers and employer sponsorship applicants, combining sponsorship jobs, occupation lists, job sites, and pathway self-checks so users can start from the right role keywords.",
  "平台数据概览": "Platform Data Overview",
  "签证担保岗位": "Visa Sponsorship Jobs",
  "CSOL 职业": "CSOL Occupations",
  "国家/地区数据": "Country/Region Data",
  "搜索岗位机会": "Search Job Opportunities",
  "输入职位、公司、城市或签证类型，例如 Chef、RN、Software Engineer": "Enter a role, company, city, or visa type, e.g. Chef, RN, Software Engineer",
  "热门关键词：": "Popular Keywords:",
  "按关键词、行业、签证类型筛选岗位": "Filter jobs by keyword, industry, and visa type",
  "整理职业入口和澳洲求职网站": "Organize occupation entry points and Australian job sites",
  "根据背景生成下一步行动清单": "Generate the next action checklist from your profile",
  "城市机会": "City Opportunities",
  "用城市缩小范围，再进入岗位搜索": "Narrow by City, Then Search Jobs",
  "求职推进": "Job Search Progression",
  "找到岗位之后，按三步判断能不能推进": "After Finding a Role, Use Three Steps to Judge Whether to Proceed",
  "开启你的澳洲雇主担保机会搜索": "Start Your Australian Employer Sponsorship Search",
  "按职业查岗位 · 按清单核职业 · 按路径准备下一步": "Search Jobs by Occupation · Check Occupation Lists · Plan Your Next Step",
  "输入职业、ANZSCO 代码或行业，快速进入签证担保岗位数据库，再核对 CSOL 职业名单、求职网站和签证路径。": "Enter an occupation, ANZSCO code, or industry to search the sponsorship job database, then check CSOL, job sites, and visa pathways.",
  "关键词": "Keyword",
  "职位、公司、城市或签证类型，例如 Chef、RN、Software Engineer": "Role, company, city, or visa type, e.g. Chef, RN, Software Engineer",
  "搜索岗位": "Search Jobs",
  "热门搜索：": "Popular Searches:",
  "筛选 4000+ 签证担保岗位": "Filter 4,000+ sponsorship jobs",
  "求职网站与职业检索路径": "Job sites and occupation search paths",
  "核对职业与 ANZSCO code": "Check occupation and ANZSCO code",
  "路径自测": "Pathway Self-check",
  "生成下一步材料清单": "Generate a document checklist",
  "澳洲雇主担保找雇主导航平台": "Australian Employer Sponsorship Opportunity Navigator",
  "按职业查雇主 · 按地图找机会 · 按路径规划下一步": "Search employers by occupation · Find opportunities by location · Plan your next step by pathway",
  "输入职业、ANZSCO 代码或行业，快速判断能否找雇主、哪些公司值得联系、下一步材料怎么准备。": "Enter an occupation, ANZSCO code, or industry to quickly assess employer potential, target companies, and preparation steps.",
  "职业 / ANZSCO / 行业": "Occupation / ANZSCO / Industry",
  "例如：Chef、Cook、Aged Care、Software Engineer、Accountant": "e.g. Chef, Cook, Aged Care, Software Engineer, Accountant",
  "搜索机会": "Search Opportunities",
  "查看签证担保岗位数据库": "View Visa Sponsorship Job Database",
  "普通": "Standard",
  "偏远地区": "Regional",
  "历史担保": "Past Sponsorship",
  "近期招聘": "Recently Hiring",
  "需谨慎": "Caution",
  "签证担保岗位数据库": "Visa Sponsorship Job Database",
  "按城市找雇主": "Find Employers by City",
  "按职业找雇主": "Find Employers by Occupation",
  "按签证路径找方案": "Plan by Visa Pathway",
  "找雇主方法库": "Employer Search Playbook",
  "雇主担保流程自测": "Employer Sponsorship Self-check",
  "领取公司名单": "Get Company List",
  "雇主库": "Employer Database",
  "把公司列表变成机会地图": "Turn Company Lists into Opportunity Signals",
  "全部机会": "All Opportunities",
  "全部城市": "All Cities",
  "全部行业": "All Industries",
  "职业检索系统": "Occupation Search System",
  "先判断职业，再决定找谁": "Assess the Occupation Before Choosing Employers",
  "样例数据，可接官方职业清单与薪资门槛更新": "Sample data, ready to connect with official occupation lists and salary updates",
  "自动生成搜索词": "Auto-generated Search Keywords",
  "查看 482 官方说明": "View Official 482 Guidance",
  "外部网站链接": "External Job Site Links",
  "澳洲求职网站合集": "Australian Job Site Directory",
  "综合类（必用）": "General Platforms",
  "澳洲第一，职位最多，本地雇主首选": "Australia's leading job board with the largest local employer coverage",
  "全球聚合平台，兼职/临时工多": "Global aggregator with many casual and temporary roles",
  "职位、求职指南、薪资数据": "Jobs, career guides, and salary data",
  "侧重本地中小企业与服务业": "Good for local SMEs and service industries",
  "聚合多平台职位，带薪资预估": "Aggregates multiple job boards with salary estimates",
  "应届生 / 毕业生": "Students / Graduates",
  "毕业生项目、实习、管培生": "Graduate programs, internships, and traineeships",
  "应届生岗位、雇主排名、求职辅导": "Graduate roles, employer rankings, and career guidance",
  "政府 / 公共部门": "Government / Public Sector",
  "政府免费就业资源": "Free government employment resources",
  "联邦公务员、公共服务岗位": "Federal government and public service roles",
  "华人 / 中文平台": "Chinese-language Platforms",
  "中文平台，华人雇主、兼职/临时工": "Chinese-language platform with Chinese employers and casual roles",
  "本地分类，兼职、小工、零工": "Local classifieds for casual, short-term, and gig work",
  "专业领域": "Professional Platforms",
  "中高端、专业岗、内推机会": "Mid-senior, professional roles, and referral opportunities",
  "公司评价、薪资、面试经验": "Company reviews, salary data, and interview insights",
  "行业协会": "Industry Associations",
  "IT 行业专属求职平台": "IT industry career platform",
  "会计行业专属岗位": "Accounting industry roles",
  "工程行业专属求职": "Engineering industry roles",
  "482 / 186 / 494 / Labour Agreement 对比": "482 / 186 / 494 / Labour Agreement Comparison",
  "186 / 482 / Labour Agreement 对比": "186 / 482 / Labour Agreement Comparison",
  "482 / 186 / Labour Agreement 怎么看": "How to Compare 482 / 186 / Labour Agreement",
  "查看相关岗位": "View Related Jobs",
  "适合已经找到愿意担保的雇主，用真实岗位填补本地难招聘职位，先看职业、经验、英语和薪资门槛。": "For applicants with a willing sponsor and a genuine hard-to-fill role. Start with occupation, experience, English, and salary threshold checks.",
  "适合有长期雇主支持、职业和材料更稳定、希望规划永居路径的人群。": "For applicants with long-term employer support, a stable occupation profile, and stronger permanent residence planning.",
  "适合标准路径不完全适配时，通过雇主协议、行业协议或 DAMA 等机制进一步核对。": "For cases where standard pathways do not fully fit, requiring checks through employer agreements, industry agreements, or DAMA.",
  "适合已找到愿意担保的雇主，填补本地难招聘岗位。": "For applicants with a sponsoring employer, filling roles that are hard to recruit locally.",
  "适合有长期雇主支持、希望通向永居的人群。": "For applicants with long-term employer support who are aiming for permanent residence.",
  "适合愿意去偏远地区发展的申请人。": "For applicants willing to work and live in eligible regional areas.",
  "适合职业或条件不完全适配标准路径时的协议机制。": "An agreement mechanism when the occupation or conditions do not fully fit standard pathways.",
  "查看 Labour Agreement 官方说明": "View Official Labour Agreement Guidance",
  "用户行动工具": "Action Tools",
  "从“知道”走到“联系”": "Move from Knowing to Contacting",
  "简历检查清单": "Resume Checklist",
  "澳洲格式：联系方式、签证状态、可上班时间清晰。": "Australian format: contact details, visa status, and availability are clear.",
  "职业关键词：匹配岗位标题、技能、证书与行业术语。": "Occupation keywords: match job titles, skills, certificates, and industry terms.",
  "经历表达：用动作、场景、结果描述工作贡献。": "Experience wording: describe contributions with actions, context, and outcomes.",
  "证书要求：白卡、护理注册、厨师证、驾照等按行业补齐。": "Certificates: prepare white card, registration, trade certificates, licences, or other role-specific evidence.",
  "面试问题库": "Interview Question Bank",
  "风险不是吓人，是让用户少走弯路": "Risk guidance helps users avoid costly detours",
  "收费担保风险": "Paid Sponsorship Risk",
  "警惕以岗位、担保名额为名收取异常费用。": "Be cautious of unusual fees charged in the name of jobs or sponsorship places.",
  "虚假岗位风险": "Fake Job Risk",
  "核对 ABN、官网、地址、招聘记录与面试流程。": "Check ABN, official website, address, hiring history, and interview process.",
  "低薪风险": "Low Salary Risk",
  "薪资门槛动态变化，需要跟随官方政策更新。": "Salary thresholds change over time and should be checked against official updates.",
  "材料造假风险": "Document Fraud Risk",
  "经历、证书、英语、合同材料必须真实一致。": "Experience, certificates, English evidence, and contracts must be genuine and consistent.",
  "雇主担保路径自测": "Employer Sponsorship Pathway Self-check",
  "自测结果仅作准备方向，政策以澳洲移民局为准": "Self-check results are preparation guidance only; official policy prevails.",
  "签证路径自测": "Visa Pathway Self-check",
  "AI 助手咨询": "AI Assistant Consultation",
  "问我下一步怎么准备": "Ask Me How to Prepare Next",
  "本地规则助手": "Local Rule-based Assistant",
  "你好，我可以根据你的职业、经验和英语情况，帮你整理找雇主、签证路径和材料准备的下一步。": "Hi, I can help organize your next steps for employer search, visa pathways, and document preparation based on your occupation, experience, and English level.",
  "例如：Chef 适合先找哪些雇主？我英语不够怎么办？": "e.g. Which employers should a Chef target first? What if my English is not enough?",
  "咨询 AI": "Ask AI",
  "材料准备": "Documents",
  "联系雇主": "Contact Employers",
  "路径选择": "Pathway Choice",
  "年龄": "Age",
  "最高学历": "Highest Qualification",
  "当前职业": "Current Occupation",
  "相关工作年限": "Relevant Work Experience",
  "主要工作内容": "Main Duties",
  "英语情况": "English Level",
  "18-24 岁": "18-24 years",
  "25-32 岁": "25-32 years",
  "33-39 岁": "33-39 years",
  "40-44 岁": "40-44 years",
  "45 岁及以上": "45 years and over",
  "博士学位": "Doctorate",
  "本科或硕士学位": "Bachelor or Masters degree",
  "澳洲文凭 / 技工证书": "Australian diploma or trade qualification",
  "评估机构认可的学历或奖项": "Qualification or award recognised by the assessing authority",
  "暂未匹配官方学历项": "No matching official qualification item yet",
  "少于 1 年": "Less than 1 year",
  "1-2 年": "1-2 years",
  "3-4 年": "3-4 years",
  "5-7 年": "5-7 years",
  "8 年及以上": "8 years or more",
  "雅思": "IELTS",
  "托福": "TOEFL",
  "PET": "PET",
  "澳洲学习经历": "Australian Study",
  "目标地区": "Target Region",
  "愿意去偏远地区": "Open to regional areas",
  "只考虑大城市": "Major cities only",
  "生成行动清单": "Generate Action List",
  "成功案例": "Success Cases",
  "真实路径拆解，帮你看清下一步": "Real pathway breakdowns to clarify your next step",
  "先用 Seek 和餐饮集团官网筛岗位，再联系门店经理，重点准备菜单经验、排班稳定性和推荐人。": "Use Seek and hospitality group career pages first, then contact venue managers, focusing on menu experience, roster stability, and referees.",
  "补齐注册、英语和推荐材料后，优先投递长期护理机构官网岗位，并通过 LinkedIn 跟进 HR。": "After preparing registration, English evidence, and references, prioritize aged-care employer career pages and follow up with HR on LinkedIn.",
  "通过岗位数据库筛支持 sponsorship 的公司，简历突出云平台、项目交付和团队协作经验。": "Use the job database to filter companies that support sponsorship, and highlight cloud platforms, delivery experience, and teamwork in the resume.",
  "领取更多澳洲雇主担保公司名单": "Get More Australian Employer Sponsorship Company Lists",
  "添加微信，获取按职业、城市、行业整理的雇主担保公司名单，并了解简历优化、求职陪跑和材料准备服务。": "Add WeChat to receive employer sponsorship company lists organized by occupation, city, and industry, and learn about resume support, job-search coaching, and document preparation.",
  "添加微信领取名单": "Add WeChat to Get the List",
  "备注：职业 + 城市，例如 Chef Adelaide、RN Perth、IT Sydney。": "Note your occupation + city, for example Chef Adelaide, RN Perth, or IT Sydney.",
  "偏远地区机会": "Regional Opportunities",
  "优先筛选偏远地区、DAMA 与 494 相关机会": "Prioritize regional, DAMA, and 494-related opportunities",
  "系统可按州、城市、职业、行业、距离与历史担保信号筛选雇主，适合餐饮、护理、汽修、建筑、酒店等行业做地图扫街。": "The system can screen employers by state, city, occupation, industry, distance, and sponsorship signals, useful for hospitality, care, automotive, construction, and hotel roles.",
  "公益信息平台原型，不替代移民法律意见。": "Public-interest information prototype; not a substitute for immigration legal advice.",
  "政策、职业清单与薪资门槛需以澳洲官方更新为准。": "Policies, occupation lists, and salary thresholds should be checked against official Australian updates.",
  "职业清单状态": "Occupation List Status",
  "可走路径": "Possible Pathways",
  "偏远地区适配": "Regional Fit",
  "对应行业": "Industry",
  "常见岗位名称": "Common Job Titles",
  "下一步": "Next Step",
  "筛选同城雇主，优先联系有招聘页、LinkedIn HR 与历史担保信号的公司。": "Filter employers in the same city and prioritize companies with career pages, LinkedIn HR contacts, and past sponsorship signals.",
  "适合职业：": "Suitable Roles: ",
  "最近岗位：": "Recent Role: ",
  "推荐动作：": "Recommended Action: ",
  "风险提示：": "Risk Note: ",
  "招聘页": "Careers",
  "普通雇主": "Standard Employer",
  "当前筛选没有匹配雇主，请换城市、行业或机会类型。": "No employers match the current filters. Try another city, industry, or opportunity type.",
  "餐饮与酒店": "Hospitality and Food Service",
  "养老护理": "Aged Care",
  "信息技术": "Information Technology",
  "会计与专业服务": "Accounting and Professional Services",
  "汽修": "Automotive Repair",
  "劳务与招聘": "Labour Hire and Recruitment",
  "常见于雇主担保相关职业范围，需核对最新清单": "Commonly seen in employer sponsorship contexts; check the latest official list.",
  "适合偏远地区与酒店餐饮集团机会": "Well suited to regional areas and hospitality groups.",
  "需按具体职业、协议或清单状态核对": "Must be checked against the specific occupation, agreement, or list status.",
  "强相关，偏远地区护理机构值得优先筛选": "Highly relevant; regional care providers are worth prioritizing.",
  "常见于技术类职业清单，需核对最新版本": "Common on technology occupation lists; check the latest version.",
  "大城市机会更多，偏远地区可看政府、矿业、医疗 IT": "More opportunities in major cities; regional options may include government, mining, and healthcare IT.",
  "需核对职业清单、评估与薪资要求": "Check the occupation list, skills assessment, and salary requirements.",
  "中小企业、地区会计事务所可作为突破口": "SMEs and regional accounting firms can be useful entry points.",
  "先投递官网 Careers 页面，再 LinkedIn 联系 HR。": "Apply through the careers page first, then contact HR on LinkedIn.",
  "核对岗位薪资、排班与证书要求。": "Check salary, roster, and certificate requirements.",
  "先投岗位，再邮件联系 venue manager。": "Apply first, then email the venue manager.",
  "确认是否由总部统一处理 sponsorship。": "Confirm whether sponsorship is handled centrally by head office.",
  "电话确认 workshop manager，再发简历和证书。": "Call to confirm the workshop manager, then send resume and certificates.",
  "核对雇主规模与提名职位真实性。": "Check employer scale and whether the nominated role is genuine.",
  "投递招聘页，LinkedIn 连接 engineering manager。": "Apply through the job page and connect with the engineering manager on LinkedIn.",
  "确认岗位是否接受海外或临签申请人。": "Confirm whether the role accepts offshore or temporary visa applicants.",
  "用地图扫街方式联系门店负责人。": "Use a map-based outreach approach to contact store managers.",
  "确认地区属性、薪资与工时。": "Confirm regional status, salary, and work hours.",
  "只做初步信息记录，不建议优先投入。": "Record for reference only; not recommended as a priority target.",
  "第三方收费、岗位真实性和担保承诺需谨慎。": "Be cautious about third-party fees, job authenticity, and sponsorship promises.",
  "先投递会计事务所岗位，再邮件说明地区稳定性和报税季经验。": "Apply to accounting firms first, then email about regional stability and tax-season experience.",
  "确认岗位职责、薪资门槛与职业评估匹配度。": "Confirm duties, salary threshold, and skills assessment fit.",
  "先补英语与材料一致性": "Improve English and document consistency first",
  "初步判断：": "Initial assessment:",
  "可能路径：": "Possible pathways:",
  "需要补齐基础条件后再评估": "Build the basic requirements first, then reassess",
  "下一步：核对职业清单和薪资门槛，准备英文简历、证书、推荐人、岗位关键词，并优先联系 偏远地区雇主。": "Next step: check occupation lists and salary thresholds, prepare an English resume, certificates, referees, and job keywords, and prioritize regional employers.",
  "下一步：核对职业清单和薪资门槛，准备英文简历、证书、推荐人、岗位关键词，并优先联系 有历史担保记录的雇主。": "Next step: check occupation lists and salary thresholds, prepare an English resume, certificates, referees, and job keywords, and prioritize employers with past sponsorship signals."
};

function translateText(value) {
  const leading = value.match(/^\s*/)?.[0] || "";
  const trailing = value.match(/\s*$/)?.[0] || "";
  const trimmed = value.trim();
  return englishText[trimmed] ? `${leading}${englishText[trimmed]}${trailing}` : value;
}

function translateAttribute(element, attribute, language) {
  const camelAttribute = attribute.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
  const storeKey = `zh${camelAttribute[0].toUpperCase()}${camelAttribute.slice(1)}`;
  if (!element.dataset[storeKey]) {
    element.dataset[storeKey] = element.getAttribute(attribute) || "";
  }
  const source = element.dataset[storeKey];
  element.setAttribute(attribute, language === "en" ? translateText(source) : source);
}

function applyLanguage(language = currentLanguage) {
  currentLanguage = language;
  localStorage.setItem("siteLanguage", language);
  document.documentElement.lang = language === "en" ? "en" : "zh-CN";

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent || ["SCRIPT", "STYLE"].includes(parent.tagName)) {
        return NodeFilter.FILTER_REJECT;
      }
      return node.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
    }
  });

  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach((node) => {
    if (!node.zhText) node.zhText = node.nodeValue;
    node.nodeValue = language === "en" ? translateText(node.zhText) : node.zhText;
  });

  document.querySelectorAll("[placeholder]").forEach((element) => translateAttribute(element, "placeholder", language));
  document.querySelectorAll("[aria-label]").forEach((element) => translateAttribute(element, "aria-label", language));
  document.querySelectorAll("[title]").forEach((element) => translateAttribute(element, "title", language));
  document.querySelectorAll("[data-zh-html][data-en-html]").forEach((element) => {
    element.innerHTML = language === "en" ? element.dataset.enHtml : element.dataset.zhHtml;
  });

  const select = $("#languageSelect");
  if (select) select.value = language;
}

function findOccupation(query) {
  const normalized = query.trim().toLowerCase();
  return (
    occupations.find((item) => {
      const haystack = [
        item.name,
        item.anzsco,
        item.industry,
        ...item.titles,
        ...item.keywords
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(normalized);
    }) || occupations[0]
  );
}

function renderOccupation(occupation) {
  const detail = $("#occupationDetail");
  if (detail) {
    detail.innerHTML = `
      <div class="occupation-title">
        <h3>${occupation.name}</h3>
        <span class="tag">ANZSCO ${occupation.anzsco}</span>
      </div>
      <div class="info-grid">
        <div class="info-item"><strong>职业清单状态</strong>${occupation.lists}</div>
        <div class="info-item"><strong>可走路径</strong>${occupation.paths.join(" / ")}</div>
        <div class="info-item"><strong>偏远地区适配</strong>${occupation.regional}</div>
        <div class="info-item"><strong>对应行业</strong>${occupation.industry}</div>
        <div class="info-item"><strong>常见岗位名称</strong>${occupation.titles.join("、")}</div>
        <div class="info-item"><strong>下一步</strong>筛选同城雇主，优先联系有招聘页、LinkedIn HR 与历史担保信号的公司。</div>
      </div>
    `;
  }

  const keywords = $("#keywordList");
  if (keywords) {
    keywords.innerHTML = occupation.keywords
      .map((keyword) => `<span>${keyword}</span>`)
      .join("");
  }

  applyLanguage(currentLanguage);
}

function markerClass(employer) {
  if (employer.caution) return "red";
  if (employer.hiring) return "orange";
  if (employer.history) return "purple";
  if (employer.regional) return "green";
  return "blue";
}

function fillFilters() {
  if (!$("#cityFilter") || !$("#industryFilter") || !$("#potentialFilter")) return;

  const cities = ["全部城市", ...new Set(employers.map((item) => item.city))];
  const industries = ["全部行业", ...new Set(employers.map((item) => item.industry))];
  $("#cityFilter").innerHTML = cities
    .map((city) => `<option value="${city === "全部城市" ? "all" : city}">${city}</option>`)
    .join("");
  $("#industryFilter").innerHTML = industries
    .map((industry) => `<option value="${industry === "全部行业" ? "all" : industry}">${industry}</option>`)
    .join("");
}

function getFilteredEmployers() {
  if (!$("#cityFilter") || !$("#industryFilter") || !$("#potentialFilter")) return [];

  const city = $("#cityFilter").value;
  const industry = $("#industryFilter").value;
  const potential = $("#potentialFilter").value;
  const occupationTerms = [state.occupation.name, ...state.occupation.titles].map((term) =>
    term.toLowerCase()
  );

  return employers.filter((employer) => {
    const matchesCity = city === "all" || employer.city === city;
    const matchesIndustry = industry === "all" || employer.industry === industry;
    const matchesPotential =
      potential === "all" ||
      (potential === "regional" && employer.regional) ||
      (potential === "history" && employer.history) ||
      (potential === "hiring" && employer.hiring) ||
      (potential === "caution" && employer.caution);
    const matchesOccupation = employer.roles.some((role) => {
      const normalizedRole = role.toLowerCase();
      return occupationTerms.some(
        (term) => normalizedRole.includes(term) || term.includes(normalizedRole)
      );
    });
    return matchesCity && matchesIndustry && matchesPotential && matchesOccupation;
  });
}

function renderEmployers() {
  if (!$("#employerGrid")) return;

  const filtered = getFilteredEmployers();
  $("#employerGrid").innerHTML =
    filtered
      .map((employer) => {
        const tags = [
          employer.regional ? "偏远地区" : "普通雇主",
          employer.history ? "历史担保" : "",
          employer.hiring ? "近期招聘" : "",
          employer.caution ? "需谨慎" : ""
        ]
          .filter(Boolean)
          .map((tag) => `<span class="tag">${tag}</span>`)
          .join("");

        return `
          <article class="employer-card">
            <header>
              <div>
                <h3>${employer.name}</h3>
                <small>${employer.city} · ${employer.industry}</small>
              </div>
              <span class="pin ${markerClass(employer)}" aria-hidden="true"></span>
            </header>
            <div class="chips">${tags}</div>
            <p><strong>适合职业：</strong>${employer.roles.join(" / ")}</p>
            <p><strong>最近岗位：</strong>${employer.recent}</p>
            <p><strong>推荐动作：</strong>${employer.action}</p>
            <p><strong>风险提示：</strong>${employer.risk}</p>
            <div class="employer-actions">
              <a href="${employer.careers}">招聘页</a>
              <a href="${employer.linkedin}">LinkedIn</a>
            </div>
          </article>
        `;
      })
      .join("") || `<p>当前筛选没有匹配雇主，请换城市、行业或机会类型。</p>`;

  renderMap(filtered);
  applyLanguage(currentLanguage);
}

function renderMap(items = getFilteredEmployers()) {
  const map = $("#opportunityMap");
  if (!map) return;

  map.innerHTML = items
    .map(
      (employer) => `
        <div class="map-marker" style="left:${employer.x}%;top:${employer.y}%">
          <span class="pin ${markerClass(employer)}"></span>
          <span>${employer.city}<br />${employer.name}</span>
        </div>
      `
    )
    .join("");
}

function runSelfTest(event) {
  event.preventDefault();
  const ageBand = $("#ageInput").value;
  const qualification = $("#qualificationInput").value;
  const years = Number($("#yearsInput").value);
  const english = $("#englishInput").value;
  const australianStudy = Number($("#australianStudyInput").value || 0);
  const occupation = $("#testOccupation").value.trim() || state.occupation.name;
  const workContent = $("#workContentInput").value.trim();
  const paths = [];
  const notes = [];

  if (years >= 1) {
    paths.push("482 / Skills in Demand");
  } else {
    notes.push("482 通常要先核对提名职业、至少 1 年相关工作经历、英语和薪资门槛。");
  }

  if (years >= 3 && ageBand !== "45+") {
    paths.push("186 Direct Entry");
  } else {
    notes.push("186 Direct Entry 重点看 45 岁以下、Competent English、职业评估和至少 3 年相关经验。");
  }

  notes.push(`英语考试类型已选择 ${$("#englishInput").selectedOptions[0].textContent}，下一步需要补充对应成绩。`);
  if (qualification === "none") notes.push("学历需要对照职业评估机构要求补证书、学历或行业注册。");
  if (australianStudy > 0) notes.push(`澳洲学习经历已填写 ${australianStudy} 年，可作为材料亮点并核对 Australian study requirement。`);
  if (!workContent) notes.push("请补充主要工作内容，方便对照 ANZSCO 职责、雇主岗位描述和职业评估。");
  if (years < 1 || qualification === "none") paths.push("Labour Agreement / DAMA 方向可进一步核对");

  const zhPaths = paths.join(" / ") || "需要补齐基础条件后再评估";
  const enPaths =
    paths
      .map((path) => {
        if (path === "482 / Skills in Demand") return "482 / Skills in Demand";
        if (path === "186 Direct Entry") return "186 Direct Entry";
        if (path === "Labour Agreement / DAMA 方向可进一步核对") return "Labour Agreement / DAMA may be worth checking";
        return path;
      })
      .join(" / ") || "Build the basic requirements first, then reassess";

  const zhNotes = notes.length
    ? `<br /><strong>需要核对：</strong>${notes.join(" ")}`
    : "<br /><strong>当前信号：</strong>年龄、英语和经验组合较完整，可以优先找真实雇主岗位并核对职业清单。";
  const enNotes = notes.length
    ? `<br /><strong>Check points:</strong> ${notes
        .map((note) =>
          note
            .replace("482 通常要先核对提名职业、至少 1 年相关工作经历、英语和薪资门槛。", "For 482, check the nominated occupation, at least 1 year of relevant experience, English, and salary threshold.")
            .replace("186 Direct Entry 重点看 45 岁以下、Competent English、职业评估和至少 3 年相关经验。", "For 186 Direct Entry, focus on being under 45, Competent English, skills assessment, and at least 3 years of relevant experience.")
            .replace(`英语考试类型已选择 ${$("#englishInput").selectedOptions[0].textContent}，下一步需要补充对应成绩。`, `English test type is ${$("#englishInput").selectedOptions[0].textContent}; add the matching score next.`)
            .replace("学历需要对照职业评估机构要求补证书、学历或行业注册。", "Match qualifications, certificates, or registration to the assessing authority requirements.")
            .replace(`澳洲学习经历已填写 ${australianStudy} 年，可作为材料亮点并核对 Australian study requirement。`, `Australian study is ${australianStudy} years; it can strengthen the evidence and should be checked against the Australian study requirement.`)
            .replace("请补充主要工作内容，方便对照 ANZSCO 职责、雇主岗位描述和职业评估。", "Add main duties to compare against ANZSCO tasks, employer job descriptions, and skills assessment.")
        )
        .join(" ")}`
    : "<br /><strong>Current signal:</strong> age, English, and experience look relatively complete; prioritize genuine employer roles and occupation list checks.";

  const output = $("#testOutput");
  output.dataset.zhHtml = `
    <strong>${occupation} 初步判断：</strong><br />
    可能路径：${zhPaths}。<br />
    关键背景：${$("#ageInput").selectedOptions[0].textContent}，${$("#qualificationInput").selectedOptions[0].textContent}，英语考试 ${$("#englishInput").selectedOptions[0].textContent}，澳洲学习 ${australianStudy || 0} 年。${zhNotes}<br />
    下一步：核对职业清单、ANZSCO 工作内容、薪资门槛和雇主提名条件，准备英文简历、证书、推荐人、岗位关键词，并优先联系有历史担保记录或正在招聘的雇主。
  `;
  output.dataset.enHtml = `
    <strong>${occupation} initial assessment:</strong><br />
    Possible pathways: ${enPaths}.<br />
    Profile: ${$("#ageInput").selectedOptions[0].textContent}, ${$("#qualificationInput").selectedOptions[0].textContent}, English test ${$("#englishInput").selectedOptions[0].textContent}, Australian study ${australianStudy || 0} years.${enNotes}<br />
    Next step: check occupation lists, ANZSCO duties, salary thresholds, and nomination conditions; prepare an English resume, certificates, referees, and job keywords; then prioritize employers with past sponsorship signals or active hiring.
  `;
  applyLanguage(currentLanguage);
}

function addAiMessage(text, type = "assistant") {
  const container = $("#aiMessages");
  if (!container) return;
  const message = document.createElement("div");
  message.className = `ai-message ${type}`;
  message.textContent = text;
  container.appendChild(message);
  container.scrollTop = container.scrollHeight;
}

function buildAiAnswer(question) {
  const occupation = $("#testOccupation")?.value.trim() || state.occupation.name;
  const years = Number($("#yearsInput")?.value || 0);
  const english = $("#englishInput")?.value || "ielts";
  const lower = question.toLowerCase();
  const isEnglish = currentLanguage === "en";

  if (lower.includes("482") || lower.includes("186") || question.includes("路径")) {
    return isEnglish
      ? `${occupation}: if you already have an employer and at least 2 years of relevant experience, start with 482. If you have stronger long-term employer support, suitable age, English, and assessment evidence, compare 186 as a permanent pathway.`
      : `${occupation}：如果你已经有愿意担保的雇主，并且有至少 2 年相关经验，可以先看 482；如果雇主支持长期岗位、年龄英语和评估材料更完整，再对比 186 永居路径。`;
  }

  if (lower.includes("english") || question.includes("英语")) {
    return isEnglish
      ? `Your English setting is ${english}. If English is weak, prepare a short-term test plan first, then contact employers with a clear timeline and evidence of improving scores.`
      : `你当前英语选项是“${$("#englishInput").selectedOptions[0].textContent}”。如果英语偏弱，建议先做 4-8 周提分计划，再联系雇主时说明考试时间线和已有成绩。`;
  }

  if (lower.includes("document") || question.includes("材料") || question.includes("简历")) {
    return isEnglish
      ? `Prepare: Australian-style resume, certificates/licences, employment references, payslips or contracts if available, English evidence, and a role keyword list for ${occupation}.`
      : `建议先准备：澳洲格式简历、证书/执照、雇主推荐人、能证明工作经历的合同或工资单、英语成绩，以及 ${occupation} 对应的岗位关键词表。`;
  }

  if (lower.includes("employer") || question.includes("雇主") || question.includes("联系")) {
    return isEnglish
      ? `For ${occupation}, search career pages and LinkedIn first. Apply to active roles, then send a short follow-up to HR or the hiring manager asking whether sponsorship can be considered for suitable candidates.`
      : `找 ${occupation} 雇主时，先投官网 Careers 和 LinkedIn 上的真实岗位，再用简短邮件跟进 HR 或 hiring manager，询问合适候选人是否可考虑 sponsorship。`;
  }

  return isEnglish
    ? `${occupation}: with ${years} years of experience, start by matching your resume to current job titles, checking 482/186 requirements on Home Affairs, and building a list of employers with active hiring signals.`
    : `${occupation}：你有 ${years} 年经验，建议先把简历匹配到当前岗位标题，再核对移民局 482/186 要求，并整理一批有招聘信号的雇主名单逐个联系。`;
}

function askAi(question) {
  const value = question || $("#aiQuestion")?.value.trim();
  if (!value) return;
  addAiMessage(value, "user");
  addAiMessage(buildAiAnswer(value), "assistant");
  if ($("#aiQuestion")) $("#aiQuestion").value = "";
}

function initSuccessCaseCarousel() {
  const carousel = $("#successCaseCarousel");
  if (!carousel) return;

  const slides = Array.from(carousel.querySelectorAll("[data-case-slide]"));
  const dots = Array.from(document.querySelectorAll("[data-case-dot]"));
  const prev = $("#casePrev");
  const next = $("#caseNext");
  if (slides.length <= 1) return;
  if (carousel.dataset.carouselReady === "true") return;
  carousel.dataset.carouselReady = "true";

  let current = 0;
  let timer;

  const showSlide = (index) => {
    current = (index + slides.length) % slides.length;
    slides.forEach((slide, slideIndex) => {
      slide.classList.toggle("is-active", slideIndex === current);
    });
    dots.forEach((dot, dotIndex) => {
      dot.classList.toggle("is-active", dotIndex === current);
    });
  };

  const start = () => {
    window.clearInterval(timer);
    timer = window.setInterval(() => showSlide(current + 1), 6000);
  };

  prev?.addEventListener("click", () => {
    showSlide(current - 1);
    start();
  });
  next?.addEventListener("click", () => {
    showSlide(current + 1);
    start();
  });
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      showSlide(index);
      start();
    });
  });
  carousel.addEventListener("mouseenter", () => window.clearInterval(timer));
  carousel.addEventListener("mouseleave", start);

  showSlide(0);
  start();
}

function getAcfImageUrl(value) {
  if (!value) return "";
  if (typeof value === "string") return value.trim();
  if (typeof value !== "object") return "";

  const sizeValue =
    value.sizes?.full ||
    value.sizes?.large ||
    value.sizes?.medium ||
    value.media_details?.sizes?.full?.source_url ||
    value.media_details?.sizes?.large?.source_url ||
    value.media_details?.sizes?.medium?.source_url;
  const candidate = value.url || value.source_url || value.guid?.rendered || sizeValue;

  if (typeof candidate === "string") return candidate.trim();
  if (candidate && typeof candidate === "object") return getAcfImageUrl(candidate);
  return "";
}

function setCmsText(selector, value) {
  if (typeof value !== "string" && typeof value !== "number") return;
  const text = String(value).trim();
  const element = $(selector);
  if (!element || !text) return;

  element.textContent = text;
  element.dataset.cmsManaged = "true";
}

function setCmsHeroBackground(value) {
  const imageUrl = getAcfImageUrl(value);
  const hero = $(".hero");
  if (!hero || !imageUrl) return;

  const safeUrl = imageUrl.replace(/"/g, "%22");
  hero.style.backgroundImage = `linear-gradient(90deg, rgba(3, 14, 32, 0.98) 0%, rgba(5, 26, 58, 0.92) 42%, rgba(5, 26, 58, 0.56) 68%, rgba(5, 26, 58, 0.18) 100%), url("${safeUrl}")`;
  hero.style.backgroundPosition = "center";
  hero.style.backgroundSize = "cover";
}

function setCmsWechatId(value) {
  if (typeof value !== "string" && typeof value !== "number") return;
  const text = String(value).trim();
  const card = $(".wechat-card");
  if (!card || !text) return;

  let target = card.querySelector(".wechat-id");
  if (!target) {
    target = document.createElement("span");
    target.className = "wechat-id";
    const title = card.querySelector("strong");
    if (title) {
      title.insertAdjacentElement("afterend", target);
    } else {
      card.prepend(target);
    }
  }
  target.textContent = text;
  target.dataset.cmsManaged = "true";
}

async function applyWordPressHomeContent() {
  try {
    const response = await fetch(WORDPRESS_HOME_ENDPOINT, {
      headers: { Accept: "application/json" }
    });
    if (!response.ok) return;

    const pages = await response.json();
    const acf = Array.isArray(pages) ? pages[0]?.acf : null;
    if (!acf || typeof acf !== "object") return;

    setCmsText(".hero-copy .eyebrow", acf.hero_badge);
    setCmsText(".hero-copy h1", acf.hero_title);
    setCmsText(".hero-copy .lede", acf.hero_subtitle);
    setCmsHeroBackground(acf.hero_background);
    setCmsText("#contact h2", acf.contact_title);
    setCmsText("#contact .contact-layout > div:first-child h2 + p", acf.contact_text);
    setCmsWechatId(acf.wechat_id);

    const qrUrl = getAcfImageUrl(acf.wechat_qr);
    const qrImage = $(".wechat-card img.wechat-qr");
    if (qrImage && qrUrl) {
      qrImage.src = qrUrl;
      qrImage.dataset.cmsManaged = "true";
    }
  } catch (error) {
    // Keep the static homepage content when WordPress is unavailable.
  }
}

function bindEvents() {
  const heroSearch = $("#heroSearch");
  if (heroSearch) {
    heroSearch.addEventListener("submit", (event) => {
      event.preventDefault();
      const query = $("#searchInput").value.trim();
      const country = $("#heroCountry")?.value || "all";
      const classification = $("#heroClassification")?.value || "all";
      const params = new URLSearchParams();
      if (query) params.set("q", query);
      if (country !== "all") params.set("country", country);
      if (classification !== "all") params.set("classification", classification);
      state.occupation = findOccupation(query);
      const target = params.toString() ? `jobs.html?${params.toString()}` : "jobs.html";
      window.location.href = target;
    });

    $("#heroResetFilters")?.addEventListener("click", () => {
      heroSearch.reset();
      $("#searchInput").focus();
    });
  }

  document.querySelectorAll("[data-query]").forEach((button) => {
    button.addEventListener("click", () => {
      $("#searchInput").value = button.dataset.query;
      if (heroSearch) heroSearch.requestSubmit();
    });
  });

  ["cityFilter", "industryFilter", "potentialFilter"].forEach((id) => {
    const filter = $(`#${id}`);
    if (filter) filter.addEventListener("change", renderEmployers);
  });

  $("#selfTestForm")?.addEventListener("submit", runSelfTest);
  $("#askAiButton")?.addEventListener("click", () => askAi());
  $("#aiQuestion")?.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      askAi();
    }
  });
  document.querySelectorAll("[data-ai-prompt]").forEach((button) => {
    button.addEventListener("click", () => askAi(button.dataset.aiPrompt));
  });
  $("#languageSelect")?.addEventListener("change", (event) => {
    applyLanguage(event.target.value);
    if (window.lucide) window.lucide.createIcons();
  });
}

populateHomeDatabaseOptions();
fillFilters();
renderOccupation(state.occupation);
initSuccessCaseCarousel();
bindEvents();
applyLanguage(currentLanguage);
if (window.lucide) window.lucide.createIcons();
applyWordPressHomeContent();
