import type { Metadata } from "next";

import { profile, socialLinks } from "@/lib/site-content";

const fallbackSiteUrl = "https://afeez-rabiu.vercel.app";

function normalizeSiteUrl(value?: string) {
  if (!value?.trim()) {
    return new URL(fallbackSiteUrl);
  }

  const normalized =
    value.startsWith("http://") || value.startsWith("https://")
      ? value
      : `https://${value}`;

  return new URL(normalized);
}

export const siteUrl = normalizeSiteUrl(
  process.env.NEXT_PUBLIC_SITE_URL ??
    process.env.SITE_URL ??
    process.env.VERCEL_PROJECT_PRODUCTION_URL ??
    process.env.VERCEL_URL
);

export const siteConfig = {
  description:
    "Digital Marketing Executive and Research-Oriented Copywriter with 5+ years of experience across paid media, SEO/SEM, content strategy, performance reporting, and research-led storytelling.",
  keywords: [
    "Afeez Olawale Rabiu",
    "digital marketing executive",
    "research-oriented copywriter",
    "SEO specialist",
    "SEM strategist",
    "paid media manager",
    "content strategist",
    "copywriter portfolio",
    "growth marketing portfolio",
    "fact-checking journalist",
  ],
  locale: "en_US",
  title: `${profile.name} | Digital Marketing Executive`,
} as const;

export const sameAsLinks = socialLinks
  .filter((link) => link.href.startsWith("http"))
  .map((link) => link.href);

export function absoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}

type PageMetadataInput = {
  description: string;
  keywords?: string[];
  path: string;
  title?: string;
};

export function createPageMetadata({
  description,
  keywords = [],
  path,
  title,
}: PageMetadataInput): Metadata {
  const fullTitle = title ? `${title} | ${profile.name}` : siteConfig.title;

  return {
    metadataBase: siteUrl,
    title,
    description,
    keywords: Array.from(new Set([...siteConfig.keywords, ...keywords])),
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName: profile.name,
      locale: siteConfig.locale,
      type: "website",
    },
    twitter: {
      title: fullTitle,
      description,
      card: "summary_large_image",
    },
  };
}

export const rootMetadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: siteConfig.title,
    template: `%s | ${profile.name}`,
  },
  description: siteConfig.description,
  applicationName: profile.name,
  authors: [{ name: profile.name }],
  creator: profile.name,
  publisher: profile.name,
  category: "Digital marketing portfolio",
  keywords: [...siteConfig.keywords],
  alternates: {
    canonical: "/",
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: "/",
    siteName: profile.name,
    locale: siteConfig.locale,
    type: "website",
  },
  twitter: {
    title: siteConfig.title,
    description: siteConfig.description,
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: absoluteUrl("/"),
  email: `mailto:${profile.email}`,
  telephone: profile.phone,
  jobTitle: profile.role,
  description: profile.summary,
  sameAs: sameAsLinks,
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Lagos State University",
  },
  knowsAbout: [
    "Digital marketing",
    "SEO",
    "SEM",
    "Paid media",
    "Copywriting",
    "Content strategy",
    "Fact-checking",
    "OSINT research",
  ],
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: profile.name,
  url: absoluteUrl("/"),
  description: siteConfig.description,
  inLanguage: "en",
  publisher: {
    "@type": "Person",
    name: profile.name,
  },
};

type BreadcrumbItem = {
  name: string;
  path: string;
};

export function createBreadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
