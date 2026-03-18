export const profile = {
  email: "aolawale822@gmail.com",
  name: "Afeez Olawale Rabiu",
  phone: "+2348105318474",
  role: "Digital Marketing Executive and Research-Oriented Copywriter",
  summary:
    "Results-driven marketer and copywriter with 5+ years of hybrid experience across content development, paid advertising, SEO/SEM, social media, and research-led storytelling in healthcare consultancy, media, and e-commerce.",
} as const;

export const navLinks = [
  { href: "/about", label: "About" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/contact", label: "Contact" },
] as const;

export const socialLinks = [
  {
    href: "mailto:aolawale822@gmail.com",
    label: "Email",
    value: "aolawale822@gmail.com",
  },
  {
    href: "https://www.linkedin.com/in/afeez-rabiu-5668061b4/",
    label: "LinkedIn",
    value: "afeez-rabiu-5668061b4",
  },
  {
    href: "https://muckrack.com/afeez-rabiu",
    label: "Muck Rack",
    value: "afeez-rabiu",
  },
] as const;

export const stats = [
  {
    value: "5+ Years",
    label: "Hybrid Experience",
    detail:
      "Work spanning paid media, SEO/SEM, social media, content, and research-backed storytelling.",
  },
  {
    value: "7.2x",
    label: "ROAS",
    detail:
      "Achieved on managed paid search and SEM activity for PLUS Tenders Ltd.",
  },
  {
    value: "70%",
    label: "Traffic Increase",
    detail:
      "Website traffic growth driven by content strategy and SEO execution at Viral Ad Media.",
  },
  {
    value: "40%",
    label: "Lead Growth",
    detail:
      "Qualified lead generation increase within three months through full-funnel campaign work.",
  },
] as const;

export const services = [
  {
    title: "Performance Marketing",
    desc: "SEO, SEM, PPC, social media, and paid media planning grounded in conversion data and audience research.",
  },
  {
    title: "Copy and Funnel Content",
    desc: "Landing pages, ad copy, lead magnets, blogs, email sequences, and video scripts designed to move prospects forward.",
  },
  {
    title: "Research, Reporting, and Optimization",
    desc: "Google Analytics, SEMrush, Ubersuggest, OSINT research, and structured experimentation for sharper decisions.",
  },
] as const;

export const caseStudies = [
  {
    title: "PLUS Tenders Ltd",
    result: "40% more qualified leads",
    summary:
      "Led SEO, social, PPC, and email campaigns for a UK healthcare tender writing business, while also lifting LinkedIn engagement by 55 percent, improving CTR by 28 percent, and reaching 7.2x ROAS.",
    channels: ["SEO", "PPC", "Email", "LinkedIn"],
  },
  {
    title: "Viral Ad Media",
    result: "70% traffic growth",
    summary:
      "Built SEO-driven sales copy, lead magnets, email sequences, and video scripts that doubled conversion rates and supported a campaign that generated more than $1M in under eight months.",
    channels: ["SEO Copy", "Email", "Video Scripts", "A/B Testing"],
  },
  {
    title: "Noise Makers Ltd",
    result: "60% market penetration",
    summary:
      "Launched direct-to-customer retail activation campaigns for Infinity cereals, combining persuasive product copy with field marketing to strengthen visibility in-market.",
    channels: ["Sales Activation", "Retail Marketing", "Product Copy"],
  },
] as const;

export const experienceTimeline = [
  {
    role: "Digital Marketing Lead Executive",
    company: "PLUS Tenders Ltd",
    location: "Southend-on-Sea, UK | Remote",
    period: "Oct 2024 - Present",
    achievements: [
      "Developed and executed full-funnel digital campaigns across SEO, social media, PPC, and email, increasing qualified lead generation by 40 percent within three months.",
      "Created healthcare-specific blog, social, and email content that improved LinkedIn engagement by 55 percent.",
      "Managed paid search and SEM strategy with Meta Ads and SEMrush, achieving 7.2x ROAS.",
      "Used Google Analytics and conversion tracking to improve landing pages and raise average CTR by 28 percent.",
    ],
  },
  {
    role: "Content Development Lead",
    company: "Viral Ad Media",
    location: "Houston, Texas, USA | Remote",
    period: "Apr 2022 - Present",
    achievements: [
      "Led content strategy that boosted website traffic by 70 percent and doubled conversion rates.",
      "Produced SEO-optimized sales copy, blogs, lead magnets, email sequences, and video scripts.",
      "Worked with design and web teams to keep message consistency across digital touchpoints.",
      "Contributed as the sole copywriting content developer to a high-end campaign that generated over $1M in less than eight months.",
    ],
  },
  {
    role: "Fact Checker / Researcher / Journalist",
    company: "Factcheck Africa",
    location: "Nigeria",
    period: "Dec 2021 - Present",
    achievements: [
      "Investigated and debunked misinformation campaigns using OSINT tools and AI-assisted fact-checking workflows.",
      "Published fact-check reports that improved media literacy and countered disinformation.",
      "Supported editorial reviews and digital safety campaigns tied to Nigerian political discourse.",
      "Facilitated training sessions across tertiary institutions on media literacy and fact-checking basics.",
    ],
  },
  {
    role: "Investigative Reporter",
    company: "WikkiTimes",
    location: "Bauchi, Nigeria",
    period: "Apr 2022 - Aug 2022",
    achievements: [
      "Published investigative features and human-interest stories on governance, education, and security.",
      "Partnered with reporters and editors to produce evidence-based stories that shaped community development conversations.",
    ],
  },
  {
    role: "Marketing and Sales Activation Lead",
    company: "Noise Makers Ltd",
    location: "Lagos, Nigeria",
    period: "Mar 2013 - Jun 2014",
    achievements: [
      "Launched direct-to-customer campaigns that improved market penetration by 60 percent for a new brand launch.",
      "Wrote persuasive product copy and led visibility efforts through in-person promotional work.",
    ],
  },
] as const;

export const aboutHighlights = [
  "Experience across healthcare consultancy, media, e-commerce, and public-interest journalism.",
  "Blends campaign execution with research depth, compliance awareness, and message clarity.",
  "Comfortable leading remote collaboration with Slack, Trello, Zoom, Google Meet, WhatsApp, and Discord.",
] as const;

export const certifications = [
  "Digital Marketing Fundamentals - Google Digital Garage",
  "Meta Certified Digital Marketing Associate",
  "SEO and SEM Strategy - SEMrush Academy",
  "Email Marketing - HubSpot Academy",
  "Copywriting Essentials - Udemy",
  "AI for Marketing - Coursera",
] as const;

export const toolGroups = [
  {
    title: "Paid media and analytics",
    items: [
      "Meta Ads Manager",
      "Google Ads",
      "Google Analytics",
      "SEMrush",
      "Ubersuggest",
      "Kalodata",
    ],
  },
  {
    title: "CMS and automation",
    items: [
      "WordPress",
      "Elementor",
      "ClickFunnels",
      "Webinarfuel",
      "Zapier",
      "Trello",
    ],
  },
  {
    title: "Content and research tools",
    items: [
      "ChatGPT",
      "CapCut",
      "Google VEO3",
      "Jasper AI",
      "Grammarly",
      "OSINT workflows",
    ],
  },
] as const;

export const portfolioLinks = [
  {
    href: "https://factcheckafrica.net/?s=Afeez+Rabiu",
    label: "FactCheck reports",
    desc: "Published fact-checking and media literacy work.",
  },
  {
    href: "https://wikkitimes.com/?s=afeez+rabiu",
    label: "Investigative stories",
    desc: "Evidence-based reporting and feature writing archive.",
  },
  {
    href: "https://muckrack.com/afeez-rabiu",
    label: "Muck Rack portfolio",
    desc: "Portfolio snapshot across reporting and writing projects.",
  },
  {
    href: "https://www.linkedin.com/in/afeez-rabiu-5668061b4/",
    label: "LinkedIn profile",
    desc: "Professional profile, role history, and current positioning.",
  },
] as const;

export const contactAreas = [
  {
    title: "Paid media and campaign execution",
    desc: "Support across SEO, SEM, PPC, social media, paid search, and conversion-focused digital campaigns.",
  },
  {
    title: "Copywriting and funnel content",
    desc: "Landing pages, lead magnets, ad copy, email sequences, blog content, and sales narrative development.",
  },
  {
    title: "Research and strategic reporting",
    desc: "Audience research, competitor analysis, fact-checking discipline, analytics, and message refinement.",
  },
] as const;
