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
  "https://cms.workroo.cn/?rest_route=/wp/v2/pages/14";
const WORDPRESS_MEDIA_ENDPOINT = "https://cms.workroo.cn/?rest_route=/wp/v2/media/";
const WORDPRESS_ARTICLES_ENDPOINT =
  "https://cms.workroo.cn/?rest_route=/wp/v2/posts&_embed=1";
const USE_WORDPRESS_ARTICLES = false;

const guideCategories = [
  "签证政策解读",
  "雇主担保岗位分析",
  "澳洲职业清单",
  "城市求职机会",
  "行业求职攻略",
  "简历面试与投递技巧"
];

const articleCategoryImages = {
  "签证政策解读": "assets/australia-inner-hero-bg.png",
  "雇主担保岗位分析": "assets/occupation-job-search-hero-ai.png",
  "澳洲职业清单": "assets/city-canberra-ai.png",
  "城市求职机会": "assets/city-sydney-ai.png",
  "行业求职攻略": "assets/city-melbourne-ai.png",
  "简历面试与投递技巧": "assets/case-186-grant-2026.jpg"
};
const ARTICLES_PER_PAGE = 6;

const guideArticles = [
  {
    slug: "186-employer-sponsored-visa-guide",
    title: "186雇主担保适合哪些澳洲求职申请人",
    description:
      "186雇主担保适合已经具备职业经验、能匹配澳洲雇主岗位需求，并希望通过雇主提名获得长期身份路径的申请人。",
    keywords:
      "186雇主担保,澳洲雇主担保,澳洲工作机会,482转186,澳洲移民工作",
    publishDate: "2026-05-27",
    category: "签证政策解读",
    excerpt:
      "直接回答186雇主担保的适用人群、岗位匹配重点和准备顺序，帮助申请人先判断方向。",
    content: `
      <p>186雇主担保通常适合职业方向清晰、工作经验能被雇主验证，并且岗位职责可以匹配澳洲提名职业的申请人。申请前应先确认职业、英文岗位关键词、雇主岗位真实性和材料完整度。</p>
      <h2>先判断职业是否能对应提名岗位</h2>
      <p>申请人需要把自己的工作经历拆成岗位职责，再和澳洲招聘广告、ANZSCO职业描述和雇主实际岗位进行对照。不要只看职位名称，重点看日常职责、技能要求和薪资范围。</p>
      <h2>再判断雇主是否具备提名基础</h2>
      <p>雇主担保不是单纯找到工作即可，还要看雇主经营、岗位必要性、薪资水平和招聘需求。求职时建议优先选择长期招聘、岗位描述清晰、公司信息透明的雇主。</p>
      <h3>准备顺序建议</h3>
      <p>先整理职业关键词和澳洲版简历，再筛选岗位数据库，最后针对目标岗位准备证书、推荐信、英文能力和面试说法。</p>
    `,
    faq: [
      {
        question: "186雇主担保一定要先有澳洲工作经验吗？",
        answer: "不一定，但需要证明你的经验能够匹配提名岗位。是否需要本地经验要看行业、雇主和岗位要求。"
      },
      {
        question: "找186岗位应该先看什么？",
        answer: "先看职业是否匹配，再看岗位职责、雇主背景、薪资和是否愿意考虑sponsorship。"
      }
    ]
  },
  {
    slug: "482-sponsorship-jobs-keywords",
    title: "如何用关键词筛选482和186签证担保岗位",
    description:
      "筛选482和186签证担保岗位时，应同时使用职业名称、行业词、城市词和sponsorship相关英文关键词。",
    keywords:
      "482签证工作,186雇主担保岗位,澳洲sponsorship jobs,澳洲工作机会,雇主担保岗位",
    publishDate: "2026-05-27",
    category: "雇主担保岗位分析",
    excerpt:
      "用Software、Chef、Aged Care、Sponsorship等关键词组合，提高岗位筛选效率。",
    content: `
      <p>筛选担保岗位的核心方法是把职业词、城市词和签证词组合起来搜索，例如“Chef sponsorship Sydney”“Software Engineer 482 visa”“Aged Care sponsorship regional”。</p>
      <h2>岗位关键词不要只用中文职业名</h2>
      <p>澳洲招聘网站主要使用英文岗位标题。申请人应准备3到8个常见英文岗位名，例如Software Engineer、Developer、Cloud Engineer、Data Analyst等。</p>
      <h2>签证相关关键词要组合使用</h2>
      <p>常见关键词包括sponsorship、482 visa、186 visa、employer sponsored、relocation support、visa considered。不同公司写法不同，组合搜索能覆盖更多机会。</p>
      <h3>筛选后要回到原始招聘页面核对</h3>
      <p>看到相关岗位后，应打开公司官网或招聘原始页，核对岗位职责、薪资、工作地点、合同类型和申请要求。</p>
    `,
    faq: [
      {
        question: "搜索到sponsorship就一定能担保吗？",
        answer: "不一定。sponsorship只是筛选线索，最终仍要以雇主回复、岗位要求和官方政策为准。"
      },
      {
        question: "没有写visa sponsorship的岗位还可以投吗？",
        answer: "可以投，但要在跟进邮件中礼貌确认是否考虑合适候选人的签证担保。"
      }
    ]
  },
  {
    slug: "csol-occupation-list-how-to-use",
    title: "CSOL职业清单怎么用于澳洲雇主担保求职",
    description:
      "CSOL职业清单可用于先确认职业方向，再反推英文岗位关键词和澳洲招聘市场中的相近职位。",
    keywords:
      "CSOL职业查询,澳洲职业清单,澳洲雇主担保职业,ANZSCO,澳洲职业库",
    publishDate: "2026-05-27",
    category: "澳洲职业清单",
    excerpt:
      "解释如何把CSOL、ANZSCO和岗位关键词连接起来，减少职业方向判断错误。",
    content: `
      <p>CSOL职业清单的作用不是直接告诉你哪里有工作，而是帮助你确认职业名称、ANZSCO code和技能方向，再用这些信息去筛选岗位。</p>
      <h2>先看职业名称，再看岗位职责</h2>
      <p>同一个中文职业可能对应多个英文岗位，申请人应结合ANZSCO描述、学历背景和实际工作内容判断最接近的职业方向。</p>
      <h2>用职业清单反推求职关键词</h2>
      <p>确认职业后，可以整理英文岗位标题、常见技能词和行业词。例如Business Analyst可以扩展到Systems Analyst、Product Analyst、Process Analyst等相关方向。</p>
      <h3>不要只按清单名称投递</h3>
      <p>招聘广告更关注雇主实际需求。求职时应把清单职业、岗位标题和简历经历三者对齐。</p>
    `,
    faq: [
      {
        question: "CSOL上有职业就一定可以申请雇主担保吗？",
        answer: "不一定，还需要看签证类别、雇主提名要求、薪资、经验和职业评估等条件。"
      },
      {
        question: "职业名称不完全一样怎么办？",
        answer: "重点比较岗位职责和技能要求，必要时咨询专业意见确认职业匹配。"
      }
    ]
  },
  {
    slug: "australia-city-job-opportunities",
    title: "悉尼墨尔本布里斯班等城市如何筛选雇主担保机会",
    description:
      "不同澳洲城市的行业结构和招聘机会不同，筛选雇主担保岗位时应结合城市、行业和职业关键词。",
    keywords:
      "悉尼工作机会,墨尔本工作机会,布里斯班工作机会,澳洲城市求职,澳洲雇主担保岗位",
    publishDate: "2026-05-27",
    category: "城市求职机会",
    excerpt:
      "按城市拆解求职方向，帮助申请人判断大城市和偏远地区机会差异。",
    content: `
      <p>澳洲城市求职不能只看岗位数量，还要看行业集中度、雇主规模和是否愿意考虑海外或临签申请人。悉尼和墨尔本岗位多，偏远地区在部分行业可能更适合突破。</p>
      <h2>大城市适合专业岗位密集搜索</h2>
      <p>悉尼、墨尔本和布里斯班更适合IT、会计、工程、医疗和企业服务类岗位。申请人应重点优化英文简历和LinkedIn。</p>
      <h2>偏远地区适合看紧缺行业</h2>
      <p>餐饮、护理、技工、农业和区域服务行业可以关注偏远地区机会。筛选时要核对地区属性、薪资和雇主稳定性。</p>
      <h3>城市筛选要配合行业筛选</h3>
      <p>建议用“职业 + 城市 + sponsorship”的组合方式搜索，再把结果导回岗位数据库和公司官网核对。</p>
    `,
    faq: [
      {
        question: "哪个城市最容易找到雇主担保？",
        answer: "没有固定答案。要看职业、经验、英文、雇主需求和当地行业结构。"
      },
      {
        question: "偏远地区一定更容易吗？",
        answer: "偏远地区在部分行业机会更集中，但也要看雇主资质、岗位真实性和生活成本。"
      }
    ]
  },
  {
    slug: "aged-care-hospitality-it-sponsorship",
    title: "IT餐饮护理等行业的澳洲雇主担保求职思路",
    description:
      "IT、餐饮、护理、工程等行业筛选澳洲雇主担保岗位时，需要使用不同的关键词和投递策略。",
    keywords:
      "澳洲IT工作,澳洲餐饮工作,澳洲护理工作,Aged Care sponsorship,Chef sponsorship",
    publishDate: "2026-05-27",
    category: "行业求职攻略",
    excerpt:
      "按行业说明求职重点，让申请人知道简历和关键词应该怎么调整。",
    content: `
      <p>不同行业的雇主担保求职逻辑不同。IT更看技能栈和项目经验，餐饮更看岗位稳定性和实操经验，护理与Aged Care更看证书、合规要求和排班能力。</p>
      <h2>IT行业重点展示技能栈和项目结果</h2>
      <p>Software、Cloud、Data相关岗位应突出技术栈、项目规模、业务结果和英文沟通能力。简历要对齐招聘广告中的关键词。</p>
      <h2>餐饮和护理行业重点证明可上岗</h2>
      <p>Chef、Cook、Aged Care、Registered Nurse等方向要明确证书、工作年限、班次适应能力和推荐人。</p>
      <h3>行业不同，跟进方式也不同</h3>
      <p>专业岗位适合LinkedIn和官网投递，服务行业可结合门店、招聘邮箱和电话确认。</p>
    `,
    faq: [
      {
        question: "行业热门就一定适合我吗？",
        answer: "不一定。热门行业只是机会多，仍要看你的经历、证书、英文和职业匹配度。"
      },
      {
        question: "跨行业申请雇主担保可行吗？",
        answer: "可行但难度更高，需要证明新行业能力和岗位匹配，通常要先补经验或证书。"
      }
    ]
  },
  {
    slug: "australia-resume-interview-sponsorship",
    title: "申请澳洲雇主担保岗位的简历和面试怎么准备",
    description:
      "申请澳洲雇主担保岗位时，简历要突出岗位匹配、英文关键词、可验证经验和签证沟通方式。",
    keywords:
      "澳洲简历,澳洲面试,雇主担保求职,澳洲求职技巧,sponsorship resume",
    publishDate: "2026-05-27",
    category: "简历面试与投递技巧",
    excerpt:
      "回答简历、面试和跟进邮件该怎么围绕sponsorship表达。",
    content: `
      <p>申请雇主担保岗位时，简历不能只写经历清单，而要让雇主快速看到你能胜任岗位、经验可验证，并且签证沟通清楚。</p>
      <h2>简历要先对齐岗位关键词</h2>
      <p>把招聘广告中的技能、职责和证书要求提取出来，放入简历的Summary、Skills和Experience中。每段经历尽量写结果和数据。</p>
      <h2>面试中要清楚说明签证状态</h2>
      <p>不要一开始只谈签证。先证明你能解决岗位问题，再简洁说明当前签证、可入职时间和是否需要sponsorship。</p>
      <h3>投递后要有跟进节奏</h3>
      <p>投递后3到5个工作日可发送简短跟进邮件，重点表达岗位匹配和希望确认下一步。</p>
    `,
    faq: [
      {
        question: "简历里要不要写需要雇主担保？",
        answer: "可以简洁写清当前签证状态，但重点仍应放在岗位匹配和工作能力上。"
      },
      {
        question: "面试什么时候谈sponsorship？",
        answer: "通常在雇主对你能力产生兴趣后再具体谈，会更自然也更有效。"
      }
    ]
  }
];

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

function getAcfImageId(value) {
  if (!value) return "";
  if (typeof value === "number") return Number.isFinite(value) ? String(value) : "";
  if (typeof value === "string" && /^\d+$/.test(value.trim())) return value.trim();
  if (typeof value !== "object") return "";
  return value.ID || value.id || value.media_id || "";
}

async function fetchWordPressMediaUrl(mediaId) {
  if (!mediaId) return "";
  try {
    const response = await fetch(`${WORDPRESS_MEDIA_ENDPOINT}${encodeURIComponent(mediaId)}`, {
      headers: { Accept: "application/json" }
    });
    if (!response.ok) return "";
    const media = await response.json();
    return getAcfImageUrl(media);
  } catch (error) {
    return "";
  }
}

async function resolveAcfImageUrl(value) {
  const directUrl = getAcfImageUrl(value);
  if (directUrl && !/^\d+$/.test(directUrl)) return directUrl;
  return fetchWordPressMediaUrl(getAcfImageId(value) || directUrl);
}

function setCmsText(selector, value) {
  if (typeof value !== "string" && typeof value !== "number") return;
  const text = String(value).trim();
  const element = $(selector);
  if (!element || !text) return;

  element.textContent = text;
  element.dataset.cmsManaged = "true";
}

async function setCmsHeroBackground(value) {
  const imageUrl = await resolveAcfImageUrl(value);
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

    const page = await response.json();
    const acf = page?.acf;
    if (!acf || typeof acf !== "object") return;

    setCmsText(".hero-copy .eyebrow", acf.hero_badge);
    setCmsText(".hero-copy h1", acf.hero_title);
    setCmsText(".hero-copy .lede", acf.hero_subtitle);
    await setCmsHeroBackground(acf.hero_background);
  } catch (error) {
    // Keep the static homepage content when WordPress is unavailable.
  }
}

function formatGuideDate(value) {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString("zh-CN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  });
}

function getMetaContent(name) {
  return document.querySelector(`meta[name="${name}"]`);
}

function setPageMeta(article) {
  if (!article) return;
  document.title = article.title;
  const description = getMetaContent("description");
  const keywords = getMetaContent("keywords");
  if (description) description.setAttribute("content", article.description || "");
  if (keywords) keywords.setAttribute("content", article.keywords || "");
}

function normaliseWordPressArticle(post) {
  const acf = post?.acf || {};
  const slug = post?.slug || acf.slug;
  const title = acf.title || post?.title?.rendered;
  if (!slug || !title) return null;
  const embeddedImage = post?._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
  const acfImage = typeof acf.image === "string" ? acf.image : acf.image?.url;

  return {
    slug,
    title,
    description: acf.description || post?.excerpt?.rendered?.replace(/<[^>]*>/g, "").trim() || "",
    keywords: acf.keywords || "",
    publishDate: acf.publishDate || post?.date?.slice(0, 10) || "",
    category: acf.category || "签证政策解读",
    excerpt: acf.excerpt || acf.description || "",
    image: acf.imageUrl || acf.cover || acfImage || embeddedImage || "",
    content: acf.content || post?.content?.rendered || "",
    faq: Array.isArray(acf.faq) ? acf.faq : []
  };
}

async function getGuideArticles() {
  if (!USE_WORDPRESS_ARTICLES) return guideArticles;

  try {
    const response = await fetch(WORDPRESS_ARTICLES_ENDPOINT, {
      headers: { Accept: "application/json" }
    });
    if (!response.ok) return guideArticles;
    const posts = await response.json();
    const articles = Array.isArray(posts)
      ? posts.map(normaliseWordPressArticle).filter(Boolean)
      : [];
    return articles.length ? articles : guideArticles;
  } catch (error) {
    return guideArticles;
  }
}

function renderArticleCard(article) {
  const image = article.image || articleCategoryImages[article.category] || "assets/hero-sydney-night.png";
  return `
    <article class="article-card article-row-card">
      <a class="article-card-image" href="article-detail.html?slug=${encodeURIComponent(article.slug)}" aria-label="${escapeHtml(article.title)}">
        <img src="${escapeHtml(image)}" alt="" loading="lazy" />
      </a>
      <div class="article-card-body">
        <div class="article-card-meta">
          <span>${escapeHtml(article.category)}</span>
          <time datetime="${escapeHtml(article.publishDate)}">${escapeHtml(formatGuideDate(article.publishDate))}</time>
        </div>
        <h3><a href="article-detail.html?slug=${encodeURIComponent(article.slug)}">${escapeHtml(article.title)}</a></h3>
        <p>${escapeHtml(article.excerpt || article.description)}</p>
        <a class="article-card-link" href="article-detail.html?slug=${encodeURIComponent(article.slug)}">阅读全文 <i data-lucide="arrow-right"></i></a>
      </div>
    </article>
  `;
}

function renderArticleSections(articles, activeCategory) {
  const categories =
    activeCategory === "全部"
      ? guideCategories
      : [activeCategory];

  return categories
    .map((category) => {
      const categoryArticles = articles.filter((article) => article.category === category);
      if (!categoryArticles.length) return "";
      return `
        <section class="article-column-section">
          <div class="article-column-head">
            <span>${escapeHtml(category)}</span>
            <small>${categoryArticles.length} 篇</small>
          </div>
          <div class="article-row-list">
            ${categoryArticles.map(renderArticleCard).join("")}
          </div>
        </section>
      `;
    })
    .join("");
}

async function initArticlesPage() {
  const list = $("#articleList");
  const filters = $("#articleCategoryFilters");
  const pagination = $("#articlePagination");
  if (!list) return;

  const articles = await getGuideArticles();
  let activeCategory = "全部";
  let currentArticlePage = 1;

  const renderPagination = (visibleArticles, totalPages) => {
    if (!pagination) return;
    if (totalPages <= 1) {
      pagination.hidden = true;
      pagination.innerHTML = "";
      return;
    }

    const rangeStart = (currentArticlePage - 1) * ARTICLES_PER_PAGE + 1;
    const rangeEnd = Math.min(currentArticlePage * ARTICLES_PER_PAGE, visibleArticles.length);
    pagination.hidden = false;
    pagination.innerHTML = `
      <button type="button" data-article-page="prev" ${currentArticlePage <= 1 ? "disabled" : ""}>
        <i data-lucide="chevron-left"></i>上一页
      </button>
      <span>第 ${currentArticlePage} 页 / 共 ${totalPages} 页 · 显示 ${rangeStart}-${rangeEnd} 篇，共 ${visibleArticles.length} 篇</span>
      <button type="button" data-article-page="next" ${currentArticlePage >= totalPages ? "disabled" : ""}>
        下一页<i data-lucide="chevron-right"></i>
      </button>
    `;
  };

  const render = () => {
    const visibleArticles =
      activeCategory === "全部"
        ? articles
        : articles.filter((article) => article.category === activeCategory);
    const totalPages = Math.max(1, Math.ceil(visibleArticles.length / ARTICLES_PER_PAGE));
    currentArticlePage = Math.min(currentArticlePage, totalPages);
    const start = (currentArticlePage - 1) * ARTICLES_PER_PAGE;
    const pageArticles = visibleArticles.slice(start, start + ARTICLES_PER_PAGE);
    list.innerHTML = renderArticleSections(pageArticles, activeCategory);
    renderPagination(visibleArticles, totalPages);
    if (window.lucide) window.lucide.createIcons();
  };

  if (filters) {
    filters.innerHTML = ["全部", ...guideCategories]
      .map(
        (category) =>
          `<button type="button" class="${category === activeCategory ? "is-active" : ""}" data-article-category="${escapeHtml(category)}">${escapeHtml(category)}</button>`
      )
      .join("");

    filters.addEventListener("click", (event) => {
      const button = event.target.closest("[data-article-category]");
      if (!button) return;
      activeCategory = button.dataset.articleCategory;
      currentArticlePage = 1;
      filters.querySelectorAll("button").forEach((item) => {
        item.classList.toggle("is-active", item === button);
      });
      render();
    });
  }

  if (pagination) {
    pagination.addEventListener("click", (event) => {
      const button = event.target.closest("[data-article-page]");
      if (!button || button.disabled) return;
      currentArticlePage += button.dataset.articlePage === "next" ? 1 : -1;
      render();
      list.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  render();
}

function renderArticleFaq(faq = []) {
  if (!faq.length) return "";
  return `
    <section class="article-faq">
      <h2>FAQ</h2>
      ${faq
        .map(
          (item) => `
            <details>
              <summary>${escapeHtml(item.question)}</summary>
              <p>${escapeHtml(item.answer)}</p>
            </details>
          `
        )
        .join("")}
    </section>
  `;
}

async function initArticleDetailPage() {
  const root = $("#articleDetail");
  if (!root) return;

  const params = new URLSearchParams(window.location.search);
  const slug = params.get("slug") || guideArticles[0].slug;
  const articles = await getGuideArticles();
  const article = articles.find((item) => item.slug === slug) || guideArticles[0];
  setPageMeta(article);

  root.innerHTML = `
    <header class="article-detail-head">
      <a class="article-back" href="articles.html"><i data-lucide="arrow-left"></i> 返回指南列表</a>
      <span class="article-category">${escapeHtml(article.category)}</span>
      <h1>${escapeHtml(article.title)}</h1>
      <p>${escapeHtml(article.description)}</p>
      <time datetime="${escapeHtml(article.publishDate)}">发布时间：${escapeHtml(formatGuideDate(article.publishDate))}</time>
    </header>
    <div class="article-content">${article.content}</div>
    ${renderArticleFaq(article.faq)}
    <nav class="article-inner-links" aria-label="相关文章内链">
      <a href="jobs.html"><i data-lucide="database"></i> 岗位数据库</a>
      <a href="occupations.html"><i data-lucide="book-open-check"></i> 职业库</a>
      <a href="csol.html"><i data-lucide="list-checks"></i> CSOL职业名单</a>
      <a href="index.html#contact"><i data-lucide="message-circle"></i> 联系我们</a>
    </nav>
  `;

  if (window.lucide) window.lucide.createIcons();
}

function initGuidePages() {
  initArticlesPage();
  initArticleDetailPage();
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
initGuidePages();
bindEvents();
applyLanguage(currentLanguage);
if (window.lucide) window.lucide.createIcons();
applyWordPressHomeContent();
