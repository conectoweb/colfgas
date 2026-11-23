import type { Metadata, Viewport } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { COMPANY_INFO, SITE_METADATA } from '@/lib/constants';
import { getOrganizationJsonLd } from '@/lib/seo';

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-manrope',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_METADATA.siteUrl),
  title: {
    default: SITE_METADATA.defaultTitle,
    template: SITE_METADATA.titleTemplate,
  },
  description: SITE_METADATA.defaultDescription,
  applicationName: COMPANY_INFO.legalName,
  authors: [{ name: COMPANY_INFO.legalName, url: SITE_METADATA.siteUrl }],
  generator: 'Next.js',
  keywords: [
    'COLFGAS',
    'COLFGAS CONSTRUCCIONES SAS',
    'empresa certificada por vanti',
    'redes de gas natural',
    'construccion de redes de gas',
    'instalacion de redes de gas',
    'mantenimiento de redes de gas',
    'instalaciones de gas residencial',
    'gas industrial colombia',
    'acometidas de gas',
    'pruebas de hermeticidad gas',
    'ingenieria de gas bogota',
    'NTC 2505',
    'NTC 3838',
  ],
  creator: COMPANY_INFO.legalName,
  publisher: COMPANY_INFO.legalName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/logos/llama-azul.png', type: 'image/png' },
      { url: '/favicon.ico' },
    ],
    shortcut: ['/logos/llama-azul.png'],
    apple: [
      { url: '/logos/llama-azul.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    type: 'website',
    locale: SITE_METADATA.locale,
    url: SITE_METADATA.siteUrl,
    siteName: SITE_METADATA.siteName,
    title: SITE_METADATA.defaultTitle,
    description: SITE_METADATA.defaultDescription,
    images: [
      {
        url: '/logos/logo-colfgas.png',
        width: 1200,
        height: 630,
        alt: 'COLFGAS CONSTRUCCIONES S.A.S.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_METADATA.defaultTitle,
    description: SITE_METADATA.defaultDescription,
    images: ['/logos/logo-colfgas.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0066B3',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgJsonLd = getOrganizationJsonLd();

  return (
    <html lang="es-CO" className={`${manrope.variable} scroll-smooth`}>
      <head>
        <link rel="icon" type="image/png" href="/logos/llama-azul.png" />
        <link rel="shortcut icon" href="/logos/llama-azul.png" />
        <link rel="apple-touch-icon" href="/logos/llama-azul.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </head>
      <body className="font-sans min-h-screen flex flex-col bg-white text-[#263238] antialiased selection:bg-[#007afd]/20 selection:text-[#0066B3]">
        {/* Skip to Main Content Link for Keyboard / Screen Reader Accessibility */}
        <a href="#main-content" className="skip-link">
          Saltar al contenido principal
        </a>

        {/* Global Navigation Header */}
        <Navbar />

        {/* Main Content Landmark */}
        <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none">
          {children}
        </main>

        {/* Global Footer */}
        <Footer />
      </body>
    </html>
  );
}
