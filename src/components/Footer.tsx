import React from 'react';
import Link from 'next/link';
import { Logo } from './Logo';
import { COMPANY_INFO, NAV_LINKS, SERVICES_CATALOG } from '@/lib/constants';
import { Phone, MessageCircle, MapPin, CheckCircle2, ExternalLink } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#263238] text-slate-300 border-t-4 border-[#0066B3]">
      {/* Top Banner: Enfoque Residencial e Industrial y Vanti */}
      <div className="bg-[#1A2327] py-6 px-4 border-b border-slate-700/60">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-[#43BE24] flex-shrink-0">
              <CheckCircle2 className="w-6 h-6" aria-hidden="true" />
            </div>
            <div>
              <p className="text-white font-bold text-sm sm:text-base flex items-center gap-2">
                <span>{COMPANY_INFO.vantiCertification}</span>
                <span className="text-xs font-normal text-emerald-400">| Redes Fijas de Gas</span>
              </p>
              <p className="text-xs text-slate-400 mt-0.5">
                Construcción, instalación y mantenimiento para edificaciones residenciales e industriales. No prestamos servicios para gas vehicular (GNCV) ni automotores.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 flex-shrink-0">
            <a
              href={COMPANY_INFO.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold text-[#263238] bg-[#43BE24] hover:bg-[#37A51D] transition-colors shadow-sm"
              aria-label="Escribir por WhatsApp a COLFGAS"
            >
              <MessageCircle className="w-4 h-4 text-[#263238]" aria-hidden="true" />
              <span>Escribir por WhatsApp</span>
            </a>

            <a
              href={COMPANY_INFO.phoneCallUrl}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-600 transition-colors"
              aria-label={`Llamar al ${COMPANY_INFO.phoneDisplay}`}
            >
              <Phone className="w-3.5 h-3.5 text-sky-400" aria-hidden="true" />
              <span>Llamar: {COMPANY_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1: Brand & Identity */}
          <div className="space-y-4">
            <Link
              href="#inicio"
              className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066B3] rounded-xl transition-opacity hover:opacity-95"
              aria-label="Ir al inicio de COLFGAS CONSTRUCCIONES S.A.S."
            >
              <Logo variant="light" />
            </Link>
            <p className="text-xs text-slate-300 leading-relaxed">
              {COMPANY_INFO.missionStatement}
            </p>
            <div className="pt-2 text-[11px] text-slate-400">
              <span className="font-semibold text-slate-300">NIT: </span>
              <span className="font-mono">{COMPANY_INFO.nit}</span>
            </div>
            {COMPANY_INFO.socialMedia.facebook && (
              <div className="pt-1">
                <a
                  href={COMPANY_INFO.socialMedia.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-white transition-colors"
                >
                  <span>Página de Facebook de COLFGAS</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" aria-hidden="true" />
                </a>
              </div>
            )}
          </div>

          {/* Column 2: Servicios */}
          <div>
            <h3 className="text-white font-bold text-sm tracking-wider uppercase mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#43BE24]"></span>
              Servicios de Gas
            </h3>
            <ul className="space-y-2 text-xs">
              {SERVICES_CATALOG.map((service) => (
                <li key={service.id}>
                  <a
                    href="#servicios"
                    className="hover:text-white transition-colors block py-0.5"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
              <li className="pt-2 border-t border-slate-700/80">
                <a href="#soluciones" className="hover:text-white transition-colors block py-0.5 text-emerald-400">
                  Soluciones Residenciales
                </a>
              </li>
              <li>
                <a href="#soluciones" className="hover:text-white transition-colors block py-0.5 text-emerald-400">
                  Soluciones Industriales
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Navegación de la Landing */}
          <div>
            <h3 className="text-white font-bold text-sm tracking-wider uppercase mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#007afd]"></span>
              Secciones
            </h3>
            <ul className="space-y-2 text-xs">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-white transition-colors block py-0.5">
                    {link.name}
                  </a>
                </li>
              ))}
              <li className="pt-2 border-t border-slate-700/80">
                <Link
                  href="/politica-de-privacidad"
                  className="hover:text-white transition-colors block py-0.5 text-slate-400"
                >
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link
                  href="/terminos-y-condiciones"
                  className="hover:text-white transition-colors block py-0.5 text-slate-400"
                >
                  Términos y Condiciones
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contacto Oficial (Confirmado) */}
          <div>
            <h3 className="text-white font-bold text-sm tracking-wider uppercase mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              Contacto Oficial
            </h3>
            <div className="space-y-3.5 text-xs">
              <div>
                <p className="text-slate-400 font-semibold mb-1 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#43BE24]" aria-hidden="true" />
                  <span>Teléfono y WhatsApp:</span>
                </p>
                <div className="space-y-1">
                  <a
                    href={COMPANY_INFO.phoneCallUrl}
                    className="font-bold text-white hover:text-[#43BE24] transition-colors block"
                  >
                    {COMPANY_INFO.phoneDisplay}
                  </a>
                  <a
                    href={COMPANY_INFO.whatsapp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300"
                  >
                    <span>Escribir por WhatsApp</span>
                    <ExternalLink className="w-3 h-3" aria-hidden="true" />
                  </a>
                </div>
              </div>

              <div>
                <p className="text-slate-400 font-semibold mb-1 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-sky-400" aria-hidden="true" />
                  <span>Dirección Confirmada:</span>
                </p>
                <p className="text-white font-medium">{COMPANY_INFO.address}</p>
                <a
                  href={COMPANY_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-sky-300 hover:text-white mt-1 underline"
                >
                  <span>Ver en Google Maps</span>
                  <ExternalLink className="w-3 h-3" aria-hidden="true" />
                </a>
              </div>

              <div>
                <p className="text-slate-400 font-semibold mb-1">Certificación:</p>
                <span className="inline-block px-2.5 py-1 rounded-md bg-emerald-950 text-emerald-300 border border-emerald-800 text-[11px] font-semibold">
                  {COMPANY_INFO.vantiCertification}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="mt-12 pt-6 border-t border-slate-700/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {currentYear} {COMPANY_INFO.legalName}. {COMPANY_INFO.vantiCertification}.
          </p>
          <p className="text-center md:text-right text-[11px] text-slate-400">
            Redes de Gas para Construcciones Residenciales e Industriales • Normas NTC 2505 y NTC 3838
          </p>
        </div>
      </div>
    </footer>
  );
}
