'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PROJECTS_GALLERY, COMPANY_INFO } from '@/lib/constants';
import { GALLERY_PHOTOS, GalleryPhoto, CATEGORY_LABELS } from '@/lib/galleryData';
import { ProjectCard } from '@/components/ProjectCard';
import {
  Camera,
  Filter,
  ArrowRight,
  MessageCircle,
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  ShieldCheck,
  Tag,
  Info,
} from 'lucide-react';

export function ProjectsClient() {
  // Filter for tipology cards
  const [activeTipology, setActiveTipology] = useState<string>('Todos');
  const tipologyCategories = ['Todos', 'Residencial', 'Industrial'];

  const filteredProjects =
    activeTipology === 'Todos'
      ? PROJECTS_GALLERY
      : PROJECTS_GALLERY.filter((p) => p.category === activeTipology);

  // Filter for full photo gallery
  const [activeGalleryCategory, setActiveGalleryCategory] = useState<string>('todas');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);

  const galleryFilterOptions: { key: string; label: string }[] = [
    { key: 'todas', label: `Todas (${GALLERY_PHOTOS.length})` },
    {
      key: 'medidores',
      label: `Medidores (${GALLERY_PHOTOS.filter((p) => p.category === 'medidores').length})`,
    },
    {
      key: 'tuberias',
      label: `Tuberías (${GALLERY_PHOTOS.filter((p) => p.category === 'tuberias').length})`,
    },
    {
      key: 'mantenimiento',
      label: `Mantenimiento (${GALLERY_PHOTOS.filter((p) => p.category === 'mantenimiento').length})`,
    },
    {
      key: 'equipos',
      label: `Puntos y Equipos (${GALLERY_PHOTOS.filter((p) => p.category === 'equipos').length})`,
    },
    {
      key: 'general',
      label: `Obras Civiles (${GALLERY_PHOTOS.filter((p) => p.category === 'general').length})`,
    },
  ];

  const filteredPhotos =
    activeGalleryCategory === 'todas'
      ? GALLERY_PHOTOS
      : GALLERY_PHOTOS.filter((p) => p.category === activeGalleryCategory);

  // Modal navigation helpers
  const handleNextPhoto = useCallback(() => {
    if (!selectedPhoto) return;
    const currentIndex = filteredPhotos.findIndex((p) => p.id === selectedPhoto.id);
    const nextIndex = (currentIndex + 1) % filteredPhotos.length;
    setSelectedPhoto(filteredPhotos[nextIndex]);
  }, [selectedPhoto, filteredPhotos]);

  const handlePrevPhoto = useCallback(() => {
    if (!selectedPhoto) return;
    const currentIndex = filteredPhotos.findIndex((p) => p.id === selectedPhoto.id);
    const prevIndex = (currentIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
    setSelectedPhoto(filteredPhotos[prevIndex]);
  }, [selectedPhoto, filteredPhotos]);

  // Keyboard navigation for modal
  useEffect(() => {
    if (!selectedPhoto) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedPhoto(null);
      } else if (e.key === 'ArrowRight') {
        handleNextPhoto();
      } else if (e.key === 'ArrowLeft') {
        handlePrevPhoto();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhoto, handleNextPhoto, handlePrevPhoto]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Transparency & Image Authorization Notice */}
      <div className="mb-12 p-6 rounded-3xl bg-amber-50/90 border border-amber-300/80 text-amber-950">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-900 flex items-center justify-center flex-shrink-0 mt-0.5">
            <Camera className="w-6 h-6" aria-hidden="true" />
          </div>
          <div className="text-xs sm:text-sm space-y-2">
            <h2 className="text-base font-bold text-amber-900">
              Aviso de Transparencia de Imágenes y Registro Fotográfico de Obras
            </h2>
            <p className="leading-relaxed text-amber-900/90">
              En estricto cumplimiento de directrices éticas y legales,{' '}
              <strong>
                COLFGAS CONSTRUCCIONES S.A.S. no exhibe imágenes de proyectos de terceros ni fotografías de archivo
                haciéndolas pasar por obras de la empresa
              </strong>
              .
            </p>
            <p className="leading-relaxed text-amber-900/90">
              Las <strong>46 fotografías documentales</strong> presentadas a continuación corresponden al banco de
              registros técnicos de obra de instalaciones de gas (baterías de medición, tuberías soldadas, montantes
              verticales, gabinetes, manómetros y válvulas de corte) conforme a las normas técnicas colombianas (NTC 2505,
              NTC 4282, NTC 3838) y lineamientos de Vanti.
            </p>
          </div>
        </div>
      </div>

      {/* SECTION 1: TIPOLOGÍAS DE PROYECTOS */}
      <section className="mb-20">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#0066B3]/10 text-[#0066B3] mb-3">
            Tipologías Técnicas
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#263238] tracking-tight">
            Esquemas y Soluciones Representativas
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#5B6570]">
            Fichas técnicas de proyectos para unidades residenciales multifamiliares e instalaciones industriales.
          </p>
        </div>

        {/* Tipology Category Filter */}
        <div className="mb-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          <span className="text-xs font-bold text-[#5B6570] uppercase tracking-wider mr-2 hidden sm:inline-flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" aria-hidden="true" />
            Filtrar:
          </span>
          {tipologyCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveTipology(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-[#0066B3] ${
                activeTipology === cat
                  ? 'bg-[#0066B3] text-white shadow-sm'
                  : 'bg-slate-100 text-[#263238] hover:bg-slate-200'
              }`}
              aria-pressed={activeTipology === cat}
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
      </section>

      {/* SECTION 2: GALERÍA TÉCNICA DOCUMENTAL COMPLETA */}
      <section className="pt-8 border-t border-slate-200" id="galeria-tecnica">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#43BE24]/15 text-[#287A1C] mb-3">
            <Camera className="w-3.5 h-3.5" aria-hidden="true" />
            Catálogo Visual
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#263238] tracking-tight">
            Galería Fotográfica Técnica de Redes e Instalaciones
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#5B6570]">
            Explora las 46 fotografías de elementos de obra: baterías centralizadas de medición, tuberías matrices en
            acero y cobre, montantes verticales, gabinetes técnicos y pruebas de hermeticidad.
          </p>
        </div>

        {/* Gallery Category Filter Tabs */}
        <div className="mb-10 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
          {galleryFilterOptions.map((opt) => (
            <button
              key={opt.key}
              type="button"
              onClick={() => setActiveGalleryCategory(opt.key)}
              className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-[#0066B3] ${
                activeGalleryCategory === opt.key
                  ? 'bg-[#0066B3] text-white shadow-sm'
                  : 'bg-slate-100 text-[#263238] hover:bg-slate-200'
              }`}
              aria-pressed={activeGalleryCategory === opt.key}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Photo Count and Legend */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3 text-xs text-[#5B6570]">
          <div>
            Mostrando <strong>{filteredPhotos.length}</strong> fotografías
            {activeGalleryCategory !== 'todas' && (
              <span> en la categoría <strong>{CATEGORY_LABELS[activeGalleryCategory as GalleryPhoto['category']]}</strong></span>
            )}
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#43BE24]" aria-hidden="true" />
            <span>Haz clic en cualquier imagen para ampliar detalles técnicos</span>
          </div>
        </div>

        {/* Full Interactive Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredPhotos.map((photo) => (
            <button
              key={photo.id}
              type="button"
              onClick={() => setSelectedPhoto(photo)}
              className="group text-left rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-[#0066B3]/40 overflow-hidden flex flex-col transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#0066B3]"
              aria-label={`Ver detalle de fotografía técnica: ${photo.title}`}
            >
              <div className="relative aspect-[4/3] w-full bg-slate-900 overflow-hidden">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Badges on card */}
                <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between gap-1 z-10">
                  <span className="px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md text-white border border-white/20">
                    {photo.categoryLabel}
                  </span>
                  <span className="p-1.5 rounded-lg bg-black/50 backdrop-blur-md text-white group-hover:bg-[#0066B3] transition-colors">
                    <Maximize2 className="w-3 h-3" aria-hidden="true" />
                  </span>
                </div>

                {photo.normativa && (
                  <div className="absolute bottom-2.5 right-2.5 z-10 text-[10px] font-semibold text-emerald-300 bg-black/60 px-2 py-0.5 rounded backdrop-blur-md border border-emerald-400/30">
                    {photo.normativa}
                  </div>
                )}
              </div>

              <div className="p-3.5 flex flex-col justify-between flex-1">
                <h3 className="text-xs sm:text-sm font-bold text-[#263238] group-hover:text-[#0066B3] line-clamp-1 transition-colors">
                  {photo.title}
                </h3>
                <p className="mt-1 text-[11px] text-[#5B6570] line-clamp-2 leading-snug">
                  {photo.caption}
                </p>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/85 backdrop-blur-sm transition-opacity"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative w-full max-w-4xl rounded-3xl bg-white shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="px-5 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-[#0066B3] text-white">
                  {selectedPhoto.categoryLabel}
                </span>
                {selectedPhoto.normativa && (
                  <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-emerald-100 text-[#287A1C] border border-emerald-200 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>{selectedPhoto.normativa}</span>
                  </span>
                )}
              </div>
              <button
                type="button"
                onClick={() => setSelectedPhoto(null)}
                className="p-2 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-[#0066B3]"
                aria-label="Cerrar vista de fotografía"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image Area */}
            <div className="relative bg-slate-950 flex items-center justify-center aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden">
              <Image
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 900px"
                className="object-contain"
                priority
              />

              {/* Prev / Next Buttons */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrevPhoto();
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white transition-all backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="Fotografía anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleNextPhoto();
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white transition-all backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="Fotografía siguiente"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Description & Info */}
            <div className="p-5 sm:p-6 overflow-y-auto space-y-3 bg-white">
              <h3 id="modal-title" className="text-lg sm:text-xl font-bold text-[#263238]">
                {selectedPhoto.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#5B6570] leading-relaxed">
                {selectedPhoto.caption}
              </p>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-2.5 text-xs text-[#5B6570]">
                <Info className="w-4 h-4 text-[#0066B3] flex-shrink-0 mt-0.5" aria-hidden="true" />
                <p>
                  <strong>Registro técnico documental:</strong> Fotografía tomada en obra para control de calidad,
                  registro de trazado de tuberías e inspección de centros de medición bajo estándares de Vanti.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Client CTA Box */}
      <div className="mt-16 p-8 rounded-3xl bg-[#F4F7F8] border border-slate-200 text-center max-w-3xl mx-auto space-y-4">
        <h3 className="text-xl font-bold text-[#263238]">
          ¿Deseas cotizar una obra similar para tu proyecto habitacional o industrial?
        </h3>
        <p className="text-xs sm:text-sm text-[#5B6570] leading-relaxed">
          Nuestros ingenieros analizan tus planos arquitectónicos e hidráulicos para entregarte una propuesta técnica y
          económica conforme a la normativa colombiana y especificaciones de Vanti.
        </p>
        <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#0066B3] hover:bg-[#005291] shadow-sm transition-all"
          >
            <span>Ir a Contáctanos / Cotizar</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </Link>
          <a
            href={COMPANY_INFO.whatsapp.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-[#263238] bg-[#43BE24] hover:bg-[#37A51D] shadow-sm transition-all"
          >
            <MessageCircle className="w-4 h-4 text-[#263238]" aria-hidden="true" />
            <span>Consultar por WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
