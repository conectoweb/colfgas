'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from './Logo';
import { COMPANY_INFO, NAV_LINKS, SERVICE_SUB_LINKS, ABOUT_SUB_LINKS } from '@/lib/constants';
import {
  MessageCircle,
  Menu,
  X,
  ChevronDown,
  Building2,
  Factory,
  Wrench,
  ArrowRight,
  HelpCircle,
  Users,
  Network,
} from 'lucide-react';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const pathname = usePathname();
  const servicesDropdownRef = useRef<HTMLDivElement>(null);
  const aboutDropdownRef = useRef<HTMLDivElement>(null);

  // Handle escape key to close menus
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        setServicesDropdownOpen(false);
        setAboutDropdownOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        servicesDropdownRef.current &&
        !servicesDropdownRef.current.contains(e.target as Node)
      ) {
        setServicesDropdownOpen(false);
      }
      if (
        aboutDropdownRef.current &&
        !aboutDropdownRef.current.contains(e.target as Node)
      ) {
        setAboutDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setAboutDropdownOpen(false);
  }, [pathname]);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setAboutDropdownOpen(false);
  };

  const isLinkActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  const getServiceIcon = (name: string) => {
    if (name.includes('Residencial')) return <Building2 className="w-4 h-4 text-[#0066B3]" aria-hidden="true" />;
    if (name.includes('Industrial')) return <Factory className="w-4 h-4 text-[#287A1C]" aria-hidden="true" />;
    return <Wrench className="w-4 h-4 text-[#0066B3]" aria-hidden="true" />;
  };

  const getAboutIcon = (name: string) => {
    if (name.includes('Preguntas')) return <HelpCircle className="w-4 h-4 text-[#0066B3]" aria-hidden="true" />;
    if (name.includes('Mapa')) return <Network className="w-4 h-4 text-[#287A1C]" aria-hidden="true" />;
    return <Users className="w-4 h-4 text-[#0066B3]" aria-hidden="true" />;
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm border-b border-slate-100">
      {/* Top Banner: Información Institucional sin celular ni botón de llamar */}
      <div className="bg-[#F4F7F8] border-b border-slate-200/80 text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 text-[#263238]">
            <span className="font-bold text-[#263238] text-[11px] sm:text-xs">
              COLFGAS CONSTRUCCIONES S.A.S.
            </span>
            <span className="hidden md:inline text-[#5B6570] text-xs">
              • Redes de gas para construcciones residenciales e industriales
            </span>
          </div>
          <span className="hidden sm:inline text-xs text-[#5B6570] font-medium">
            Ingeniería e instalaciones de gas en Colombia
          </span>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              href="/"
              className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066B3] rounded-lg p-1 transition-opacity hover:opacity-95"
              aria-label="Página principal de COLFGAS CONSTRUCCIONES S.A.S."
            >
              <Logo variant="dark" />
            </Link>
          </div>

          {/* Desktop Navigation Links: Inicio, Servicios, Proyectos, Nosotros */}
          <nav
            role="navigation"
            aria-label="Navegación principal del sitio"
            className="hidden lg:flex items-center gap-1 xl:gap-2"
          >
            {NAV_LINKS.map((link) => {
              const active = isLinkActive(link.href);

              // 1. Dropdown Servicios
              if (link.name === 'Servicios') {
                return (
                  <div
                    key={link.name}
                    ref={servicesDropdownRef}
                    className="relative"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <div className="flex items-center">
                      <Link
                        href={link.href}
                        className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066B3] flex items-center gap-1 ${
                          active
                            ? 'text-[#0066B3] bg-sky-50'
                            : 'text-[#263238] hover:text-[#0066B3] hover:bg-slate-50'
                        }`}
                        aria-expanded={servicesDropdownOpen}
                        aria-haspopup="true"
                      >
                        <span>{link.name}</span>
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-150 ${
                            servicesDropdownOpen ? 'rotate-180' : ''
                          }`}
                          aria-hidden="true"
                        />
                      </Link>
                    </div>

                    {/* Services Dropdown Menu */}
                    {servicesDropdownOpen && (
                      <div className="absolute top-full left-0 w-72 pt-2 z-50">
                        <div className="rounded-2xl bg-white border border-slate-200 shadow-xl p-2 animate-in fade-in-50 duration-150">
                          <Link
                            href="/servicios"
                            onClick={handleNavClick}
                            className="p-2.5 rounded-xl block hover:bg-slate-50 transition-colors border-b border-slate-100 mb-1"
                          >
                            <span className="text-xs font-bold text-[#0066B3] uppercase tracking-wider block">
                              Todos los Servicios
                            </span>
                            <span className="text-[11px] text-[#5B6570]">
                              Portafolio integral de redes de gas
                            </span>
                          </Link>

                          {SERVICE_SUB_LINKS.map((sub) => (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              onClick={handleNavClick}
                              className={`p-2.5 rounded-xl flex items-start gap-3 hover:bg-slate-50 transition-colors ${
                                pathname === sub.href ? 'bg-sky-50/70 text-[#0066B3]' : 'text-[#263238]'
                              }`}
                            >
                              <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                {getServiceIcon(sub.name)}
                              </div>
                              <div>
                                <span className="text-xs font-bold block">{sub.name}</span>
                                <span className="text-[11px] text-[#5B6570] block leading-tight">
                                  {sub.description}
                                </span>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              // 2. Dropdown Nosotros (con submenú Mapa del sitio y Preguntas frecuentes)
              if (link.name === 'Nosotros') {
                const isAboutActive =
                  pathname === '/nosotros' ||
                  pathname === '/preguntas-frecuentes' ||
                  pathname === '/mapa-del-sitio';

                return (
                  <div
                    key={link.name}
                    ref={aboutDropdownRef}
                    className="relative"
                    onMouseEnter={() => setAboutDropdownOpen(true)}
                    onMouseLeave={() => setAboutDropdownOpen(false)}
                  >
                    <div className="flex items-center">
                      <Link
                        href={link.href}
                        className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066B3] flex items-center gap-1 ${
                          isAboutActive
                            ? 'text-[#0066B3] bg-sky-50'
                            : 'text-[#263238] hover:text-[#0066B3] hover:bg-slate-50'
                        }`}
                        aria-expanded={aboutDropdownOpen}
                        aria-haspopup="true"
                      >
                        <span>{link.name}</span>
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-150 ${
                            aboutDropdownOpen ? 'rotate-180' : ''
                          }`}
                          aria-hidden="true"
                        />
                      </Link>
                    </div>

                    {/* About Dropdown Menu: Nosotros, Preguntas Frecuentes, Mapa del Sitio */}
                    {aboutDropdownOpen && (
                      <div className="absolute top-full left-0 w-72 pt-2 z-50">
                        <div className="rounded-2xl bg-white border border-slate-200 shadow-xl p-2 animate-in fade-in-50 duration-150">
                          {ABOUT_SUB_LINKS.map((sub) => (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              onClick={handleNavClick}
                              className={`p-2.5 rounded-xl flex items-start gap-3 hover:bg-slate-50 transition-colors ${
                                pathname === sub.href ? 'bg-sky-50/70 text-[#0066B3]' : 'text-[#263238]'
                              }`}
                            >
                              <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                {getAboutIcon(sub.name)}
                              </div>
                              <div>
                                <span className="text-xs font-bold block">{sub.name}</span>
                                <span className="text-[11px] text-[#5B6570] block leading-tight">
                                  {sub.description}
                                </span>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              // 3. Demás enlaces: Inicio, Proyectos
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066B3] ${
                    active
                      ? 'text-[#0066B3] bg-sky-50'
                      : 'text-[#263238] hover:text-[#0066B3] hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Action CTA: Botón visible "Contáctanos" que conduce a la landing de contacto */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white bg-[#0066B3] hover:bg-[#005291] shadow-sm hover:shadow transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066B3]"
              aria-label="Ir a la landing page de Contáctanos"
            >
              <span>Contáctanos</span>
              <ArrowRight className="w-4 h-4 text-white" aria-hidden="true" />
            </Link>
          </div>

          {/* Mobile Actions: Botón "Contáctanos" y botón de menú */}
          <div className="flex items-center lg:hidden gap-2">
            <Link
              href="/contacto"
              className="min-h-[40px] inline-flex items-center gap-1.5 text-xs font-bold px-3.5 py-2 rounded-lg text-white bg-[#0066B3] hover:bg-[#005291] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066B3]"
              aria-label="Ir a la landing page de Contáctanos"
            >
              <span>Contáctanos</span>
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="min-h-[42px] min-w-[42px] p-2 rounded-lg text-[#263238] hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066B3] flex items-center justify-center transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú de navegación'}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          role="navigation"
          aria-label="Navegación móvil del sitio"
          className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 shadow-2xl animate-in slide-in-from-top duration-200"
        >
          <div className="flex flex-col space-y-1">
            {NAV_LINKS.map((link) => {
              const active = isLinkActive(link.href);

              // Submenú Servicios en Móvil
              if (link.name === 'Servicios') {
                return (
                  <div key={link.name} className="space-y-1">
                    <Link
                      href={link.href}
                      onClick={handleNavClick}
                      className={`min-h-[44px] flex items-center justify-between px-3 py-2.5 rounded-lg text-base font-semibold transition-colors ${
                        active ? 'bg-sky-50 text-[#0066B3]' : 'text-[#263238] hover:bg-slate-50'
                      }`}
                    >
                      <span>{link.name}</span>
                      <ArrowRight className="w-4 h-4 text-[#0066B3]" aria-hidden="true" />
                    </Link>

                    {/* Submenu on mobile */}
                    <div className="pl-4 space-y-1 border-l-2 border-slate-100 ml-2">
                      {SERVICE_SUB_LINKS.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          onClick={handleNavClick}
                          className={`min-h-[38px] flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                            pathname === sub.href
                              ? 'text-[#0066B3] bg-sky-50 font-semibold'
                              : 'text-[#5B6570] hover:text-[#263238]'
                          }`}
                        >
                          {getServiceIcon(sub.name)}
                          <span>{sub.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              // Submenú Nosotros en Móvil (con Mapa del sitio y Preguntas frecuentes)
              if (link.name === 'Nosotros') {
                const isAboutActive =
                  pathname === '/nosotros' ||
                  pathname === '/preguntas-frecuentes' ||
                  pathname === '/mapa-del-sitio';

                return (
                  <div key={link.name} className="space-y-1">
                    <Link
                      href={link.href}
                      onClick={handleNavClick}
                      className={`min-h-[44px] flex items-center justify-between px-3 py-2.5 rounded-lg text-base font-semibold transition-colors ${
                        isAboutActive ? 'bg-sky-50 text-[#0066B3]' : 'text-[#263238] hover:bg-slate-50'
                      }`}
                    >
                      <span>{link.name}</span>
                      <ArrowRight className="w-4 h-4 text-[#0066B3]" aria-hidden="true" />
                    </Link>

                    {/* Subenlaces: Sobre Nosotros, Preguntas frecuentes, Mapa del Sitio */}
                    <div className="pl-4 space-y-1 border-l-2 border-slate-100 ml-2">
                      {ABOUT_SUB_LINKS.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          onClick={handleNavClick}
                          className={`min-h-[38px] flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                            pathname === sub.href
                              ? 'text-[#0066B3] bg-sky-50 font-semibold'
                              : 'text-[#5B6570] hover:text-[#263238]'
                          }`}
                        >
                          {getAboutIcon(sub.name)}
                          <span>{sub.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              // Demás opciones
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={handleNavClick}
                  className={`min-h-[44px] flex items-center px-3 py-2.5 rounded-lg text-base font-semibold transition-colors ${
                    active ? 'bg-sky-50 text-[#0066B3]' : 'text-[#263238] hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Action CTA in Mobile Drawer: Botón "Contáctanos" hacia /contacto */}
          <div className="mt-4 pt-4 border-t border-slate-100">
            <Link
              href="/contacto"
              onClick={handleNavClick}
              className="min-h-[44px] w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-bold text-white bg-[#0066B3] hover:bg-[#005291] shadow-sm transition-all"
              aria-label="Ir a la landing page de Contáctanos"
            >
              <span>Ir a Contáctanos</span>
              <ArrowRight className="w-4 h-4 text-white" aria-hidden="true" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}