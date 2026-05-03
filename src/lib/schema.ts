import type {
  WebSite,
  Organization,
  Person,
  LocalBusiness,
  BlogPosting,
  BreadcrumbList,
  FAQPage,
  WithContext,
} from 'schema-dts';
import siteConfig from '@/config/site.config';

/**
 * Create WebSite schema for homepage
 */
export function createWebsiteSchema(): WithContext<WebSite> {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
  };
}

/**
 * Create Person schema for Developer Web
 */
export function createPersonSchema(): WithContext<Person> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Developer Web',
    jobTitle: 'Web Development Agency',
    url: siteConfig.url,
    email: siteConfig.email,
    ...(siteConfig.authorImage ? { image: `${siteConfig.url}${siteConfig.authorImage}` } : {}),
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Marrakech',
      addressRegion: 'Marrakech-Safi',
      addressCountry: 'MA',
    },
    sameAs: siteConfig.socialLinks,
    knowsAbout: [
      'Web Development',
      'E-commerce Solutions',
      'SEO Optimization',
      'Digital Marketing',
      'Performance Optimization',
      'Mobile Development',
      'UI/UX Design'
    ],
    offers: {
      '@type': 'Offer',
      itemOffered: 'Web Development Services',
      areaServed: 'Marrakech, Morocco',
      availableRegion: ['MA', 'Worldwide']
    }
  };
}

/**
 * Create ProfessionalService schema for local SEO - Developer Web
 */
export function createProfessionalServiceSchema(): WithContext<LocalBusiness> {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService' as 'LocalBusiness',
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.email,
    ...(siteConfig.phone ? { telephone: siteConfig.phone } : {}),
    ...(siteConfig.authorImage ? { image: `${siteConfig.url}${siteConfig.authorImage}` } : {}),
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Marrakech',
      addressRegion: 'Marrakech-Safi',
      addressCountry: 'MA',
      postalCode: '40000'
    },
    areaServed: [
      { '@type': 'Country', name: 'Morocco' },
      { '@type': 'Country', name: 'Worldwide' },
      { '@type': 'City', name: 'Marrakech' },
      { '@type': 'City', name: 'Casablanca' },
      { '@type': 'City', name: 'Rabat' }
    ],
    sameAs: siteConfig.socialLinks,
    serviceType: 'Web Development Services',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Web Development Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Custom Website Development',
            description: 'Premium custom websites built with modern technologies'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'E-commerce Solutions',
            description: 'Complete e-commerce platforms with payment integration'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'SEO Optimization',
            description: 'Search engine optimization for better visibility'
          }
        }
      ]
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '50',
      bestRating: '5'
    }
  };
}

/**
 * Create Organization schema - Developer Web Agency
 */
export function createOrganizationSchema(): WithContext<Organization> {
  const logoUrl = siteConfig.branding.logo.imageUrl
    ? `${siteConfig.url}${siteConfig.branding.logo.imageUrl}`
    : undefined;
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
    description: 'Busy building premium websites for businesses. We combine technical discipline with creative excellence to engineer digital tools that solve business problems.',
    ...(logoUrl ? { logo: logoUrl } : {}),
    sameAs: siteConfig.socialLinks,
    contactPoint: siteConfig.phone
      ? {
        '@type': 'ContactPoint',
        telephone: siteConfig.phone,
        contactType: 'customer service',
        availableLanguage: ['English', 'French', 'Arabic']
      }
      : {
        '@type': 'ContactPoint',
        email: siteConfig.email,
        contactType: 'customer service',
        availableLanguage: ['English', 'French', 'Arabic']
      },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Marrakech',
      addressRegion: 'Marrakech-Safi',
      addressCountry: 'MA',
      postalCode: '40000'
    },
    areaServed: [
      { '@type': 'Country', name: 'Morocco' },
      { '@type': 'Country', name: 'Worldwide' }
    ],
    knowsAbout: [
      'Web Development',
      'E-commerce',
      'SEO',
      'Digital Marketing',
      'Performance Optimization'
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Web Development Services',
      numberOfOffers: '3'
    }
  };
}

/**
 * Create BlogPosting schema for blog posts
 */
export function createBlogPostSchema(post: {
  title: string;
  description: string;
  url: string;
  image: string;
  datePublished: Date;
  dateModified?: Date;
  author: { name: string; url?: string };
}): WithContext<BlogPosting> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    url: post.url,
    image: post.image,
    datePublished: post.datePublished.toISOString(),
    dateModified: post.dateModified?.toISOString() || post.datePublished.toISOString(),
    author: {
      '@type': 'Person',
      name: post.author.name,
      url: post.author.url,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      ...(siteConfig.branding.logo.imageUrl
        ? {
          logo: {
            '@type': 'ImageObject',
            url: `${siteConfig.url}${siteConfig.branding.logo.imageUrl}`,
          },
        }
        : {}),
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': post.url,
    },
  };
}

/**
 * Create BreadcrumbList schema
 */
export function createBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
): WithContext<BreadcrumbList> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Create FAQPage schema
 */
export function createFAQSchema(
  faqs: Array<{ question: string; answer: string }>
): WithContext<FAQPage> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
