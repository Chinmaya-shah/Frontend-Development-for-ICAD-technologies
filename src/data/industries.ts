export interface IndustryData {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  heroImage: string;
  heroImageAlt: string;
  metrics: { value: string; label: string }[];
  detailsTitle: string;
  detailsDesc: string;
  highlights: { title: string; desc: string; icon: string }[];
  bentoTitle: string;
  bentoItems: { title: string; desc: string; cols: number; imageUrl?: string; imageAlt?: string; icon?: string }[];
}

export const industriesData: Record<string, IndustryData> = {
  "fintech": {
    slug: "fintech",
    title: "FinTech Analytics Platform",
    tagline: "Secure & Compliant",
    description: "Engineering secure, compliant fintech ecosystems and real-time trading dashboards for global banking leaders and financial innovators.",
    heroImage: "/images/growth_metrics.png",
    heroImageAlt: "Modern trading floor displaying multi-screen stock indices.",
    metrics: [
      { value: "99.999%", label: "Transaction Availability" },
      { value: "<15ms", label: "Ledger Settlement Latency" },
      { value: "Encrypted", label: "Data Protection Protocols" }
    ],
    detailsTitle: "Secure Financial Architecture",
    detailsDesc: "Financial technology requires zero margin of error, sub-millisecond data pipelines, and adherence to shifting international standards.",
    highlights: [
      { title: "Distributed Consensus Ledger", desc: "Constructing distributed ledger architectures utilizing strict ACID consistency patterns to process high transaction volumes with zero lock delay.", icon: "Database" },
      { title: "Real-time Auditing Engine", desc: "Developing automated compliance auditing engines that trace state changes and flag data alterations instantly.", icon: "Shield" },
      { title: "ML Fraud Mitigation", desc: "Integrating inline machine learning modules that score transactions dynamically to block fraudulent actions with zero added latency.", icon: "Brain" },
      { title: "Secured Vault Encryption", desc: "Leveraging envelope encryption protocols and key management integrations to safeguard cardholder details.", icon: "Lock" }
    ],
    bentoTitle: "Fintech Integration Scope",
    bentoItems: [
      { title: "Real-time Trading Systems", desc: "Constructing high-performance client boards linking straight to global exchange markets with sub-millisecond execution.", cols: 8, imageUrl: "/images/growth_metrics.png", imageAlt: "Fintech analytics charts showing trade volumes." },
      { title: "Algorithmic Risk Models", desc: "Implementing real-time stress testing simulations to secure portfolios against sudden liquidity drops.", cols: 4, icon: "BarChart3" },
      { title: "Open Banking APIs", desc: "Developing secure, developer-friendly REST and GraphQL endpoints complying with PSD2 regulations.", cols: 4, icon: "Cpu" },
      { title: "Institutional Ledger Platforms", desc: "Engineering compliant core-banking engines supporting multi-asset clearing and localized tax reconciliation.", cols: 8, imageUrl: "/images/enterprise_erp.png", imageAlt: "Enterprise server array." }
    ]
  },
  "manufacturing": {
    slug: "manufacturing",
    title: "Manufacturing ERP Solutions",
    tagline: "Industry 4.0",
    description: "Optimizing supply chain operations, automated warehouse tracking, and predictive factory maintenance using modern IoT integrations.",
    heroImage: "/images/enterprise_erp.png",
    heroImageAlt: "A large automated industrial assembly plant at twilight.",
    metrics: [
      { value: "-28%", label: "Equipment Downtime" },
      { value: "99.4%", label: "Supply Chain Accuracy" },
      { value: "12x", label: "Inventory Turn Speed" }
    ],
    detailsTitle: "Connected Production Lines",
    detailsDesc: "Our systems connect shop-floor industrial hardware straight to executive ERP databases to enable real-time operational views.",
    highlights: [
      { title: "Edge Vibration Sensors", desc: "Integrating sensor interfaces on shop-floor machinery that stream vibration, temperature, and performance data directly to cloud brokers.", icon: "Activity" },
      { title: "RFID Auto-Procurement", desc: "Setting up auto-replenishment systems triggered by physical raw parts depleting past dynamic thresholds.", icon: "Package" },
      { title: "Predictive Lifecycle Alerts", desc: "Deploying regression models to calculate mean-time-to-failure (MTTF) variables and prompt pre-emptive repairs.", icon: "Wrench" },
      { title: "OT Security Protocols", desc: "Isolating operational technology (OT) from corporate networks to defend assembly lines against malware.", icon: "ShieldAlert" }
    ],
    bentoTitle: "Industry 4.0 Layout",
    bentoItems: [
      { title: "Digital Twin Dashboards", desc: "Simulating physical assembly operations digitally to isolate efficiency blockers.", cols: 4, icon: "Layers" },
      { title: "Predictive Warehouse Sourcing", desc: "Forecasting demand variations using historic market datasets to ensure optimal inventory volumes.", cols: 8, imageUrl: "/images/enterprise_erp.png", imageAlt: "Industrial automated warehouse with robotic arms." },
      { title: "Shop-Floor Edge Mesh", desc: "Deploying local mesh communication layers to keep sensor data streaming even during main network cuts.", cols: 8, imageUrl: "/images/about_office.png", imageAlt: "Factory floor control hubs." },
      { title: "Automated Supply Audits", desc: "Running automatic verification scans on received parts batches via computer-vision systems.", cols: 4, icon: "Eye" }
    ]
  },
  "logistics": {
    slug: "logistics",
    title: "Logistics Tracking Platform",
    tagline: "Global Supply Chain",
    description: "Streamlining shipment routing, fleet coordination, and warehouse inventory data flow with high-efficiency edge analytics.",
    heroImage: "/images/cloud_architecture.png",
    heroImageAlt: "Stylized map showing routes and shipping hubs.",
    metrics: [
      { value: "32%", label: "Transit Route Efficiency" },
      { value: "99.98%", label: "Cargo Tracking Accuracy" },
      { value: "-15%", label: "Fleet Fuel Consumption" }
    ],
    detailsTitle: "Dynamic Route Optimizers",
    detailsDesc: "Avoid traffic delays and routing mistakes. Our software updates fleet paths dynamically using live traffic analytics.",
    highlights: [
      { title: "Dynamic Route Planning", desc: "Re-routing active vehicles based on traffic reports, weather patterns, and port delays to ensure on-time delivery.", icon: "Map" },
      { title: "Synchronized Cargo Events", desc: "Linking physical cargo scan actions directly to database instances to trigger invoicing and customer notices.", icon: "RefreshCw" },
      { title: "Telemetry Dispatch Boards", desc: "Streaming vehicle coordinates, driver duty cycles, and engine diagnostics directly to unified dashboards.", icon: "Truck" },
      { title: "Cold Chain IoT Monitors", desc: "Deploying cellular temperature and humidity trackers to protect sensitive cargo batches from spoil hazards.", icon: "Thermometer" }
    ],
    bentoTitle: "Logistics Dashboard",
    bentoItems: [
      { title: "Multi-Hub Routing Engines", desc: "Calculating optimal truck, rail, and air freight routes across global logistics points dynamically.", cols: 8, imageUrl: "/images/cloud_architecture.png", imageAlt: "Global logistics tracking map visual." },
      { title: "Smart Port Integrations", desc: "Connecting directly to harbor manifest APIs to forecast container offload delays in advance.", cols: 4, icon: "Anchor" },
      { title: "Autonomous Facility Sorts", desc: "Orchestrating robotic sorter units with coordinate APIs to accelerate sorting line velocities.", cols: 4, icon: "Zap" },
      { title: "Fleet Lifecycle Analytics", desc: "Aggregating telemetry diagnostics over time to schedule fleet repair actions before costly breakdowns occur.", cols: 8, imageUrl: "/images/growth_metrics.png", imageAlt: "Fleet operations charts." }
    ]
  },
  "healthcare": {
    slug: "healthcare",
    title: "Healthcare Management Platform",
    tagline: "Compliant Systems",
    description: "Developing interoperable record database networks, secure doctor portals, and telehealth communication channels that satisfy regulatory protocols.",
    heroImage: "/images/cybersecurity.png",
    heroImageAlt: "Highly secure sterile research lab facilities.",
    metrics: [
      { value: "Compliant", label: "Privacy Standards" },
      { value: "99.999%", label: "Records Access Uptime" },
      { value: "<50ms", label: "Patient Query Response" }
    ],
    detailsTitle: "Interoperable Patient Portals",
    detailsDesc: "Unifying clinical data across clinics while ensuring strict compliance with patient privacy laws.",
    highlights: [
      { title: "HL7/FHIR Data Core", desc: "Constructing interoperable data layers allowing secure, structured patient record sharing across clinics.", icon: "HeartPulse" },
      { title: "Zero-Knowledge Telehealth", desc: "Engineering encrypted voice/video pathways that guarantee privacy compliance during virtual sessions.", icon: "Video" },
      { title: "Multi-Role EHR Access", desc: "Defining granular authorization rules based on OAuth/OIDC protocols to protect patient health records.", icon: "Lock" },
      { title: "Clinical Decision Support", desc: "Developing algorithms to cross-reference patient symptoms against medical databases and highlight care alerts.", icon: "CheckSquare" }
    ],
    bentoTitle: "Medical Dashboards",
    bentoItems: [
      { title: "Prescription Analytics Boards", desc: "Connecting pharmacy dispensers to doctor registers to ensure correct dosing coordinates.", cols: 4, icon: "ClipboardList" },
      { title: "Secure Telemedicine Gateways", desc: "Supporting low-latency, WebRTC-based clinical consultations with direct document sharing capabilities.", cols: 8, imageUrl: "/images/cybersecurity.png", imageAlt: "Lab researcher analyzing digital data screens." },
      { title: "FHIR API Aggregators", desc: "Unifying clinical research data formats from disparate facilities into clean JSON APIs for cohort queries.", cols: 8, imageUrl: "/images/ai_solutions.png", imageAlt: "AI brain mapping diagnostics display." },
      { title: "Remote Care IoT Hubs", desc: "Receiving and organizing vital metrics from home wearable devices securely via cellular pipelines.", cols: 4, icon: "Activity" }
    ]
  }
};
