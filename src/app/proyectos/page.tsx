import type { Metadata } from 'next';
import Link from 'next/link';
import { getBreadcrumbJsonLd } from '@/lib/seo';
import { ProjectsClient } from '@/components/ProjectsClient';

export const metadata: Metadata = {
  title: 'Proyectos y Fichas Técnicas de Obra | COLFGAS CONSTRUCCIONES S.A.S.',
  description:
    'Registro técnico y tipología de proyectos de redes de gas para los sectores residencial, multifamiliar e industrial de COLFGAS CONSTRUCCIONES S.A.S. Empresa certificada por Vanti.',
  alternates: {
    canonical: '/proyectos',
  },
};

export default function ProyectosPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: 'Inicio', url: '/' },
    { name: 'Proyectos', url: '/proyectos' },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Header Banner */}
      <section className="bg-gradient-to-b from-[#F4F7F8] via-white to-[#F4F7F8] border-b border-slate-200 py-12 sm:py-16 text-[#263238]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <nav aria-label="Breadcrumb" className="mb-3">
            <ol className="flex items-center justify-center sm:justify-start gap-2 text-xs text-[#5B6570]">
              <li>
                <Link href="/" className="hover:text-[#0066B3] transition-colors">
                  Inicio
                </Link>
              </li>
              <li>/</li>
              <li className="font-semibold text-[#0066B3]">Proyectos</li>
            </ol>
          </nav>

          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-100 text-[#0066B3] border border-sky-200 mb-3">
            Portafolio y Registro Técnico
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-normal text-[#263238] leading-tight">
            Proyectos y Experiencia en Obra
          </h1>
          <p className="mt-3 text-base sm:text-lg text-[#5B6570] max-w-3xl leading-relaxed">
            Fichas técnicas y tipologías de proyectos en los sectores habitacional, comercial, industrial y de infraestructura civil desarrollados bajo supervisión técnica y normativa colombiana.
          </p>
        </div>
      </section>

      {/* Main Content (Interactive filter & cards) */}
      <section className="py-16 sm:py-20 bg-white">
        <ProjectsClient />
      </section>
    </>
  );
}
