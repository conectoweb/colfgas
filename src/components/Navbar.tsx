'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from './Logo';
import { NAV_LINKS, SERVICE_SUB_LINKS, ABOUT_SUB_LINKS } from '@/lib/constants';
import {
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
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);

  const pathname = usePathname();
  const servicesDropdownRef = useRef<HTMLDivElement>(null);
  const aboutDropdownRef = useRef<HTMLDivElement>(null);
  const servicesButtonRef = useRef<HTMLButtonElement>(null);
  const aboutButtonRef = useRef<HTMLButtonElement>(null);

  const servicesTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const aboutTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Hover handlers for Desktop with debounce grace period to prevent accidental closing
  const handleServicesMouseEnter = () => {
    if (servicesTimeoutRef.current) {
      clearTimeout(servicesTimeoutRef.current);
      servicesTimeoutRef.current = null;
    }
    if (aboutTimeoutRef.current) {
      clearTimeout(aboutTimeoutRef.current);
      aboutTimeoutRef.current = null;
    }
    setAboutDropdownOpen(false);
    setServicesDropdownOpen(true);
  };

  const handleServicesMouseLeave = () => {
    if (servicesTimeoutRef.current) {
      clearTimeout(servicesTimeoutRef.current);
    }
    servicesTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 200);
  };

  const handleAboutMouseEnter = () => {
    if (aboutTimeoutRef.current) {
      clearTimeout(aboutTimeoutRef.current);
      aboutTimeoutRef.current = null;
    }
    if (servicesTimeoutRef.current) {
      clearTimeout(servicesTimeoutRef.current);
      servicesTimeoutRef.current = null;
    }
    setServicesDropdownOpen(false);
    setAboutDropdownOpen(true);
  };

  const handleAboutMouseLeave = () => {
    if (aboutTimeoutRef.current) {
      clearTimeout(aboutTimeoutRef.current);
    }
    aboutTimeoutRef.current = setTimeout(() => {
      setAboutDropdownOpen(false);
    }, 200);
  };

  // Cleanup timers on unmount
  useEffect(() => {
    return () => {
      if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
      if (aboutTimeoutRef.current) clearTimeout(aboutTimeoutRef.current);
    };
  }, []);

  // Close menus on Escape key and return focus to triggering button
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
        if (aboutTimeoutRef.current) clearTimeout(aboutTimeoutRef.current);

        if (servicesDropdownOpen) {
          setServicesDropdownOpen(false);
          servicesButtonRef.current?.focus();
        }
        if (aboutDropdownOpen) {
          setAboutDropdownOpen(false);
          aboutButtonRef.current?.focus();
        }
        if (mobileMenuOpen) {
          setMobileMenuOpen(false);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [servicesDropdownOpen, aboutDropdownOpen, mobileMenuOpen]);

  // Close desktop dropdowns on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      const target = e.target as Node;
      if (
        servicesDropdownRef.current &&
        !servicesDropdownRef.current.contains(target)
      ) {
        if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
        setServicesDropdownOpen(false);
      }
      if (
        aboutDropdownRef.current &&
        !aboutDropdownRef.current.contains(target)
      ) {
        if (aboutTimeoutRef.current) clearTimeout(aboutTimeoutRef.current);
        setAboutDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  // Close all menus and reset dropdown states on route navigation
  useEffect(() => {
    if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
    if (aboutTimeoutRef.current) clearTimeout(aboutTimeoutRef.current);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setAboutDropdownOpen(false);
    setMobileServicesOpen(false);
    setMobileAboutOpen(false);
  }, [pathname]);

  const handleNavClick = () => {
    if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
    if (aboutTimeoutRef.current) clearTimeout(aboutTimeoutRef.current);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setAboutDropdownOpen(false);
    setMobileServicesOpen(false);
    setMobileAboutOpen(false);
  };

  const isServicesActive = pathname.startsWith('/servicios');
  const isAboutActive =
    pathname === '/nosotros' ||
    pathname === '/preguntas-frecuentes' ||
    pathname === '/mapa-del-sitio';

  const getServiceIcon = (name: string, isAll?: boolean) => {
    const lower = name.toLowerCase();
    if (isAll || lower.includes('todos')) {
      return <Building2 className="w-4 h-4 text-[#0066B3]" aria-hidden="true" />;
    }
    if (lower.includes('residencial')) {
      return <Building2 className="w-4 h-4 text-[#0066B3]" aria-hidden="true" />;
    }
    if (lower.includes('industrial')) {
      return <Factory className="w-4 h-4 text-[#287A1C]" aria-hidden="true" />;
    }
    if (lower.includes('mantenimiento')) {
      return <Wrench className="w-4 h-4 text-[#0066B3]" aria-hidden="true" />;
    }
    return <Wrench className="w-4 h-4 text-[#0066B3]" aria-hidden="true" />;
  };

  const getAboutIcon = (name: string) => {
    const lower = name.toLowerCase();
    if (lower.includes('preguntas')) {
      return <HelpCircle className="w-4 h-4 text-[#0066B3]" aria-hidden="true" />;
    }
    if (lower.includes('mapa')) {
      return <Network className="w-4 h-4 text-[#287A1C]" aria-hidden="true" />;
    }
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
            {/* 1. Inicio (Sin flecha) */}
            <Link
              href="/"
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066B3] ${
                pathname === '/'
                  ? 'text-[#0066B3] bg-sky-50'
                  : 'text-[#263238] hover:text-[#0066B3] hover:bg-slate-50'
              }`}
            >
              Inicio
            </Link>

            {/* 2. Servicios (Abre al pasar el cursor o hacer clic en computadores) */}
            <div
              ref={servicesDropdownRef}
              className="relative"
              onMouseEnter={handleServicesMouseEnter}
              onMouseLeave={handleServicesMouseLeave}
            >
              <button
                ref={servicesButtonRef}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
                  setServicesDropdownOpen((prev) => !prev);
                  setAboutDropdownOpen(false);
                }}
                onKeyDown={(e) => {
                  if (e.key === 'ArrowDown' && !servicesDropdownOpen) {
                    e.preventDefault();
                    handleServicesMouseEnter();
                  }
                }}
                className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066B3] flex items-center gap-1.5 cursor-pointer ${
                  isServicesActive || servicesDropdownOpen
                    ? 'text-[#0066B3] bg-sky-50'
                    : 'text-[#263238] hover:text-[#0066B3] hover:bg-slate-50'
                }`}
                aria-expanded={servicesDropdownOpen}
                aria-haspopup="true"
                aria-controls="desktop-services-dropdown"
              >
                <span>Servicios</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    servicesDropdownOpen ? 'rotate-180 text-[#0066B3]' : 'text-slate-500'
                  }`}
                  aria-hidden="true"
                />
              </button>

              {/* Panel Desplegable Servicios con puente invisible y padding superior para evitar cierres accidentales al mover el cursor */}
              {servicesDropdownOpen && (
                <div
                  id="desktop-services-dropdown"
                  className="absolute top-full left-0 pt-2 w-80 z-50 before:absolute before:-top-3 before:left-0 before:right-0 before:h-3 before:content-['']"
                  role="menu"
                  aria-label="Submenú de Servicios"
                  onClick={(e) => e.stopPropagation()}
                  onMouseEnter={handleServicesMouseEnter}
                  onMouseLeave={handleServicesMouseLeave}
                >
                  <div className="rounded-2xl bg-white border border-slate-200 shadow-2xl p-2.5">
                    {SERVICE_SUB_LINKS.map((sub) => {
                      const isSubActive = pathname === sub.href;
                      const isAll = sub.href === '/servicios';
                      return (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          onClick={handleNavClick}
                          role="menuitem"
                          className={`p-2.5 rounded-xl flex items-start gap-3 transition-colors ${
                            isAll ? 'border-b border-slate-100 mb-1' : ''
                          } ${
                            isSubActive
                              ? 'bg-sky-50 text-[#0066B3]'
                              : 'text-[#263238] hover:bg-slate-50'
                          }`}
                        >
                          <div
                            className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 ${
                              isSubActive ? 'bg-sky-100 text-[#0066B3]' : 'bg-slate-100'
                            }`}
                          >
                            {getServiceIcon(sub.name, isAll)}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <span
                                className={`text-xs block ${
                                  isAll
                                    ? 'font-bold uppercase tracking-wider text-[#0066B3]'
                                    : 'font-bold text-[#263238]'
                                } ${isSubActive ? 'text-[#0066B3]' : ''}`}
                              >
                                {sub.name}
                              </span>
                              {isAll && (
                                <ArrowRight className="w-3.5 h-3.5 text-[#0066B3]" aria-hidden="true" />
                              )}
                            </div>
                            <span className="text-[11px] text-[#5B6570] block leading-tight mt-0.5">
                              {sub.description}
                            </span>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* 3. Proyectos (Sin flecha) */}
            <Link
              href="/proyectos"
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066B3] ${
                pathname === '/proyectos'
                  ? 'text-[#0066B3] bg-sky-50'
                  : 'text-[#263238] hover:text-[#0066B3] hover:bg-slate-50'
              }`}
            >
              Proyectos
            </Link>

            {/* 4. Nosotros (Abre al pasar el cursor o hacer clic en computadores) */}
            <div
              ref={aboutDropdownRef}
              className="relative"
              onMouseEnter={handleAboutMouseEnter}
              onMouseLeave={handleAboutMouseLeave}
            >
              <button
                ref={aboutButtonRef}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  if (aboutTimeoutRef.current) clearTimeout(aboutTimeoutRef.current);
                  setAboutDropdownOpen((prev) => !prev);
                  setServicesDropdownOpen(false);
                }}
                onKeyDown={(e) => {
                  if (e.key === 'ArrowDown' && !aboutDropdownOpen) {
                    e.preventDefault();
                    handleAboutMouseEnter();
                  }
                }}
                className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066B3] flex items-center gap-1.5 cursor-pointer ${
                  isAboutActive || aboutDropdownOpen
                    ? 'text-[#0066B3] bg-sky-50'
                    : 'text-[#263238] hover:text-[#0066B3] hover:bg-slate-50'
                }`}
                aria-expanded={aboutDropdownOpen}
                aria-haspopup="true"
                aria-controls="desktop-about-dropdown"
              >
                <span>Nosotros</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    aboutDropdownOpen ? 'rotate-180 text-[#0066B3]' : 'text-slate-500'
                  }`}
                  aria-hidden="true"
                />
              </button>

              {/* Panel Desplegable Nosotros con puente invisible y padding superior */}
              {aboutDropdownOpen && (
                <div
                  id="desktop-about-dropdown"
                  className="absolute top-full left-0 pt-2 w-80 z-50 before:absolute before:-top-3 before:left-0 before:right-0 before:h-3 before:content-['']"
                  role="menu"
                  aria-label="Submenú de Nosotros"
                  onClick={(e) => e.stopPropagation()}
                  onMouseEnter={handleAboutMouseEnter}
                  onMouseLeave={handleAboutMouseLeave}
                >
                  <div className="rounded-2xl bg-white border border-slate-200 shadow-2xl p-2.5">
                    {ABOUT_SUB_LINKS.map((sub) => {
                      const isSubActive = pathname === sub.href;
                      return (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          onClick={handleNavClick}
                          role="menuitem"
                          className={`p-2.5 rounded-xl flex items-start gap-3 transition-colors ${
                            isSubActive
                              ? 'bg-sky-50 text-[#0066B3]'
                              : 'text-[#263238] hover:bg-slate-50'
                          }`}
                        >
                          <div
                            className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 ${
                              isSubActive ? 'bg-sky-100 text-[#0066B3]' : 'bg-slate-100'
                            }`}
                          >
                            {getAboutIcon(sub.name)}
                          </div>
                          <div className="flex-1 min-w-0">
                            <span
                              className={`text-xs font-bold block ${
                                isSubActive ? 'text-[#0066B3]' : 'text-[#263238]'
                              }`}
                            >
                              {sub.name}
                            </span>
                            <span className="text-[11px] text-[#5B6570] block leading-tight mt-0.5">
                              {sub.description}
                            </span>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Action CTA: Botón visible "Contáctanos" hacia la landing de contacto */}
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
          className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 shadow-2xl animate-in slide-in-from-top duration-200 max-h-[calc(100vh-5rem)] overflow-y-auto"
        >
          <div className="flex flex-col space-y-1.5">
            {/* 1. Inicio (Sin flecha) */}
            <Link
              href="/"
              onClick={handleNavClick}
              className={`min-h-[44px] flex items-center px-3.5 py-2.5 rounded-xl text-base font-semibold transition-colors ${
                pathname === '/'
                  ? 'bg-sky-50 text-[#0066B3]'
                  : 'text-[#263238] hover:bg-slate-50'
              }`}
            >
              Inicio
            </Link>

            {/* 2. Servicios (Acordeón desplegable al tocar en celular) */}
            <div className="space-y-1">
              <button
                type="button"
                onClick={() => setMobileServicesOpen((prev) => !prev)}
                className={`w-full min-h-[44px] flex items-center justify-between px-3.5 py-2.5 rounded-xl text-base font-semibold transition-colors text-left ${
                  isServicesActive || mobileServicesOpen
                    ? 'bg-sky-50 text-[#0066B3]'
                    : 'text-[#263238] hover:bg-slate-50'
                }`}
                aria-expanded={mobileServicesOpen}
                aria-controls="mobile-services-submenu"
              >
                <span>Servicios</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    mobileServicesOpen ? 'rotate-180 text-[#0066B3]' : 'text-slate-400'
                  }`}
                  aria-hidden="true"
                />
              </button>

              {mobileServicesOpen && (
                <div
                  id="mobile-services-submenu"
                  className="pl-3 pr-1 py-1 space-y-1 border-l-2 border-[#0066B3]/30 ml-3.5"
                >
                  {SERVICE_SUB_LINKS.map((sub) => {
                    const isSubActive = pathname === sub.href;
                    const isAll = sub.href === '/servicios';
                    return (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        onClick={handleNavClick}
                        className={`min-h-[40px] flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-colors ${
                          isSubActive
                            ? 'text-[#0066B3] bg-sky-50 font-bold'
                            : 'text-[#5B6570] hover:text-[#263238] hover:bg-slate-50 font-medium'
                        }`}
                      >
                        {getServiceIcon(sub.name, isAll)}
                        <span>{sub.name}</span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {/* 3. Proyectos (Sin flecha) */}
            <Link
              href="/proyectos"
              onClick={handleNavClick}
              className={`min-h-[44px] flex items-center px-3.5 py-2.5 rounded-xl text-base font-semibold transition-colors ${
                pathname === '/proyectos'
                  ? 'bg-sky-50 text-[#0066B3]'
                  : 'text-[#263238] hover:bg-slate-50'
              }`}
            >
              Proyectos
            </Link>

            {/* 4. Nosotros (Acordeón desplegable al tocar en celular) */}
            <div className="space-y-1">
              <button
                type="button"
                onClick={() => setMobileAboutOpen((prev) => !prev)}
                className={`w-full min-h-[44px] flex items-center justify-between px-3.5 py-2.5 rounded-xl text-base font-semibold transition-colors text-left ${
                  isAboutActive || mobileAboutOpen
                    ? 'bg-sky-50 text-[#0066B3]'
                    : 'text-[#263238] hover:bg-slate-50'
                }`}
                aria-expanded={mobileAboutOpen}
                aria-controls="mobile-about-submenu"
              >
                <span>Nosotros</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    mobileAboutOpen ? 'rotate-180 text-[#0066B3]' : 'text-slate-400'
                  }`}
                  aria-hidden="true"
                />
              </button>

              {mobileAboutOpen && (
                <div
                  id="mobile-about-submenu"
                  className="pl-3 pr-1 py-1 space-y-1 border-l-2 border-[#0066B3]/30 ml-3.5"
                >
                  {ABOUT_SUB_LINKS.map((sub) => {
                    const isSubActive = pathname === sub.href;
                    return (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        onClick={handleNavClick}
                        className={`min-h-[40px] flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-colors ${
                          isSubActive
                            ? 'text-[#0066B3] bg-sky-50 font-bold'
                            : 'text-[#5B6570] hover:text-[#263238] hover:bg-slate-50 font-medium'
                        }`}
                      >
                        {getAboutIcon(sub.name)}
                        <span>{sub.name}</span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
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
