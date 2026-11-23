'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { PROJECTS_GALLERY } from '@/lib/constants';
import { ProjectCard } from '@/components/ProjectCard';
import { getBreadcrumbJsonLd } from '@/lib/seo';
import { Camera, Filter, ArrowRight } from 'lucide-react';

export default function ProyectosPage() {
  const [activeCategory, setActiveCategory] = useState<string>('Todos');

  const categories = ['Todos', 'Residencial', 'Industrial', 'Comercial', 'Obra Civil'];

  const filteredProjects =
    activeCategory === 'Todos'
      ? PROJECTS_GALLERY
      : PROJECTS_GALLERY.filter((p) => p.category === activeCategory);

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

      {/* Header Banner - Luminous & Modern */}
      <section className="bg-[#F4F7F8] border-b border-slate-200 py-12 sm:py-16 text-[#263238]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-100 text-[#0066B3] border border-sky-200 mb-3">
            Portafolio y Registro Técnico
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-normal text-[#263238] leading-tight">
            Proyectos y Experiencia en Obra
          </h1>
          <p className="mt-3 text-base sm:text-lg text-[#5B6570] max-w-3xl leading-relaxed">
            Fichas técnicas de proyectos en los sectores habitacional, comercial, industrial y de infraestructura civil.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Transparency & Image Authorization Notice */}
          <div className="mb-12 p-6 rounded-3xl bg-amber-50/90 border border-amber-300/80 text-amber-950">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Camera className="w-6 h-6" aria-hidden="true" />
              </div>
              <div className="text-xs sm:text-sm space-y-2">
                <h2 className="text-base font-bold text-amber-900">
                  Aviso de Transparencia de Imágenes y Datos de Obras
                </h2>
                <p className="leading-relaxed text-amber-900/90">
                  En cumplimiento de las directrices éticas y legales, <strong>COLFGAS CONSTRUCCIONES S.A.S. no exhibe imágenes de proyectos de terceros ni fotografías sin expresa autorización</strong>.
                </p>
                <p className="leading-relaxed text-amber-900/90">
                  Las tarjetas que se presentan a continuación son <strong>espacios claramente identificados</strong> para alojar las fotografías reales de las obras de COLFGAS una vez el cliente formalice la entrega del material o autorice el uso de las fotografías de su página de Facebook (<em>facebook.com/p/Colfgas-Construcciones-SAS-100066587345532/</em>).
                </p>
              </div>
            </div>
          </div>

          {/* Interactive Category Filter */}
          <div className="mb-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            <span className="text-xs font-bold text-[#5B6570] uppercase tracking-wider mr-2 hidden sm:inline-flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" aria-hidden="true" />
              Filtrar por:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-[#0066B3] ${
                  activeCategory === cat
                    ? 'bg-[#0066B3] text-white shadow-sm'
                    : 'bg-slate-100 text-[#263238] hover:bg-slate-200'
                }`}
                aria-pressed={activeCategory === cat}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* Client Instruction Box */}
          <div className="mt-16 p-8 rounded-3xl bg-[#F4F7F8] border border-slate-200 text-center max-w-3xl mx-auto">
            <h3 className="text-lg font-bold text-[#263238]">
              ¿Deseas Agregar o Modificar las Obras de tu Portafolio?
            </h3>
            <p className="text-xs sm:text-sm text-[#5B6570] mt-2 leading-relaxed">
              El código está preparado para vincular directamente las fotografías reales optimizadas en formato WebP/JPG en la carpeta <code>/public/proyectos/</code> asociadas a cada ficha técnica.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#0066B3] hover:bg-[#005291] shadow-sm transition-colors"
              >
                <span>Cotizar Proyecto Similar</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
