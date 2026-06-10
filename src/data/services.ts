export interface Challenge {
  title: string;
  desc: string;
  icon: string;
}

export interface BentoItem {
  title: string;
  desc: string;
  cols: number;
  bgClass: string;
  textClass: string;
  imageUrl?: string;
  imageAlt?: string;
  icon?: string;
}

export interface Competency {
  title: string;
  desc: string;
  icon: string;
}

export interface ProcessStep {
  step: string | number;
  title: string;
  desc: string;
}

export interface FAQItem {
  q: string;
  a: string;
}

export interface Metric {
  value: string;
  label: string;
}

export interface ServiceData {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  category: "dev-design" | "enterprise" | "ai-data" | "infra" | "marketing" | "consulting";
  heroImage: string;
  heroImageAlt: string;
  metrics: Metric[];
  challengesTitle: string;
  challengesDesc: string;
  challenges: Challenge[];
  approachTitle: string;
  bentoItems: BentoItem[];
  competenciesTitle: string;
  competencies: Competency[];
  techStackTitle: string;
  techStack: string[];
  processTitle: string;
  processSteps: ProcessStep[];
  faqTitle: string;
  faqs: FAQItem[];
  crossSell?: {
    title: string;
    desc: string;
    btnText: string;
    link: string;
  };
}

export const servicesData: Record<string, ServiceData> = {
  "web-development": {
    slug: "web-development",
    title: "Custom Web Development",
    tagline: "Enterprise Solutions",
    description: "Engineering resilient, scalable, and ultra-fast web ecosystems that transform digital presence into competitive dominance.",
    category: "dev-design",
    heroImage: "/images/cloud_architecture.png",
    heroImageAlt: "A developer working on high-performance web architecture across multiple monitors in a high-tech studio.",
    metrics: [
      { value: "High", label: "Latency Reduction" },
      { value: "Near-Perfect", label: "Uptime Guarantee" }
    ],
    challengesTitle: "The Burden of Modern UX",
    challengesDesc: "Beyond aesthetics, high-performance web development solves for latency, accessibility, and conversion friction.",
    challenges: [
      { title: "Latency Attrition", desc: "Every minimal latency of delay impacts conversion by 7%. We eliminate bottlenecks through edge delivery and hydration optimization.", icon: "speed" },
      { title: "Device Diversity", desc: "Ensuring consistent logic across thousands of+ device profiles requires a fluid, component-driven architectural mindset.", icon: "mobile_friendly" },
      { title: "Security Integrity", desc: "Protecting user data isn't a feature; it's a foundation. Our builds integrate rigorous security compliance and zero-trust protocols.", icon: "security" }
    ],
    approachTitle: "The ICAD Full-stack Approach",
    bentoItems: [
      { title: "Adaptive Infrastructure", desc: "Cloud-native development utilizing serverless functions and globally distributed databases for instant response times worldwide.", cols: 7, bgClass: "bg-primary-container text-on-primary-container", textClass: "text-primary-fixed-dim", imageUrl: "/images/cloud_architecture.png", imageAlt: "Code editor displaying React logic" },
      { title: "Architectural Clarity", desc: "We prioritize modularity, ensuring your tech stack evolves as fast as your business requirements.", cols: 5, bgClass: "bg-surface-container-highest text-primary", textClass: "text-on-surface-variant", icon: "architecture" },
      { title: "Data-Driven UX", desc: "Every design decision is backed by behavioral analytics and A/B testing protocols.", cols: 4, bgClass: "bg-secondary-container text-on-secondary-container", textClass: "text-on-secondary-container/80", icon: "query_stats" },
      { title: "Continuous Integration", desc: "Automated testing and deployment pipelines that guarantee zero-downtime releases and impeccable code quality.", cols: 8, bgClass: "bg-surface-variant text-primary", textClass: "text-on-surface-variant", imageUrl: "/images/growth_metrics.png", imageAlt: "Growth analytics visual" }
    ],
    competenciesTitle: "Core Competencies",
    competencies: [
      { title: "Progressive Web Apps", desc: "App-like experiences delivered through the browser with offline capabilities and push notifications.", icon: "install_mobile" },
      { title: "Headless CMS", desc: "Decoupled content management for multi-channel distribution using Contentful, Strapi, or Sanity.", icon: "database" },
      { title: "React / Next.js Mastery", desc: "Complex single-page applications built with state-of-the-art frontend frameworks and robust state management.", icon: "dynamic_form" },
      { title: "Performance Tuning", desc: "Optimizing Core Web Vitals to achieve perfect Lighthouse scores and superior search rankings.", icon: "bolt" }
    ],
    techStackTitle: "Our Engineering DNA",
    techStack: ["Next.js", "Tailwind CSS", "Node.js", "TypeScript", "GraphQL", "AWS"],
    processTitle: "Transparent Agile Methodology",
    processSteps: [
      { step: "A", title: "Discovery & Blueprinting", desc: "Defining technical requirements, user personas, and a comprehensive project roadmap." },
      { step: "B", title: "Iterative Sprints", desc: "Bi-weekly development cycles with transparent reporting and continuous feedback loops." },
      { step: "C", title: "Rigorous QA & Testing", desc: "Multi-device, browser-compatibility, and penetration testing to ensure a flawless launch." },
      { step: "D", title: "Launch & Optimization", desc: "Post-launch monitoring, performance tuning, and scaling support as your traffic grows." }
    ],
    faqTitle: "Technical Specifications FAQ",
    faqs: [
      { q: "How do you ensure web performance scores?", a: "We utilize Next.js for hybrid static & server rendering, image optimization, and code splitting. Every build passes a rigorous Lighthouse audit before production." },
      { q: "Do you support legacy system integration?", a: "Yes, we specialize in building middleware layers and APIs to bridge modern frontends with existing legacy ERP or CRM systems." },
      { q: "What is your approach to mobile-first design?", a: "We design for the most constrained environments first, ensuring core functionality is perfect on mobile before layering advanced desktop features." },
      { q: "How do you handle project security?", a: "Security is integrated into the CI/CD pipeline. We conduct regular dependency audits, utilize HTTPS, and implement CSRF/XSS protection by default." }
    ],
    crossSell: {
      title: "Engineering is nothing without Experience.",
      desc: "Unlock the full potential of your high-performance architecture with our world-class UI/UX Design services.",
      btnText: "Explore UI/UX Design",
      link: "/services/ui-ux-design"
    }
  },
  "mobile-app-development": {
    slug: "mobile-app-development",
    title: "Mobile Application Development",
    tagline: "Native & Cross-Platform",
    description: "Crafting fluid, secure, and feature-rich iOS and Android applications that keep users engaged and scale effortlessly.",
    category: "dev-design",
    heroImage: "/images/mobile_development.png",
    heroImageAlt: "A designer evaluating high-fidelity mobile application flows on an iPhone mockup.",
    metrics: [
      { value: "High", label: "Average App Rating" },
      { value: "Significant", label: "Engagement Increase" }
    ],
    challengesTitle: "The Mobile Friction Problem",
    challengesDesc: "In mobile, milliseconds determine retention. We architect apps to optimize startup times and memory usage.",
    challenges: [
      { title: "App Store Optimization", desc: "Building according to Apple Human Interface Guidelines and Google Material Design to clear reviews fast.", icon: "install_mobile" },
      { title: "Offline Capabilities", desc: "Implementing resilient local caching so that your users can complete tasks without continuous internet connectivity.", icon: "database" },
      { title: "Battery & Performance", desc: "Minimizing thread blocks and render cycle overhead to guarantee fluid fluid scrolling.", icon: "bolt" }
    ],
    approachTitle: "Our Mobile Engineering Approach",
    bentoItems: [
      { title: "Native Excellence", desc: "Writing Swift and Kotlin for high-compute tasks that demand direct hardware access and peak performance.", cols: 6, bgClass: "bg-primary text-on-primary", textClass: "text-primary-fixed-dim", imageUrl: "/images/mobile_development.png", imageAlt: "Sleek iOS and Android native app interface on dark background" },
      { title: "Hybrid Efficiency", desc: "Deploying React Native and Flutter codebases that reduce time-to-market by up to 50% while retaining native feel.", cols: 6, bgClass: "bg-surface-container-highest text-primary", textClass: "text-on-surface-variant", imageUrl: "/images/software_engineering.png", imageAlt: "Mobile app codebase editor screen" }
    ],
    competenciesTitle: "Core Competencies",
    competencies: [
      { title: "Native Swift / Kotlin", desc: "Platform-specific software designed for deepest integration and zero abstraction performance.", icon: "terminal" },
      { title: "React Native / Flutter", desc: "Cross-platform capability offering shared business logic and consistent UI across platforms.", icon: "dynamic_form" },
      { title: "Security Protocols", desc: "Defense-grade biometrics integration, keychain encryption, and secure network handshakes.", icon: "security" },
      { title: "Analytics & Tracking", desc: "Rich instrumentation using Firebase, Mixpanel, and crash report collectors.", icon: "query_stats" }
    ],
    techStackTitle: "Mobile DNA",
    techStack: ["Swift", "Kotlin", "React Native", "Flutter", "Firebase", "SQLite"],
    processTitle: "Mobile Lifecycle Development",
    processSteps: [
      { step: "A", title: "Interactive Mockups", desc: "Mapping out exact screen transitions and micro-interactions before coding." },
      { step: "B", title: "Sprint Releases", desc: "Bi-weekly test flights pushed directly to TestFlight and Google Play Console beta." },
      { step: "C", title: "Hardened Testing", desc: "Validating against thousands of device configurations using virtual test grids." },
      { step: "D", title: "App Store Launch", desc: "Handling listing assets, metadata localization, and initial user feedback loops." }
    ],
    faqTitle: "Mobile App FAQ",
    faqs: [
      { q: "Should we build Native or Cross-Platform?", a: "If your app requires intensive hardware access (complex camera, background processing, raw GPU compute), native is recommended. For typical data-driven business apps, cross-platform with React Native is highly efficient." },
      { q: "How do you handle security?", a: "We encrypt all local storage data, integrate biometric authentication natively, pin SSL certificates, and screen-lock the app during backgrounding." }
    ],
    crossSell: {
      title: "Need beautiful designs first?",
      desc: "Our UI/UX design team crafts world-class, premium mobile templates before developer handoff.",
      btnText: "Explore UI/UX Design",
      link: "/services/ui-ux-design"
    }
  },
  "ui-ux-design": {
    slug: "ui-ux-design",
    title: "UI/UX Design & Strategy",
    tagline: "Experience Architecture",
    description: "Designing conversion-driven, aesthetically stunning interfaces that bridge user intent and business targets.",
    category: "dev-design",
    heroImage: "/images/ui_ux_design.png",
    heroImageAlt: "Creative dashboard UI showing component systems and visual tokens.",
    metrics: [
      { value: "Significant", label: "Conversion Lift" },
      { value: "Absolute", label: "Design Consistency" }
    ],
    challengesTitle: "Designing for Clarity",
    challengesDesc: "Cluttered interfaces cause cognitive fatigue. We build minimalist systems focused on user goals.",
    challenges: [
      { title: "Systemic Inconsistency", desc: "As features scale, UI breaks. We prevent design debt through centralized token governance.", icon: "architecture" },
      { title: "Friction Bottlenecks", desc: "Identifying and resolving user dropoffs through click maps, sessions recordings, and user testing.", icon: "query_stats" }
    ],
    approachTitle: "Design System Architecture",
    bentoItems: [
      { title: "Atomic Design System", desc: "Crafting structured Figma components with strict properties mapping to Tailwind variables.", cols: 12, bgClass: "bg-primary text-on-primary", textClass: "text-primary-fixed-dim", imageUrl: "/images/ui_ux_design.png", imageAlt: "Figma UI design tokens and layout wireframes" }
    ],
    competenciesTitle: "Core Competencies",
    competencies: [
      { title: "Design System Design", desc: "Robust Figma structures with advanced auto-layout and responsive constraints.", icon: "palette" },
      { title: "User Research & Audits", desc: "Competitor analyses, persona mapping, and usability testing with target demographics.", icon: "groups" },
      { title: "Interactive Prototyping", desc: "High-fidelity micro-interactions and animations showing exact user flow animations.", icon: "draw" }
    ],
    techStackTitle: "Our Creative Toolkit",
    techStack: ["Figma", "Adobe CC", "Framer", "Lottie", "Tailwind", "Storybook"],
    processTitle: "Human-Centered Design Loop",
    processSteps: [
      { step: "A", title: "Empathy & Research", desc: "Conducting user interviews and mapping out behavioral journeys." },
      { step: "B", title: "Wireframing & IA", desc: "Constructing logical layout routes and screen priorities." },
      { step: "C", title: "High-Fidelity Rendering", desc: "Applying visual design systems, custom icons, and dark/light palettes." },
      { step: "D", title: "Developer Handoff", desc: "Exporting clean layout specifications, code variables, and assets." }
    ],
    faqTitle: "Design FAQ",
    faqs: [
      { q: "Do you supply Figma files?", a: "Yes, our clients receive full ownership of clean, tokenized Figma files with structured components and variants." }
    ],
    crossSell: {
      title: "Ready to code your design?",
      desc: "Our frontend engineering team converts Figma systems to Next.js layouts with pixel perfection.",
      btnText: "Explore Web Development",
      link: "/services/web-development"
    }
  },
  "erp-solutions": {
    slug: "erp-solutions",
    title: "Bespoke ERP Solutions",
    tagline: "Enterprise Systems",
    description: "Streamline your global operations with customized ERP systems that integrate finance, logistics, and HR into a single source of truth.",
    category: "enterprise",
    heroImage: "/images/enterprise_erp.png",
    heroImageAlt: "High-resolution corporate dashboard showing financial charts and logistics metrics.",
    metrics: [
      { value: "Significant", label: "Efficiency Lift" },
      { value: "Absolute", label: "Real-time Visibility" }
    ],
    challengesTitle: "Siloed Corporate Operations",
    challengesDesc: "Monolithic systems that don't speak to each other cause data latency and operational blindspots.",
    challenges: [
      { title: "Legacy Incompatibility", desc: "Bridging outdated databases with modern cloud pipelines without risking system down-time.", icon: "account_tree" },
      { title: "Complex Workflows", desc: "Mapping intricate, multi-department approvals into clean, automated UI pathways.", icon: "business_center" }
    ],
    approachTitle: "Bespoke ERP Engineering",
    bentoItems: [
      { title: "Unified Database core", desc: "Constructing a centralized relational database layer holding all operations, HR, inventory, and ledger history.", cols: 8, bgClass: "bg-primary text-on-primary", textClass: "text-primary-fixed-dim", imageUrl: "/images/enterprise_erp.png", imageAlt: "Centralized relational database layers and ERP operations core" },
      { title: "Modular Architecture", desc: "Enable features dynamically: plug in inventory, shipping tracking, or timesheets as needed.", cols: 4, bgClass: "bg-surface-container-high text-primary", textClass: "text-on-surface-variant", imageUrl: "/images/software_engineering.png", imageAlt: "ERP modular component architecture screen" }
    ],
    competenciesTitle: "Enterprise Scope",
    competencies: [
      { title: "Global Supply Chain Module", desc: "Live shipment tracking, automated warehouse restocking alerts, and supplier portals.", icon: "precision_manufacturing" },
      { title: "Financial Ledger Systems", desc: "Multi-currency ledgers, tax integrations, and automated compliance reporting.", icon: "query_stats" }
    ],
    techStackTitle: "Enterprise Frameworks",
    techStack: ["Java/Spring Boot", "PostgreSQL", "React", "Docker", "Kubernetes", "SAP Integrations"],
    processTitle: "Corporate Integration Flow",
    processSteps: [
      { step: "A", title: "Operational Blueprint", desc: "Shadowing teams to outline standard operating procedures and system workflows." },
      { step: "B", title: "Data Normalization", desc: "Cleansing, migrating, and verifying legacy database assets." }
    ],
    faqTitle: "ERP Implementation FAQ",
    faqs: [
      { q: "How long does custom ERP development take?", a: "Enterprise systems typically require several months depending on the scope of integrations, departments, and custom legacy dependencies." }
    ]
  },
  "crm-solutions": {
    slug: "crm-solutions",
    title: "Custom CRM Customization",
    tagline: "Customer Lifecycle",
    description: "Maximize customer lifetime value with Salesforce and HubSpot integrations tailored to your sales team's specific DNA.",
    category: "enterprise",
    heroImage: "/images/crm_solutions.png",
    heroImageAlt: "Sales charts and customer interactions grid.",
    metrics: [
      { value: "+30%", label: "Lead Conversions" },
      { value: "Enhanced", label: "Pipeline Visibility" }
    ],
    challengesTitle: "Unorganized Lead Pipes",
    challengesDesc: "Manually copying records and unaligned sales pipelines leads to lost deals and slow response times.",
    challenges: [
      { title: "Integration Debt", desc: "Connecting CRMs to mail servers, call platforms, and marketing analytics.", icon: "integration_instructions" }
    ],
    approachTitle: "Pipeline Automation",
    bentoItems: [
      { title: "Sales Automation", desc: "Automate task assignments, follow-up emails, and contract generation.", cols: 12, bgClass: "bg-surface-container-high text-primary", textClass: "text-on-surface-variant", imageUrl: "/images/crm_solutions.png", imageAlt: "Sales pipeline automation charts and lead management grids" }
    ],
    competenciesTitle: "CRM Focus Areas",
    competencies: [
      { title: "Salesforce Customization", desc: "Apex coding, custom page overrides, and custom trigger developments.", icon: "terminal" },
      { title: "HubSpot Automation", desc: "Workflows setups, landing page systems, and database cleanups.", icon: "dynamic_form" }
    ],
    techStackTitle: "Supported CRMs",
    techStack: ["Salesforce", "HubSpot", "Microsoft Dynamics", "OAuth 2.0 API Integrations"],
    processTitle: "CRM Onboarding Process",
    processSteps: [
      { step: "A", title: "Funnel Assessment", desc: "Auditing lead acquisition sources and qualification pipelines." },
      { step: "B", title: "System Setup", desc: "Building triggers, mapping fields, and deploying custom templates." }
    ],
    faqTitle: "CRM Customization FAQ",
    faqs: [
      { q: "Can you sync CRM data with our billing platform?", a: "Yes, we build secure Webhooks and custom middleware to sync customer contract milestones directly with accounting software." }
    ]
  },
  "ai-ml": {
    slug: "ai-ml",
    title: "AI & Machine Learning Integration",
    tagline: "Cognitive Engineering",
    description: "Deploy custom generative AI models and predictive ML pipelines to automate complex workflows and surface hidden insights.",
    category: "ai-data",
    heroImage: "/images/ai_solutions.png",
    heroImageAlt: "Interconnected neural network nodes glowing in deep blue and white.",
    metrics: [
      { value: "Enhanced", label: "Workflow Automation" },
      { value: "High", label: "Model Accuracy" }
    ],
    challengesTitle: "The Burden of Scale",
    challengesDesc: "Sifting through terabytes of corporate content is slow and expensive. We build models that think.",
    challenges: [
      { title: "Compute Cost", desc: "Optimizing inference paths to keep cloud hosting costs under control.", icon: "bolt" },
      { title: "Explainability Gap", desc: "Auditing AI decisions to verify safety and regulatory compliance.", icon: "security" }
    ],
    approachTitle: "Autonomous Enterprise AI",
    bentoItems: [
      { title: "Retrieval Augmented Generation", desc: "Build private LLM instances holding all your corporate knowledge secure and fully searchable.", cols: 7, bgClass: "bg-primary text-on-primary", textClass: "text-primary-fixed-dim", imageUrl: "/images/ai_solutions.png", imageAlt: "AI vector embeddings and private LLM knowledge base system" },
      { title: "Predictive Analytics", desc: "Leverage ML models to forecast seasonal demands and operational bottlenecks.", cols: 5, bgClass: "bg-surface-container-high text-primary", textClass: "text-on-surface-variant", imageUrl: "/images/growth_metrics.png", imageAlt: "AI predictive analytics graphs and charts" }
    ],
    competenciesTitle: "Core Competencies",
    competencies: [
      { title: "Custom LLM Finetuning", desc: "Training models on domain-specific dictionaries and company knowledge bases.", icon: "psychology" },
      { title: "Computer Vision", desc: "Object recognition, document digitization, and product quality checks.", icon: "precision_manufacturing" }
    ],
    techStackTitle: "AI Tech Stack",
    techStack: ["Python", "PyTorch", "Hugging Face", "LangChain", "OpenAI API", "AWS SageMaker"],
    processTitle: "Model Training & Deployment",
    processSteps: [
      { step: "A", title: "Data Wrangling", desc: "Cleansing and labeling structured and unstructured corporate datasets." },
      { step: "B", title: "Model Prototyping", desc: "Testing baseline models to hit required accuracy thresholds." }
    ],
    faqTitle: "AI Integration FAQ",
    faqs: [
      { q: "Is our business data secure when using your AI systems?", a: "Absolutely. We run models in isolated private cloud virtual networks. Your data is never shared with public model trainers." }
    ]
  },
  "cloud-infrastructure": {
    slug: "cloud-infrastructure",
    title: "Cloud Infrastructure & Transformation",
    tagline: "Infrastructure Engineering",
    description: "Provisioning high-availability, multi-region cloud infrastructures configured for elastic auto-scaling and 99.99% uptime.",
    category: "infra",
    heroImage: "/images/cloud_architecture.png",
    heroImageAlt: "Abstract representation of cloud computing nodes on a light background.",
    metrics: [
      { value: "Near-Perfect", label: "Uptime SLA" },
      { value: "-35%", label: "Cloud Spend" }
    ],
    challengesTitle: "Infrastructure Bloat",
    challengesDesc: "Misconfigured cloud setups create resource waste and expose services to outage risks.",
    challenges: [
      { title: "Single Point Failure", desc: "Designing system redundancies across multiple AWS zones and regions.", icon: "cloud_done" }
    ],
    approachTitle: "Infrastructure as Code",
    bentoItems: [
      { title: "Terraform Automation", desc: "Define every server, database, and virtual network declaratively to guarantee repeatable deployments.", cols: 12, bgClass: "bg-surface-container-high text-primary", textClass: "text-on-surface-variant", imageUrl: "/images/cloud_architecture.png", imageAlt: "Infrastructure as Code network mapping and provisioning" }
    ],
    competenciesTitle: "Infrastructure Competencies",
    competencies: [
      { title: "Kubernetes Orchestration", desc: "Deploying production-grade container clusters running auto-scaled microservices.", icon: "architecture" },
      { title: "Cost Optimization Audits", desc: "Analyzing utilization metrics to cut monthly hosting charges without performance hits.", icon: "query_stats" }
    ],
    techStackTitle: "Cloud Ecosystem",
    techStack: ["AWS", "Azure", "Terraform", "Docker", "Kubernetes", "Prometheus"],
    processTitle: "Migration Methodology",
    processSteps: [
      { step: "A", title: "Cloud Audit", desc: "Mapping out current server configurations and resource allocations." },
      { step: "B", title: "IaC Mapping", desc: "Translating architecture into Terraform script libraries." }
    ],
    faqTitle: "Cloud Architecture FAQ",
    faqs: [
      { q: "Do you support hybrid cloud environments?", a: "Yes, we connect private local servers to public clouds (AWS/Azure) using secure VPN tunnels and transit gateways." }
    ]
  },
  "devops": {
    slug: "devops",
    title: "DevOps & CI/CD Services",
    tagline: "Deployment Automation",
    description: "Accelerate development cycles with robust continuous integration and automated deployment pipelines that minimize production failures.",
    category: "infra",
    heroImage: "/images/devops.png",
    heroImageAlt: "Developer monitoring CI/CD deployment pipelines on multiple monitors.",
    metrics: [
      { value: "Enhanced", label: "Deployment Velocity" },
      { value: "0.1%", label: "Release Rollbacks" }
    ],
    challengesTitle: "Bottlenecked Releases",
    challengesDesc: "Manual testing and configuration management slows release times and introduces human error.",
    challenges: [
      { title: "Pipeline Friction", desc: "Automating validation, testing, security checks, and code packaging into one step.", icon: "integration_instructions" }
    ],
    approachTitle: "Zero-Downtime Releases",
    bentoItems: [
      { title: "Blue-Green Deployments", desc: "Roll out code versions incrementally to eliminate client-facing service disruption.", cols: 12, bgClass: "bg-surface-container-high text-primary", textClass: "text-on-surface-variant", imageUrl: "/images/devops.png", imageAlt: "DevOps CI/CD zero-downtime deployment pipelines diagram" }
    ],
    competenciesTitle: "Core Competencies",
    competencies: [
      { title: "GitHub Actions / GitLab CI", desc: "Constructing fast workflow files that run unit tests on every pull request.", icon: "terminal" },
      { title: "Containerization", desc: "Packaging systems in Docker containers to guarantee environments stay identical from staging to production.", icon: "database" }
    ],
    techStackTitle: "DevOps DNA",
    techStack: ["GitHub Actions", "GitLab CI", "Docker", "Helm", "Kubernetes", "Jenkins"],
    processTitle: "Automation Roadmap",
    processSteps: [
      { step: "A", title: "Pipeline Audit", desc: "Identifying manual steps in current code deployment loops." },
      { step: "B", title: "Automation Setup", desc: "Configuring unit test runners and deployment scripts." }
    ],
    faqTitle: "DevOps FAQ",
    faqs: [
      { q: "How do you guarantee zero downtime during updates?", a: "We run rolling updates in Kubernetes, spinning up new containers and checking health before terminating the old ones." }
    ]
  },
  "cybersecurity": {
    slug: "cybersecurity",
    title: "Cybersecurity & Protection",
    tagline: "Zero Trust Architecture",
    description: "Protecting enterprise assets with advanced threat intelligence, defense-grade encryption, and proactive vulnerability patching.",
    category: "infra",
    heroImage: "/images/cybersecurity.png",
    heroImageAlt: "High performance processor pulsing with secure red light circuits.",
    metrics: [
      { value: "Absolute", label: "Threat Mitigation" },
      { value: "Compliant", label: "Aligned Framework" }
    ],
    challengesTitle: "The Cost of a Breach",
    challengesDesc: "As systems open up, attack surfaces expand. Security can't be added later; it must be built in.",
    challenges: [
      { title: "Vulnerability Windows", desc: "Leaving systems exposed due to unpatched software and outdated dependencies.", icon: "security" }
    ],
    approachTitle: "Zero-Trust Integration",
    bentoItems: [
      { title: "Identity Governance", desc: "Implementing strict IAM roles, Multi-Factor Authentication, and single sign-on access parameters.", cols: 12, bgClass: "bg-primary text-on-primary", textClass: "text-primary-fixed-dim", imageUrl: "/images/cybersecurity.png", imageAlt: "Zero trust security access parameters and IAM rules" }
    ],
    competenciesTitle: "Security Competencies",
    competencies: [
      { title: "Penetration Testing", desc: "Simulating attacks to locate and resolve potential entry points before exploits occur.", icon: "bolt" },
      { title: "Compliance Mapping", desc: "Preparing infrastructures to satisfy rigorous regulatory and compliance requirements.", icon: "admin_panel_settings" }
    ],
    techStackTitle: "Security Stack",
    techStack: ["Vault", "Okta", "WAF", "SIEM Tools", "AWS GuardDuty", "SonarQube"],
    processTitle: "SecOps Implementation",
    processSteps: [
      { step: "A", title: "Threat Audit", desc: "Evaluating current network topologies and database permissions." },
      { step: "B", title: "Hardening Cycle", desc: "Deploying firewalls, configuring IAM rules, and encrypting storage drives." }
    ],
    faqTitle: "Cybersecurity FAQ",
    faqs: [
      { q: "How often should we run penetration testing?", a: "We recommend full network and application penetration testing at least once a year, or after major architectural changes." }
    ]
  },
  "hosting": {
    slug: "hosting",
    title: "Managed Edge Infrastructure",
    tagline: "Hosting & Gateways",
    description: "Power your global operations with high-performance hosting and gateway services. Deliver dynamic content with millisecond precision at every edge of the network.",
    category: "infra",
    heroImage: "/images/hosting.png",
    heroImageAlt: "Sleek server racks stretching into a misty distance inside a high-tech data center.",
    metrics: [
      { value: "High", label: "Latency Reduction" },
      { value: "Near-Perfect", label: "SLA Uptime" }
    ],
    challengesTitle: "Why Milliseconds Matter",
    challengesDesc: "Traditional centralized hosting creates bottlenecks. As your user base grows globally, latency leads to abandonment and lost revenue.",
    challenges: [
      { title: "Latency Abandonment", desc: "40% of users abandon sites taking longer than 3 seconds to load. We solve this by caching at the edge.", icon: "warning" },
      { title: "SEO Degradation", desc: "High TTFB (Time to First Byte) directly impacts search engine ranking performance. Edge hosting speeds this up.", icon: "trending_down" }
    ],
    approachTitle: "Unified Gateway Ecosystem",
    bentoItems: [
      { title: "Global CDN", desc: "Edge-caching optimized for dynamic content and heavy media assets to load pages instantly.", cols: 4, bgClass: "bg-primary text-on-primary", textClass: "text-primary-fixed", imageUrl: "/images/hosting.png", imageAlt: "Managed edge server CDN cache nodes" },
      { title: "Intelligent Load Balancing", desc: "L7 traffic steering with automatic failover and health checks across hybrid cloud environments.", cols: 8, bgClass: "bg-surface-container-high text-primary", textClass: "text-on-surface-variant", imageUrl: "/images/cloud_architecture.png", imageAlt: "Traffic load balancing architecture diagram" },
      { title: "DNS Management", desc: "Anycast network with lightning-fast resolution and built-in DDoS protection.", cols: 6, bgClass: "bg-secondary text-on-secondary", textClass: "text-on-secondary", imageUrl: "/images/services_hero.png", imageAlt: "Global Anycast DNS resolution lines" },
      { title: "High Availability", desc: "Multi-region redundancy ensuring your services never experience a single point of failure.", cols: 6, bgClass: "bg-surface-container-low text-primary", textClass: "text-on-surface-variant", imageUrl: "/images/software_engineering.png", imageAlt: "High availability database synchronization nodes" }
    ],
    competenciesTitle: "Performance Features",
    competencies: [
      { title: "Anycast Routing", desc: "Pushes user requests to the closest physical data center node to decrease network latency.", icon: "public" },
      { title: "DDoS Mitigation", desc: "Scrubbing L3/L4 attacks at the edge before they hit your core servers.", icon: "security" },
      { title: "Edge scripting", desc: "Running custom JavaScript or WebAssembly directly inside edge nodes to filter headers.", icon: "terminal" },
      { title: "HTTP/3 Protocol", desc: "Leveraging QUIC and modern network protocols for faster connection times on unstable networks.", icon: "bolt" }
    ],
    techStackTitle: "Infrastructure Hardware",
    techStack: ["Anycast DNS", "BGP Steering", "Edge Workers", "HTTP/3", "Redis Cache", "WAF Rules"],
    processTitle: "Seamless Integration Flow",
    processSteps: [
      { step: "A", title: "Provisioning", desc: "Select your global zones and resource allocation via our CLI or Dashboard." },
      { step: "B", title: "DNS Propagation", desc: "Update your records. Our Anycast network handles the global handshake instantly." },
      { step: "C", title: "Optimization", desc: "Monitor traffic patterns and tune caching rules with real-time analytics." }
    ],
    faqTitle: "Frequently Asked Questions",
    faqs: [
      { q: "What is the guaranteed uptime?", a: "We provide a 99.99% uptime SLA across our global edge nodes, backed by financial credits if performance metrics fall below agreed thresholds." },
      { q: "How does the gateway handle DDoS attacks?", a: "Our gateway includes L3/L4/L7 DDoS protection that automatically scrubs malicious traffic at the edge before it reaches your origin servers." },
      { q: "Can I use my existing SSL certificates?", a: "Yes, you can upload custom certificates or use our automated managed certificate service powered by industry-standard CAs." },
      { q: "Where are your edge locations?", a: "We operate over 200+ edge locations across all major continents, with high-density presence in APAC, EMEA, and North America." }
    ]
  },
  "data-analytics": {
    slug: "data-analytics",
    title: "Data Analytics & Business Intelligence",
    tagline: "Data Engineering",
    description: "Transform raw data into a competitive asset. We construct secure data warehouses and real-time BI dashboards that drive decisions.",
    category: "ai-data",
    heroImage: "/images/growth_metrics.png",
    heroImageAlt: "Glowing interactive database visualization panels and charts.",
    metrics: [
      { value: "1M+", label: "Processed Rows/Day" },
      { value: "Real-time", label: "Latency Rates" }
    ],
    challengesTitle: "Siloed Corporate Data",
    challengesDesc: "Data stuck in separate isolated databases leads to disjointed tracking and slow response times.",
    challenges: [
      { title: "Data Ingestion Delays", desc: "Moving multi-source data streams into one structured database repository without lag.", icon: "storage" }
    ],
    approachTitle: "Unified Business Intelligence",
    bentoItems: [
      { title: "Data Lakehouse Setup", desc: "Constructing cloud data warehouses using Snowflake and BigQuery to power multi-department metrics.", cols: 12, bgClass: "bg-surface-container-high text-primary", textClass: "text-on-surface-variant", imageUrl: "/images/growth_metrics.png", imageAlt: "Data lakehouse warehouses and business intelligence statistics" }
    ],
    competenciesTitle: "Core Competencies",
    competencies: [
      { title: "Custom BI Dashboards", desc: "Structuring clear user-friendly boards in Looker, Tableau, or custom React code.", icon: "monitoring" },
      { title: "ETL / ELT Pipelines", desc: "Building pipelines using dbt and Airflow to clean, sort, and transform database tables.", icon: "account_tree" }
    ],
    techStackTitle: "Data Toolkit",
    techStack: ["Snowflake", "BigQuery", "dbt", "Apache Airflow", "Tableau", "Python"],
    processTitle: "Analytics Road",
    processSteps: [
      { step: "A", title: "Source Auditing", desc: "Locating all databases, logs, and files containing company metrics." },
      { step: "B", title: "ETL Deployments", desc: "Coding the scripts to automatically parse and load streams into warehouses." }
    ],
    faqTitle: "Data Analytics FAQ",
    faqs: [
      { q: "Do you support real-time data streaming?", a: "Yes, we integrate tools like Apache Kafka and AWS Kinesis to feed real-time user events straight into your dashboard boards." }
    ]
  },
  "seo": {
    slug: "seo",
    title: "Strategic Search Dominance (SEO)",
    tagline: "Organic Growth",
    description: "Dominate search rankings with technical site optimization, content strategies, and authority engineering that drive high-intent organic traffic.",
    category: "marketing",
    heroImage: "/images/seo.png",
    heroImageAlt: "Visualizing search metrics and rising chart paths.",
    metrics: [
      { value: "100%", label: "Average Traffic Boost" },
      { value: "No. 1", label: "Ranking Goals" }
    ],
    challengesTitle: "The Search Competition",
    challengesDesc: "Search engines penalize slow websites with poor content markup. Organic growth requires precision.",
    challenges: [
      { title: "Technical SEO Debt", desc: "Fixing search crawl blocks, poor structure outlines, and slow response times.", icon: "bolt" }
    ],
    approachTitle: "Scientific SEO Architecture",
    bentoItems: [
      { title: "Core Web Vitals", desc: "We optimize site speeds and structure schema elements to pass search engine ranking metrics with perfect scores.", cols: 12, bgClass: "bg-primary text-on-primary", textClass: "text-primary-fixed-dim", imageUrl: "/images/seo.png", imageAlt: "Technical search optimization audit dashboard and speed indexes" }
    ],
    competenciesTitle: "Organic Competencies",
    competencies: [
      { title: "Semantic Content Plans", desc: "Authoring high-authority resource articles targeting high-intent industry search phrases.", icon: "draw" },
      { title: "Technical Auditing", desc: "Eliminating duplicate pages, dead redirect loops, and optimizing XML sitemaps.", icon: "query_stats" }
    ],
    techStackTitle: "SEO Tooling",
    techStack: ["Google Search Console", "SEMrush", "Ahrefs", "Schema JSON-LD", "Next.js Metadata"],
    processTitle: "SEO Strategy Steps",
    processSteps: [
      { step: "A", title: "Keyword Blueprinting", desc: "Locating high-volume search phrases mapping to your products." },
      { step: "B", title: "On-Page Optimization", desc: "Tweaking sitemaps, semantic tags, titles, and loading speeds." }
    ],
    faqTitle: "SEO FAQ",
    faqs: [
      { q: "How long until we see organic growth results?", a: "Technical fixes can show impacts in weeks, while content authority campaigns typically take 3 to 6 months to secure stable page one positions." }
    ]
  },
  "google-ads": {
    slug: "google-ads",
    title: "Google Ads Management",
    tagline: "Paid Acquisition",
    description: "Maximize return on ad spend with programmatic campaign structures, intent-driven keyword targeting, and conversion rate optimization.",
    category: "marketing",
    heroImage: "/images/growth_metrics.png",
    heroImageAlt: "Financial metrics showing rising conversions and ROI figures.",
    metrics: [
      { value: "4.5x", label: "Average ROI Ratio" },
      { value: "-25%", label: "CPA Reduction" }
    ],
    challengesTitle: "Wasted Advertising Spend",
    challengesDesc: "Bidding on generic search queries and directing traffic to slow, irrelevant lander pages drains cash pools.",
    challenges: [
      { title: "Broad Match Bleed", desc: "Excluding irrelevant traffic and search queries using tight negative match configurations.", icon: "warning" }
    ],
    approachTitle: "ROAS Engineering",
    bentoItems: [
      { title: "Intent Funnel Targeting", desc: "Restructuring campaigns to split budgets between brand protection, competitor search, and product intent keywords.", cols: 12, bgClass: "bg-surface-container-high text-primary", textClass: "text-on-surface-variant", imageUrl: "/images/growth_metrics.png", imageAlt: "Google Ads conversion funnel tracking" }
    ],
    competenciesTitle: "Ad Competencies",
    competencies: [
      { title: "Search & Display Ads", desc: "Writing high-click text ads and deploying matching display banners.", icon: "palette" },
      { title: "Lander Optimization", desc: "Coding fast, responsive landing pages designed to secure high Quality Scores.", icon: "bolt" }
    ],
    techStackTitle: "Ad Systems",
    techStack: ["Google Ads Editor", "Google Tag Manager", "GA4", "Lander A/B Testers", "Scripts Console"],
    processTitle: "Ads Workflow",
    processSteps: [
      { step: "A", title: "Structure Blueprint", desc: "Setting up negative lists, budget parameters, and keyword matches." },
      { step: "B", title: "Launch & Test", desc: "Deploying ad groups and immediately starting A/B copy tests." }
    ],
    faqTitle: "Google Ads FAQ",
    faqs: [
      { q: "What is your management fee pricing model?", a: "We work on a tier system based on monthly advertising budgets, ensuring alignment with your target acquisition limits." }
    ]
  },
  "digital-marketing": {
    slug: "digital-marketing",
    title: "Digital Growth Marketing",
    tagline: "Marketing Strategy",
    description: "Scale user pipelines using lifecycle automation, content campaigns, paid social programs, and conversion rate optimizations.",
    category: "marketing",
    heroImage: "/images/growth_metrics.png",
    heroImageAlt: "Interacting dashboards tracking organic and paid social metrics.",
    metrics: [
      { value: "3x", label: "Pipeline Velocity" },
      { value: "50%+", label: "Retention Gains" }
    ],
    challengesTitle: "Disconnected Channels",
    challengesDesc: "Running isolated marketing campaigns without central attribution models leads to uncoordinated user journeys.",
    challenges: [
      { title: "Conversion Friction", desc: "Removing visual clutter and form steps to accelerate client registration paths.", icon: "trending_down" }
    ],
    approachTitle: "Lifecycle Growth Loop",
    bentoItems: [
      { title: "Automated Lead Nurturing", desc: "Configure email drip campaigns that educate users and pitch products based on activity events.", cols: 12, bgClass: "bg-surface-container-high text-primary", textClass: "text-on-surface-variant", imageUrl: "/images/growth_metrics.png", imageAlt: "Lifecycle marketing automation dashboard charts" }
    ],
    competenciesTitle: "Marketing Focus",
    competencies: [
      { title: "Conversion Rate Optimization", desc: "A/B testing, heatmap tracking, and friction audits to maximize current traffic value.", icon: "query_stats" },
      { title: "Email Lifecycle Automations", desc: "Segmented email distributions designed to retain current customers and cross-sell.", icon: "install_mobile" }
    ],
    techStackTitle: "Growth Stack",
    techStack: ["HubSpot", "Klaviyo", "Meta Ads Manager", "Google Analytics 4", "Hotjar"],
    processTitle: "Growth Methodology",
    processSteps: [
      { step: "A", title: "Attribution Audit", desc: "Confirming that all user actions are accurately tracked in reporting engines." },
      { step: "B", title: "Funnel Optimization", desc: "Optimizing conversion pathways on landing pages." }
    ],
    faqTitle: "Digital Marketing FAQ",
    faqs: [
      { q: "How do you track user conversion paths?", a: "We configure server-side conversions through Google Tag Manager and GA4, minimizing browser tracking loss." }
    ]
  },
  "branding": {
    slug: "branding",
    title: "Brand Identity Engineering",
    tagline: "Corporate Identity",
    description: "Designing memorable visual identities, brand guidelines, and corporate messaging frameworks that build enterprise credibility.",
    category: "dev-design",
    heroImage: "/images/branding.png",
    heroImageAlt: "Brand layouts, palettes, and logo guidelines.",
    metrics: [
      { value: "Absolute", label: "Visual Consistency" },
      { value: "Elite", label: "Market Authority" }
    ],
    challengesTitle: "Brand Dilution",
    challengesDesc: "Inconsistent graphics and layouts across divisions reduce corporate trust. We build unified standards.",
    challenges: [
      { title: "Disconnected Narrative", desc: "Crafting clear value messages that resonate with C-suite targets.", icon: "groups" }
    ],
    approachTitle: "Brand Book Governance",
    bentoItems: [
      { title: "Centralized Assets Library", desc: "Build a single point of truth for corporate colors, typography, logos, and deck templates.", cols: 12, bgClass: "bg-primary text-on-primary", textClass: "text-primary-fixed-dim", imageUrl: "/images/branding.png", imageAlt: "Branding assets design library rules" }
    ],
    competenciesTitle: "Brand Capabilities",
    competencies: [
      { title: "Corporate Guidelines", desc: "Specifying fonts, colors, and graphics placement standards.", icon: "palette" },
      { title: "Presentation Systems", desc: "Designing premium template slide decks for sales and investor pitches.", icon: "draw" }
    ],
    techStackTitle: "Creative Toolkit",
    techStack: ["Adobe CC", "Figma", "Typography Engines", "Asset Repositories"],
    processTitle: "Identity Blueprint",
    processSteps: [
      { step: "A", title: "Core Discovery", desc: "Pinpointing target brand values and positioning parameters." },
      { step: "B", title: "Visual Layouts", desc: "Drafting colors, graphics directions, and layout options." }
    ],
    faqTitle: "Branding FAQ",
    faqs: [
      { q: "What deliverables are included in branding projects?", a: "Clients receive full vector source assets, font files, and a comprehensive Brand Guidelines PDF document." }
    ]
  },
  "it-consulting": {
    slug: "it-consulting",
    title: "IT Consulting & Strategic Planning",
    tagline: "Strategic Consulting",
    description: "Align your technology roadmap with business expansion goals. We audit legacy codebases and blueprint next-gen digital systems.",
    category: "consulting",
    heroImage: "/images/it_consulting.png",
    heroImageAlt: "Executive advisors evaluating technological roadmaps.",
    metrics: [
      { value: "Absolute", label: "Strategic Alignment" },
      { value: "20+", label: "Vetted Architects" }
    ],
    challengesTitle: "Technology Stagnation",
    challengesDesc: "Outdated software environments stop company innovation. Roadmaps must bridge legacy code with modern APIs.",
    challenges: [
      { title: "Architecture Debt", desc: "Identifying and prioritizing high-risk components and dependencies.", icon: "account_tree" }
    ],
    approachTitle: "Enterprise Blueprints",
    bentoItems: [
      { title: "Technical Roadmap Setup", desc: "Draft a quarterly system architecture update plan designed to introduce cloud microservices securely.", cols: 12, bgClass: "bg-surface-container-high text-primary", textClass: "text-on-surface-variant", imageUrl: "/images/it_consulting.png", imageAlt: "IT infrastructure target roadmap blueprint" }
    ],
    competenciesTitle: "Consulting Scope",
    competencies: [
      { title: "Legacy Codebase Auditing", desc: "Reviewing code structures, security holes, and database design bottlenecks.", icon: "terminal" },
      { title: "Feasibility Appraisals", desc: "Evaluating software, integration costs, and implementation schedules.", icon: "query_stats" }
    ],
    techStackTitle: "Architecture Frameworks",
    techStack: ["TOGAF", "Agile SAFe", "AWS Well-Architected", "ITIL standards"],
    processTitle: "Consulting Roadmap",
    processSteps: [
      { step: "A", title: "Operational Audit", desc: "Interviewing engineering leads and auditing infrastructure metrics." },
      { step: "B", title: "Strategic Roadmap", desc: "Authoring the formal technological target document." }
    ],
    faqTitle: "IT Consulting FAQ",
    faqs: [
      { q: "Do you assist with system deployment?", a: "Yes, our advisors coordinate with your engineering teams to deploy roadmapped structures, or we supply ICAD developers to implement them." }
    ]
  }
};
