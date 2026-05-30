export const site = {
  copy: {
    en: {
      pageTitle: "Gao Xin · Academic Homepage",
      metaDescription:
        "Personal academic homepage for Chinese historical text NLP, intelligent computing for cultural heritage, XunziALLM-related team work, and research infrastructure support.",
      brandLabel: "Homepage",
      navAbout: "About",
      navWork: "Work",
      navPublications: "Publications",
      navEducation: "Education",
      navBlog: "Blog",
      academicEyebrow: "Academic Homepage",
      heroTitle:
        "Chinese historical text NLP, cultural heritage computing, and research infrastructure.",
      workEyebrow: "Work",
      workTitle: "Research and operations",
      researchHeading: "Research",
      infrastructureHeading: "Infrastructure",
      publicationsEyebrow: "Publications & Outputs",
      publicationsTitle: "Selected academic work",
      blogEyebrow: "Blog & Notes",
      blogTitle: "Field notes, photos, and occasional writing",
      cvEyebrow: "Education & CV",
      cvTitle: "Education and skills",
      educationHeading: "Education",
      skillsHeading: "Skills",
      contactPdfs: "PDFs",
      pdfButton: "PDF",
      footerLinksLabel: "Links",
      languageToggleLabel: "Switch to Chinese",
      footerPrefix: "Built with Astro.",
    },
    zh: {
      pageTitle: "高鑫 · 个人学术主页",
      metaDescription:
        "高鑫的个人学术主页，关注中文历史文本 NLP、文化遗产智能计算、荀子大模型相关团队工作与科研基础设施支持。",
      brandLabel: "主页",
      navAbout: "简介",
      navWork: "工作",
      navPublications: "成果",
      navEducation: "教育",
      navBlog: "博客",
      academicEyebrow: "个人主页",
      heroTitle: "中文历史文本 NLP、文化遗产智能计算与科研基础设施。",
      workEyebrow: "工作",
      workTitle: "研究与运维",
      researchHeading: "研究方向",
      infrastructureHeading: "基础设施",
      publicationsEyebrow: "论文与成果",
      publicationsTitle: "代表性学术工作",
      blogEyebrow: "博客与随记",
      blogTitle: "会议现场、摄影和一些日常记录",
      cvEyebrow: "教育与简历",
      cvTitle: "教育背景与技能",
      educationHeading: "教育背景",
      skillsHeading: "技能",
      contactPdfs: "论文",
      pdfButton: "PDF",
      footerLinksLabel: "友情链接",
      languageToggleLabel: "Switch to English",
      footerPrefix: "Built with Astro.",
    },
  },
  profile: {
    nameZh: "高鑫",
    nameEn: "Gao Xin",
    title: {
      en: "M.S. Student in Information Resources Management",
      zh: "信息资源管理 硕士研究生",
    },
    focus: {
      en: "Focusing on event extraction and implicit emotion reasoning for cultural heritage.",
      zh: "聚焦文化遗产事件抽取与隐式情感推理。",
    },
    photo: "/images/profile/profile-photo.jpg",
    affiliation: {
      en: "College of Information Management, Nanjing Agricultural University",
      zh: "南京农业大学信息管理学院",
    },
    affiliationUrl: "https://info.njau.edu.cn/",
    location: {
      en: "Nanjing, Jiangsu, China",
      zh: "江苏 · 南京",
    },
    email: "gao_shirai@qq.com",
    github: "https://github.com/ShiraiMikiko",
    orcid: "https://orcid.org/0009-0001-0658-310X",
    bio: {
      en: "I am a Master's student in Information Resources Management at the College of Information Management, Nanjing Agricultural University, working on Natural Language Processing / Intelligent Computing for Cultural Heritage. My research focuses on Chinese historical texts and cultural heritage narratives, especially event extraction, implicit emotion reasoning, long-chain reasoning, multi-agent collaboration, and LLM reinforcement learning. I also support our group's GPU clusters, storage systems, website deployment, security compliance, and model training workflows, and participate in digital humanities resources and ancient-text LLM systems such as XunziALLM.",
      zh: "我是南京农业大学信息资源管理专业硕士研究生，现就读于南京农业大学信息管理学院，研究方向为自然语言处理与文化遗产智能计算。我的研究聚焦中文历史文本与文化遗产叙事，关注事件抽取、事件隐式情感推理、长思维链推理、多智能体协作以及大语言模型强化学习等方法。同时，我也参与课题组科研基础设施与平台建设，支持 GPU 算力集群、存储系统、网站部署、安全合规与模型训练流程，并参与包括荀子大模型在内的数字人文工具与资源建设。",
    },
    links: [
      {
        href: "https://www.njau.edu.cn/",
        label: {
          en: "Nanjing Agricultural University",
          zh: "南京农业大学",
        },
      },
      {
        href: "https://xunziallm.njau.edu.cn/",
        label: {
          en: "XunziALLM",
          zh: "荀子大模型",
        },
      },
    ],
    keywords: {
      en: [
        "Chinese Historical Text NLP",
        "Cultural Heritage",
        "Event Extraction",
        "LLM Reinforcement Learning",
        "Research Infrastructure",
      ],
      zh: ["中文历史文本 NLP", "文化遗产", "事件抽取", "大模型强化学习", "科研基础设施"],
    },
  },
  work: {
    research: [
      {
        title: {
          en: "Cultural Heritage Event Extraction",
          zh: "文化遗产事件抽取",
        },
        detail: {
          en: "Event mention, type, argument, trigger, and sentiment extraction from relic narrative texts.",
          zh: "面向文物叙事文本，抽取事件提及、类型、论元、触发词与情感信息。",
        },
      },
      {
        title: {
          en: "Historical Emotion Analysis",
          zh: "历史情感分析",
        },
        detail: {
          en: "Implicit sentiment reasoning for historical events with temporal knowledge and multi-agent debate.",
          zh: "结合时间知识和多智能体辩论，对历史事件中的隐式情感进行推理。",
        },
      },
      {
        title: {
          en: "Poetry & Narrative Semantics",
          zh: "古诗与叙事语义",
        },
        detail: {
          en: "Semantic organization of classical poetry creation motives and historical-cultural knowledge.",
          zh: "围绕古诗创作动因和历史文化知识进行叙事化语义组织。",
        },
      },
    ],
    infrastructure: [
      {
        title: {
          en: "Storage Server Operations",
          zh: "存储服务器运维",
        },
        detail: {
          en: "Maintain group storage, research data organization, backup habits, and shared experiment assets.",
          zh: "维护组内存储空间、科研数据组织、备份习惯和共享实验资产。",
        },
      },
      {
        title: {
          en: "GPU Environment Support",
          zh: "GPU 环境支持",
        },
        detail: {
          en: "Help manage training environments, CUDA/PyTorch stacks, model paths, and experiment reproducibility.",
          zh: "协助管理训练环境、CUDA/PyTorch 栈、模型路径与实验可复现性。",
        },
      },
      {
        title: {
          en: "Research Workflow Engineering",
          zh: "科研流程工程化",
        },
        detail: {
          en: "Build data labeling scripts, resumeable pipelines, evaluation notebooks, and deployment-ready artifacts.",
          zh: "建设数据标注脚本、断点续跑流程、评估 Notebook 和可部署成果文件。",
        },
      },
    ],
  },
  publications: [
    {
      title: "大语言模型强化学习驱动的文化遗迹叙事文本语义组织方法研究",
      venue: "图书情报工作，录用",
      status: {
        en: "Journal · Accepted",
        zh: "期刊 · 已录用",
      },
      summary: {
        en: "A reinforcement-learning-driven semantic organization method for cultural relic narrative texts.",
        zh: "面向文化遗迹叙事文本，探索由大语言模型强化学习驱动的语义组织方法。",
      },
      image: "/images/publications/relic-narrative-organization.png",
      pdf: "/files/relic-narrative-organization.pdf",
    },
    {
      title: "文史交融的智能力：古诗创作动因的叙事化语义组织方法研究",
      venue: "图书馆杂志，录用",
      status: {
        en: "Journal · Accepted",
        zh: "期刊 · 已录用",
      },
      summary: {
        en: "Narrative semantic organization for the creative motivations behind classical Chinese poetry.",
        zh: "面向古诗创作动因，构建文史交融的叙事化语义组织方法。",
      },
      image: "/images/publications/poetry-motivation-organization.png",
      pdf: "/files/poetry-motivation-organization.pdf",
    },
    {
      title: "基于元认知反思智能体的文化遗产事件联合抽取自改进推理方法研究",
      venue: "情报学年会 2026，录用",
      status: {
        en: "Conference · Accepted",
        zh: "会议 · 已录用",
      },
      summary: {
        en: "A metacognitive reflection agent for self-improving joint cultural heritage event extraction.",
        zh: "通过元认知反思智能体，提升文化遗产事件联合抽取的自改进推理能力。",
      },
      image: "/images/publications/metaee-agent-reflection.png",
      pdf: "/files/metaee-agent-reflection.pdf",
    },
    {
      title: "基于推理模型的文化遗迹事件隐式情感分析方法",
      venue: "CDH 2025，录用",
      status: {
        en: "Conference Poster · Accepted",
        zh: "会议海报 · 已录用",
      },
      summary: {
        en: "Implicit emotion analysis for cultural relic events using reasoning-oriented language models.",
        zh: "利用推理型语言模型分析文化遗迹事件中的隐式情感。",
      },
      image: "/images/publications/cdh2025-implicit-emotion.png",
      pdf: "/files/cdh2025-implicit-emotion-poster.pdf",
    },
    {
      title: "基于大模型强化学习的文化遗迹史料事件抽取方法研究",
      venue: "DHEAC 2025，录用",
      status: {
        en: "Conference · Accepted",
        zh: "会议 · 已录用",
      },
      summary: {
        en: "A reinforcement-learning approach for extracting cultural heritage events from historical materials.",
        zh: "面向文化遗迹史料，探索基于大语言模型强化学习的事件抽取方法。",
      },
      image: "/images/publications/dheac2025-relic-event-extraction.png",
      pdf: "/files/dheac2025-relic-event-extraction.pdf",
    },
  ],
  blog: [
    {
      title: {
        en: "DHEAC 2025 Presentation Notes",
        zh: "DHEAC 2025 汇报随记",
      },
      category: {
        en: "Talk · Conference",
        zh: "会议汇报",
      },
      summary: {
        en: "A place to keep notes from the DHEAC presentation, including research context, slide polish, and questions from the room.",
        zh: "记录 DHEAC 汇报现场、研究背景、幻灯片打磨以及交流中被问到的问题。",
      },
      image: "/images/blog/dheac2025-presentation.jpg",
    },
    {
      title: {
        en: "Photography & Daily Notes",
        zh: "摄影与日常随记",
      },
      category: {
        en: "Photo Notes",
        zh: "摄影随记",
      },
      summary: {
        en: "A flexible notebook for conference snapshots, daily photography, reading fragments, and small thoughts outside formal papers.",
        zh: "预留给会议照片、平时摄影、阅读碎片和论文之外的小想法。",
      },
      image: "/images/blog/photography-notes.jpg",
    },
  ],
  cv: {
    education: [
      {
        institution: { en: "Nanjing Agricultural University", zh: "南京农业大学" },
        school: { en: "College of Information Management", zh: "信息管理学院" },
        degree: {
          en: "M.S. in Information Resources Management",
          zh: "硕士 · 信息资源管理",
        },
        period: "2024.09 – 2027.06 (expected)",
        href: "https://info.njau.edu.cn/",
      },
      {
        institution: { en: "China Pharmaceutical University", zh: "中国药科大学" },
        school: { en: "School of Science", zh: "理学院" },
        degree: {
          en: "B.S. in Information Management and Information Systems",
          zh: "本科 · 信息管理与信息系统",
        },
        period: "2020.09 – 2024.06",
        href: "https://lxy.cpu.edu.cn/",
      },
    ],
    skills: [
      {
        en: "Python data pipelines",
        zh: "Python 数据处理流程",
      },
      {
        en: "LLM labeling and evaluation",
        zh: "大语言模型标注与评估",
      },
      {
        en: "LLaMA-Factory / ms-swift / TRL workflows",
        zh: "LLaMA-Factory / ms-swift / TRL 训练流程",
      },
      {
        en: "Linux storage and GPU environment operations",
        zh: "Linux 存储与 GPU 环境运维",
      },
    ],
  },
};

export const navItems = [
  { href: "#about", key: "navAbout" },
  { href: "#work", key: "navWork" },
  { href: "#publications", key: "navPublications" },
  { href: "#education", key: "navEducation" },
  { href: "#blog", key: "navBlog" },
];
