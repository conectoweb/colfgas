import { COMPANY_INFO, SITE_METADATA } from './constants';

/**
 * Datos estructurados oficiales para la Página de Inicio (Home)
 * Incluye esquemas válidos para Organization y WebSite en un solo grafo (@graph).
 * Utiliza estrictamente datos confirmados del proyecto:
 * Nombre, dominio canónico, teléfono, logo oficial y perfil social.
 * NO incluye NIT, certificaciones en awards ni datos no confirmados.
 */
export function getHomeStructuredData() {
  const baseUrl = SITE_METADATA.siteUrl;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${baseUrl}/#organization`,
        name: COMPANY_INFO.legalName,
        alternateName: COMPANY_INFO.tradeName,
        url: `${baseUrl}/`,
        logo: `${baseUrl}/logos/logo-colfgas.png`,
        telephone: COMPANY_INFO.phoneValue,
        address: {
          '@type': 'PostalAddress',
          streetAddress: COMPANY_INFO.address,
          addressLocality: 'Bogotá D.C.',
          addressRegion: 'Cundinamarca',
          addressCountry: 'CO',
        },
        sameAs: [COMPANY_INFO.socialMedia.facebook],
      },
      {
        '@type': 'WebSite',
        '@id': `${baseUrl}/#website`,
        name: COMPANY_INFO.legalName,
        url: `${baseUrl}/`,
        publisher: {
          '@id': `${baseUrl}/#organization`,
        },
        inLanguage: 'es-CO',
      },
    ],
  };
}

/**
 * Genera el esquema BreadcrumbList para páginas internas.
 * Se aplica en páginas donde existen migas de pan visibles y útiles.
 */
export function getBreadcrumbJsonLd(items: { name: string; url: string }[]) {
  const baseUrl = SITE_METADATA.siteUrl;

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => {
      const formattedUrl = item.url.startsWith('http')
        ? item.url
        : `${baseUrl}${item.url.startsWith('/') ? '' : '/'}${item.url}${item.url !== '/' && !item.url.endsWith('/') ? '/' : ''}`;

      return {
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: formattedUrl,
      };
    }),
  };
}
