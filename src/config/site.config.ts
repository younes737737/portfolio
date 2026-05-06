import { SITE_URL, GOOGLE_SITE_VERIFICATION, BING_SITE_VERIFICATION } from 'astro:env/server';

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  author: string;
  email: string;
  phone?: string;
  address?: {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  socialLinks: string[];
  twitter?: {
    site: string;
    creator: string;
  };
  verification?: {
    google?: string;
    bing?: string;
  };
  /** Path to author photo (relative to site root, e.g. '/avatar.jpg'). Used in Person schema. */
  authorImage?: string;
  /**
   * Set to false if your blog post images already match your theme color
   * and you don't want the brand color overlay applied on top of them.
   */
  blogImageOverlay?: boolean;
  /**
   * Branding configuration
   * Logo files: Replace SVGs in src/assets/branding/
   * Favicon: Replace in public/favicon.svg
   */
  branding: {
    /** Logo alt text for accessibility */
    logo: {
      alt: string;
      /** Path to logo image for structured data (e.g. '/logo.png'). Add a PNG to public/ and set this. */
      imageUrl?: string;
    };
    /** Favicon path (lives in public/) */
    favicon: {
      svg: string;
    };
    /** Theme colors for manifest and browser UI */
    colors: {
      /** Browser toolbar color (hex) */
      themeColor: string;
      /** PWA splash screen background (hex) */
      backgroundColor: string;
    };
  };
}

const siteConfig: SiteConfig = {
  name: 'Developer-web',
  description:
    'Busy building premium websites for businesses. We combine technical discipline with creative excellence. We don\'t just "make websites"—we engineer digital tools that solve business problems.',
  url: SITE_URL || 'https://developer-web.com',
  ogImage: '/og-default.svg',
  author: 'Developer Web',
  email: 'contact@developer-web.com',
  address: {
    street: '',
    city: 'Marrakech',
    state: '',
    zip: '',
    country: 'Maroc',
  },
  socialLinks: [
    'https://x.com/developer_webgrowth',
    'https://www.linkedin.com/in/developer_webgrowth',
    'https://instagram.com/developer_webgrowth',
  ],
  twitter: {
    site: 'https://x.com/developer_webgrowth',
    creator: '@developer_webgrowth',
  },
  verification: {
    google: GOOGLE_SITE_VERIFICATION,
    bing: BING_SITE_VERIFICATION,
  },
  authorImage: '/avatar.svg',
  blogImageOverlay: true,
  branding: {
    logo: {
      alt: 'Developer Web',
      imageUrl: '/logo.png',
    },
    favicon: {
      svg: '/logo.png',
    },
    colors: {
      themeColor: '#3b82f6',
      backgroundColor: '#ffffff',
    },
  },
};

export default siteConfig;
