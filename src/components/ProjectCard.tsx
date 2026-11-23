import React from 'react';
import { ProjectItem } from '@/lib/constants';
import { MapPin, Layers, Camera } from 'lucide-react';
import { ClientConfirmationBadge } from './ClientConfirmationBadge';

interface ProjectCardProps {
  project: ProjectItem;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col justify-between">
      <div>
        {/* Placeholder Image Space with High-Quality Engineering Blueprint Graphic */}
        <div className="relative aspect-[16/10] bg-gradient-to-br from-[#263238] via-[#1E293B] to-[#334155] p-6 flex flex-col justify-between text-white overflow-hidden">
          {/* Subtle Grid overlay representing engineering blueprints */}
          <div
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage:
                'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
            aria-hidden="true"
          />

          {/* Top badges */}
          <div className="relative z-10 flex items-center justify-between gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/20 backdrop-blur-md text-white border border-white/30">
              {project.category}
            </span>
            <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-amber-400 text-slate-900 shadow-sm flex items-center gap-1">
              <Camera className="w-3 h-3" aria-hidden="true" />
              <span>Espacio para Foto Real</span>
            </span>
          </div>

          {/* Center Graphic */}
          <div className="relative z-10 text-center my-auto py-4">
            <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
              <Layers className="w-6 h-6 text-[#43BE24]" aria-hidden="true" />
            </div>
            <p className="text-xs uppercase tracking-wider text-slate-200 font-bold">
              Registro Técnico de Obra
            </p>
            <p className="text-[11px] text-slate-300 mt-1 max-w-xs mx-auto">
              Fotografía autorizada pendiente de asignación por el cliente
            </p>
          </div>

          {/* Bottom sector label */}
          <div className="relative z-10 text-xs font-medium text-slate-300">
            {project.sectorLabel}
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6">
          <h3 className="text-lg font-bold text-[#263238] leading-snug mb-2">
            {project.title}
          </h3>

          <div className="flex items-center gap-1.5 text-xs text-[#5B6570] mb-3">
            <MapPin className="w-3.5 h-3.5 text-[#0066B3] flex-shrink-0" aria-hidden="true" />
            <span className="font-medium text-[#263238]">{project.location}</span>
          </div>

          <p className="text-xs sm:text-sm text-[#5B6570] leading-relaxed mb-4">
            {project.description}
          </p>

          <div className="p-3 rounded-lg bg-slate-50 border border-slate-100 text-xs text-[#5B6570]">
            <span className="font-bold text-[#263238] block mb-0.5">Alcance de la Obra:</span>
            <span>{project.scope}</span>
          </div>
        </div>
      </div>

      {/* Confirmation Footer */}
      <div className="px-6 py-3 bg-amber-50/70 border-t border-amber-200/80">
        <ClientConfirmationBadge
          label="Datos y fotos sujetos a validación del cliente"
          tooltip={project.confirmationDetails}
          className="w-full justify-center"
        />
      </div>
    </article>
  );
}
