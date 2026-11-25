import { COMPANY_INFO, SITE_METADATA } from './constants';

export function getOrganizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'GeneralContractor',
    name: COMPANY_INFO.legalName,
    alternateName: COMPANY_INFO.tradeName,
    url: SITE_METADATA.siteUrl,
    logo: `${SITE_METADATA.siteUrl}/logo-colfgas.png`,
    description: COMPANY_INFO.slogan,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Calle 90 Sur # 4F-33 Este',
      addressLocality: 'Bogotá D.C.',
      addressRegion: 'Cundinamarca',
      addressCountry: 'CO',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '4.60971',
      longitude: '-74.08175',
    },
    telephone: COMPANY_INFO.phoneValue,
    sameAs: [COMPANY_INFO.socialMedia.facebook],
    award: COMPANY_INFO.vantiCertification,
    priceRange: '$$',
    areaServed: [
      {
        '@type': 'AdministrativeArea',
        name: 'Bogotá D.C.',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Cundinamarca',
      },
      {
        '@type': 'Country',
        name: 'Colombia',
      },
    ],
    knowsAbout: [
      'Redes de gas natural',
      'Instalaciones de gas residencial',
      'Gas industrial',
      'Estaciones de regulación y medición de gas',
      'Pruebas de hermeticidad',
      'Obras de ingeniería civil',
      'Sistemas de distribución de gas combustible',
      'Seguridad y control de fugas',
    ],
  };
}

export function getBreadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${SITE_METADATA.siteUrl}${item.url}`,
    })),
  };
}

export function getServiceJsonLd(service: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.name,
    description: service.description,
    provider: {
      '@type': 'GeneralContractor',
      name: COMPANY_INFO.legalName,
      url: SITE_METADATA.siteUrl,
    },
    areaServed: {
      '@type': 'Country',
      name: 'Colombia',
    },
    url: service.url.startsWith('http') ? service.url : `${SITE_METADATA.siteUrl}${service.url}`,
  };
}
