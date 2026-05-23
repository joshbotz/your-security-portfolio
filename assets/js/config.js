/*
  ==========================================================
  PORTFOLIO CONFIG
  ==========================================================

  START HERE — 5 fields, then preview.

  1. Update the 5 required fields below.
  2. Replace assets/img/headshot.png with your own image.
  3. Open index.html in a browser to preview.
  4. Deploy when ready.

  Everything else is pre-filled and publish-ready.
*/

const SITE_CONFIG = {

  /*
    ========================================================
    REQUIRED — UPDATE THESE 5 FIELDS
    ========================================================
  */
  siteFirstName: "[YOUR_FIRST_NAME]",
  siteLastName: "[YOUR_LAST_NAME]",
  roleTitle: "[YOUR_ROLE_TITLE]",
  email: "[YOUR_EMAIL_ADDRESS]",
  resumeUrl: "[YOUR_RESUME_URL]",

  /*
    ========================================================
    OPTIONAL LINKS — leave blank to hide, fill in when ready.
    ========================================================
  */
  linkedinUrl: "",
  githubUrl: "",
  youtubeUrl: "",
  websiteUrl: "",

  // Scheduling link (Calendly, Cal.com, etc.) — leave blank to hide.
  // When set, a "Book a Call" card appears on the contact page.
  schedulingUrl: "",

  // Site URL — fill this in after your first deploy (for social sharing).
  // Example: "https://d1234abcd.cloudfront.net" or "https://yourname.com"
  siteUrl: "",

  // Last updated — shown in the footer. Update when you deploy changes.
  lastUpdated: "",

  /*
    ========================================================
    SKILLS & CERTIFICATIONS
    Shown on the About page sidebar. Set to [] to hide.
    ========================================================
  */
  skills: [
    "AWS Security",
    "Cloud Incident Response",
    "Detection Engineering",
    "Threat Hunting",
    "SOC 2 / Trust Services Criteria",
    "MITRE ATT&CK",
    "Terraform",
    "IAM",
    "CloudTrail",
    "GuardDuty",
    "Wazuh / SIEM",
    "AI-Augmented Workflows"
  ],

  certifications: [
    // "AWS Security Specialty",
    // "CompTIA Security+",
  ],

  /*
    ========================================================
    CURRENTLY BUILDING — shown on the homepage.
    Update to reflect what you're working on now.
    Set to [] to hide this section.
    ========================================================
  */
  currentlyBuilding: [
    "Sharpening detection rules and tuning against fresh baseline data",
    "Writing up a recent threat hunt and the assumptions it tested",
    "Pairing with AI to compress the mechanical parts of cloud security work"
  ],

  /*
    ========================================================
    FAQ — shown on the homepage and contact page.
    Update the answers to match your own work and background.
    ========================================================
  */
  faq: [
    {
      question: "What does \"AI-augmented\" actually mean in your work?",
      answer: "AI does the mechanical work — clustering events, drafting first-pass language, summarizing telemetry. I do the judgment work — scoping the engagement, validating findings against source evidence, rating severity, signing the report. The decisions that matter stay with me. AI raises the ceiling on what I can ship without lowering the bar on what I should defend."
    },
    {
      question: "How do you decide what's in scope on an assessment or hunt?",
      answer: "Start from the evidence available, the question being asked, and the time window. Name what's in, name what's out, and surface the limitations on the deliverable itself — every project page here has a Limitations section for exactly this reason. Honest scoping is a senior-practitioner move, not a hedge."
    },
    {
      question: "What's your stack?",
      answer: "AWS for cloud — IAM, CloudTrail, GuardDuty, S3, CloudFront, Wazuh, MCP. Terraform for infrastructure-as-code. Claude Code as the AI surface. Markdown and HTML for the writing the work demands. Whatever the role's stack is, I'll learn it the same way — by shipping a project in it."
    },
    {
      question: "How can I reach you?",
      answer: "Email or LinkedIn — both are on the contact page. If you're hiring, share the role; if you're a peer practitioner, reach out and let's compare notes."
    }
  ],

  /*
    ========================================================
    EVERYTHING BELOW IS PRE-FILLED — tweak when ready.
    You can safely ignore all of this for your first deploy.
    ========================================================
  */

  // --- Site Identity (auto-derived from your name if left blank) ---
  siteName: "",           // defaults to "FirstName LastName" if blank
  pageTitleSuffix: "Cloud Security Portfolio",

  // --- Hero / Positioning ---
  focusLine: "AWS cloud security work, shipped — using AI to compress hours into minutes without giving up the judgment that makes the work defensible.",
  siteTagline: "AWS Cloud Security \u2022 AI-Augmented Practitioner \u2022 Built and Shipped",
  siteTaglineShort: "AWS Cloud Security \u2022 AI-Augmented \u2022 Shipped",

  homeHeroTitle: "I'm a cloud security practitioner. AI-augmented in how I work.",
  homeHeroSubtitle: "I ship real cloud security work end-to-end: assessment, response, detection, compliance. Every project documented for the kind of review a real engagement gets. AI compresses the mechanical hours; the calls that matter stay with me. Read any project below for proof.",

  projectsHeroTitle: "Cloud security I've shipped.",
  projectsHeroSubtitle: "Real projects, documented end to end. Click any one — read it the way it would be reviewed in the role.",

  aboutHeroTitle: "I do cloud security the way the work actually shows up.",
  aboutHeroSubtitle: "Real environments, real evidence, real decisions. AI is part of how I move; judgment is what I'm hired for. Below: how I work, how AI fits in, and where this is going.",

  contactHeroTitle: "Open to the right next step.",
  contactHeroSubtitle: "If you're hiring for cloud security work, building a team that uses AI seriously, or want to compare notes on practitioner workflows — reach out.",

  // --- Homepage Value Boxes ---
  homeValueOneTitle: "Real AWS Work, Not Slides",
  homeValueOneBody: "Production-shaped projects across assessment, response, detection, and compliance &mdash; each documented with the evidence and tradeoffs a real reviewer would want.",
  homeValueTwoTitle: "AI as Multiplier, Not Magic",
  homeValueTwoBody: "AI compresses the mechanical hours so my judgment goes where it counts. Every artifact ships with my name on it.",
  homeValueThreeTitle: "Honest About Scope",
  homeValueThreeBody: "Every project names what was in scope, what was out, and what I'd do differently next time. Senior practitioners read that as a strength.",

  aboutSnapshotStrength: "Practitioner-first: I build real projects, ship them, and use AI to raise the ceiling on what one person can do without lowering the bar on what they should defend.",

  // --- Featured Project ---
  featuredProjectTitle: "Security Portfolio Platform in AWS",
  featuredProjectShortDescription: "A cloud-hosted portfolio built with HTML, CSS, AWS S3, CloudFront, and Terraform. This is both my live portfolio and a hands-on project demonstrating real cloud deployment and infrastructure-as-code.",
  starterProjectLabel: "Featured Project",
  starterProjectEyebrow: "Featured Project \u2022 AWS Portfolio Foundation",
  starterProjectOutcome: "A live portfolio built and deployed to AWS to showcase cloud security projects and technical work.",
  starterProjectStackShort: "HTML \u2022 CSS \u2022 AWS S3 \u2022 CloudFront \u2022 Terraform",

  // --- Focus Areas ---
  focusAreaOneTitle: "Assessment &amp; Response",
  focusAreaOneDescription: "AWS posture reviews and cloud incident response — alert to written closeout, with remediation that closes process gaps, not just findings.",
  focusAreaTwoTitle: "Detection Engineering &amp; Threat Hunting",
  focusAreaTwoDescription: "SIEM deployment, custom rules tuned against real baselines, hypothesis-driven hunts, and AI-augmented investigation that keeps the calls with the practitioner.",
  focusAreaThreeTitle: "Compliance &amp; Audit Readiness",
  focusAreaThreeDescription: "Control mapping, audit-grade narratives, evidence-to-source-system plans, and gap analyses that name owners and target dates.",
  focusAreasSectionDesc: "Three categories of cloud security work, shipped with the same discipline: real evidence, honest scoping, AI used responsibly.",

  // --- Shared Short Copy ---
  communityShort: "An AI-augmented cloud security portfolio: AWS projects shipped end to end, documented for review, and honest about what was in scope.",
  communityShorter: "AI-augmented cloud security work in AWS &mdash; shipped, documented, defensible.",
  starterShort: "Cloud security projects you can read like real engagements: scoping, evidence, decisions, limitations, lessons.",
  starterShorter: "Cloud security work shipped and documented for the role, not the resume bullet.",
  proofOfWorkShort: "Projects written so a reviewer can scan them in 30 seconds and a senior practitioner can see real depth on a slow read.",

  // --- Template Promo ---
  templatePromoTitle: "Build your own portfolio",
  templatePromoText: "Want a portfolio like this? Fork the template, deploy on AWS in about 30 minutes, then fill it with your real work.",
  templatePromoCommunityLabel: "View the Template on GitHub",
  templatePromoGithubLabel: "Get the Template",
  skoolUrl: "https://github.com/joshbotz/your-security-portfolio",
  templateRepoUrl: "https://github.com/joshbotz/your-security-portfolio",

  // --- Community Badge ---
  showCommunityBadge: false,
  communityBadgeText: "Built with this template",

  // --- Assets ---
  headshotPath: "assets/img/headshot.png",
  headshotPathNested: "../assets/img/headshot.png",
  faviconPath: "assets/img/favicon.svg",
  faviconPathNested: "../assets/img/favicon.svg",

  // --- OG / Social Sharing ---
  ogImage: "assets/img/og-image.png",
  ogSiteName: "",

  // --- CTA Labels ---
  ctaJoinCommunity: "Join the Community",
  ctaJoinFreeCommunity: "Build Yours in the Community",
  ctaViewProjects: "View Projects",
  ctaBrowseProjects: "Browse Projects",
  ctaOpenStarterProject: "Open Featured Project",
  ctaReadProjectDetails: "Read Project Details",
  ctaGoHome: "Go Home",

  // --- Button / Link Labels ---
  linkedinLabel: "Connect on LinkedIn",
  githubLabel: "View GitHub",
  emailLabel: "Send Email",
  youtubeLabel: "View YouTube",
  websiteLabel: "Visit Website",
  resumeLabel: "View Resume",
  schedulingLabel: "Book a Call",

  // --- Footer ---
  copyrightYear: "2026",
  manifestPortfolioLabel: "portfolio-overview.json",
  manifestProjectsLabel: "project-index.yml",
  manifestArchitectureLabel: "architecture-summary.yml",

  // --- Meta Descriptions ---
  defaultMetaDescription: "A cloud security portfolio showcasing hands-on AWS projects, architecture decisions, and real technical implementation.",
  homeMetaDescription: "Cloud security portfolio featuring hands-on AWS projects, security architecture, and technical implementation.",
  projectsMetaDescription: "Hands-on cloud security projects, AWS labs, detection tooling, and architecture writeups built through real implementation.",
  aboutMetaDescription: "Background, approach, and direction — learn about the builder behind this cloud security portfolio.",
  contactMetaDescription: "Connect directly, review the resume, and explore the cloud security projects featured in this portfolio.",
  errorMetaDescription: "The page you were looking for could not be found. Return to the homepage or browse the project collection.",
  projectMetaDescription: "A detailed project page covering AWS hosting, Terraform infrastructure, and the technical decisions behind a live cloud security portfolio.",

  // --- Projects Page ---
  featuredSectionDesc: "A starting point for understanding what I build and how I approach implementation.",
  projectsCategorySectionHeading: "Project Categories",
  projectsCategorySectionDesc: "The kinds of work I'm building toward — each connected to real cloud security skills.",
  projectsUdpJoke: "Small security joke for the road: I would tell you a UDP joke, but you might not get it.",
  projectsManifestYaml: "featured:\n  - security-portfolio-platform\n\nfocus_areas:\n  - assessment-and-response\n  - detection-and-hunting\n  - compliance-and-evidence\n\ndiscipline:\n  - real-evidence-not-narrative\n  - honest-scope-not-hedge\n  - ai-as-multiplier-not-magic",
  projectsManifestThemes: "Assessment \u2022 Response \u2022 Detection \u2022 Compliance",
  projectsManifestWhatShows: "Real cloud security work, shipped with discipline",
  suggestedProjectOneTitle: "Your Original Project",
  suggestedProjectOneDescription: "Drop in your own work here &mdash; a lab you built, an engagement you can write about, a side project that proves something specific. Use project-template.html as the starting structure.",
  suggestedProjectTwoTitle: "A Lab You Ran End-to-End",
  suggestedProjectTwoDescription: "Add a writeup of a security lab you ran from start to finish &mdash; a SIEM deployment, an IR exercise, a detection-engineering build. Drop a file into projects/, customize, and add a card here.",

  // --- Contact Page ---
  contactSchedulingCardDesc: "Skip the back-and-forth — pick a time that works and let's talk.",
  contactWaysToConnectDesc: "Choose the option that works best for you."
};
