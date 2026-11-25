import React from 'react';
import Link from 'next/link';
import { Logo } from './Logo';
import { COMPANY_INFO, NAV_LINKS, SERVICE_SUB_LINKS } from '@/lib/constants';
import { MapPin, ExternalLink, ShieldCheck, ArrowRight, Facebook } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#263238] text-slate-300 border-t-4 border-[#0066B3]">
      {/* Top Banner: Enfoque Residencial e Industrial y Canales Directos */}
      <div className="bg-[#1A2327] py-6 px-4 border-b border-slate-700/60">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-sky-500/10 flex items-center justify-center text-[#007afd] flex-shrink-0">
              <ShieldCheck className="w-6 h-6" aria-hidden="true" />
            </div>
            <div>
              <p className="text-white font-bold text-sm sm:text-base flex items-center gap-2">
                <span>COLFGAS CONSTRUCCIONES S.A.S.</span>
                <span className="text-xs font-normal text-sky-400">| Redes Fijas de Gas</span>
              </p>
              <p className="text-xs text-slate-400 mt-0.5">
                Construcción, instalación y mantenimiento para edificaciones residenciales e industriales. No prestamos servicios para gas vehicular (GNCV) ni automotores.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 flex-shrink-0">
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold text-white bg-[#0066B3] hover:bg-[#005291] transition-colors shadow-sm"
              aria-label="Ir a la página de Contáctanos"
            >
              <span>Ir a Contáctanos / Cotizar</span>
              <ArrowRight className="w-4 h-4 text-white" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1: Brand & Identity (Sin NIT) */}
          <div className="space-y-4">
            <Link
              href="/"
              className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066B3] rounded-xl transition-opacity hover:opacity-95"
              aria-label="Ir al inicio de COLFGAS CONSTRUCCIONES S.A.S."
            >
              <Logo variant="light" />
            </Link>
            <p className="text-xs text-slate-300 leading-relaxed">
              {COMPANY_INFO.missionStatement}
            </p>
            {COMPANY_INFO.socialMedia.facebook && (
              <div className="pt-2">
                <a
                  href={COMPANY_INFO.socialMedia.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-slate-800/90 hover:bg-[#1877F2] text-slate-300 hover:text-white border border-slate-700/80 inline-flex items-center justify-center transition-all shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007afd] group"
                  aria-label="Página de Facebook de COLFGAS CONSTRUCCIONES S.A.S."
                  title="Facebook de COLFGAS"
                >
                  <Facebook className="w-5 h-5 transition-transform group-hover:scale-110" aria-hidden="true" />
                </a>
              </div>
            )}
          </div>

          {/* Column 2: Servicios de Gas */}
          <div>
            <h3 className="text-white font-bold text-sm tracking-wider uppercase mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#43BE24]"></span>
              Servicios Especializados
            </h3>
            <ul className="space-y-2 text-xs">
              {SERVICE_SUB_LINKS.map((sub) => (
                <li key={sub.name}>
                  <Link
                    href={sub.href}
                    className={`hover:text-white transition-colors block py-0.5 ${
                      sub.href === '/servicios'
                        ? 'font-semibold text-slate-200'
                        : 'text-slate-300'
                    }`}
                  >
                    {sub.name}
                  </Link>
                </li>
              ))}
              <li className="pt-2 border-t border-slate-700/80">
                <Link
                  href="/servicios/gas-residencial"
                  className="hover:text-white transition-colors block py-0.5 text-emerald-400"
                >
                  Redes para Edificios Multifamiliares
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios/gas-industrial"
                  className="hover:text-white transition-colors block py-0.5 text-emerald-400"
                >
                  Líneas Industriales y Estaciones ERM
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Navegación del Sitio */}
          <div>
            <h3 className="text-white font-bold text-sm tracking-wider uppercase mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#007afd]"></span>
              Páginas del Sitio
            </h3>
            <ul className="space-y-2 text-xs">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-white transition-colors block py-0.5">
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/preguntas-frecuentes" className="hover:text-white transition-colors block py-0.5 text-slate-300">
                  Preguntas Frecuentes
                </Link>
              </li>
              <li>
                <Link href="/mapa-del-sitio" className="hover:text-white transition-colors block py-0.5 text-slate-300">
                  Mapa del Sitio
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-white transition-colors block py-0.5 text-slate-300">
                  Contacto
                </Link>
              </li>
              <li className="pt-2 border-t border-slate-700/80">
                <Link
                  href="/politica-de-privacidad"
                  className="hover:text-white transition-colors block py-0.5 text-slate-400"
                >
                  Política de Privacidad
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contacto Oficial */}
          <div>
            <h3 className="text-white font-bold text-sm tracking-wider uppercase mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              Atención y Asesoría
            </h3>
            <div className="space-y-4 text-xs">
              <div>
                <p className="text-slate-300 leading-relaxed mb-3">
                  Para cotizaciones, visitas técnicas y asesoría especializada en redes de gas para vivienda e industria, visita nuestra sección de contacto.
                </p>
                <Link
                  href="/contacto"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold text-white bg-[#0066B3] hover:bg-[#005291] transition-colors"
                >
                  <span>Ir a Contáctanos</span>
                  <ArrowRight className="w-3.5 h-3.5 text-white" aria-hidden="true" />
                </Link>
              </div>

              <div className="pt-2 border-t border-slate-700/60">
                <p className="text-slate-400 font-semibold mb-1 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-sky-400" aria-hidden="true" />
                  <span>Sede Principal en Bogotá:</span>
                </p>
                <p className="text-slate-200 leading-snug">
                  {COMPANY_INFO.address}
                </p>
                <a
                  href={COMPANY_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] text-sky-400 hover:text-sky-300 mt-1 transition-colors"
                >
                  <span>Abrir en Google Maps</span>
                  <ExternalLink className="w-3 h-3" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright and Legal Bar */}
        <div className="mt-12 pt-8 border-t border-slate-700/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {currentYear} {COMPANY_INFO.legalName}. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4 text-[11px]">
            <Link href="/politica-de-privacidad" className="hover:text-slate-200 transition-colors">
              Política de Tratamiento de Datos (Ley 1581)
            </Link>
            <span className="text-slate-600">|</span>
            <Link href="/contacto" className="hover:text-slate-200 transition-colors">
              Contáctanos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}