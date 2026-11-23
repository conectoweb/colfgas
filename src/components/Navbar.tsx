'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Logo } from './Logo';
import { COMPANY_INFO, NAV_LINKS } from '@/lib/constants';
import { Phone, MessageCircle, Menu, X, ShieldCheck, CheckCircle2 } from 'lucide-react';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  // Handle escape key to close menus
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_LINKS.map((link) => link.href.replace('#', ''));
      const scrollPos = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm border-b border-slate-100">
      {/* Top Banner: Sello Vanti y Contacto Directo */}
      <div className="bg-[#F4F7F8] border-b border-slate-200/80 text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          {/* Sello Certificación Vanti */}
          <div className="flex items-center gap-2 text-[#263238]">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-100 text-[#287A1C] font-bold text-[11px] border border-emerald-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#287A1C]" aria-hidden="true" />
              <span>{COMPANY_INFO.vantiCertification}</span>
            </span>
            <span className="hidden md:inline text-[#5B6570] text-xs">
              • Redes de gas para construcciones residenciales e industriales
            </span>
          </div>

          {/* Quick Contact Links */}
          <div className="flex items-center gap-4 text-xs font-semibold">
            <a
              href={COMPANY_INFO.phoneCallUrl}
              className="flex items-center gap-1.5 text-[#0066B3] hover:text-[#005291] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066B3] rounded px-1 min-h-[32px]"
              aria-label={`Llamar a ${COMPANY_INFO.phoneDisplay}`}
            >
              <Phone className="w-3.5 h-3.5 text-[#0066B3]" aria-hidden="true" />
              <span>{COMPANY_INFO.phoneDisplay}</span>
            </a>
            <span className="text-slate-300 hidden sm:inline" aria-hidden="true">
              |
            </span>
            <a
              href={COMPANY_INFO.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#287A1C] hover:text-[#1E5F15] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#287A1C] rounded px-1 min-h-[32px]"
              aria-label="Escribir por WhatsApp a COLFGAS"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#43BE24]" aria-hidden="true" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Vanti Mini Badge */}
          <div className="flex items-center gap-3">
            <Link
              href="#inicio"
              className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066B3] rounded-lg p-1 transition-opacity hover:opacity-95"
              aria-label="Página principal de COLFGAS CONSTRUCCIONES S.A.S."
            >
              <Logo variant="dark" />
            </Link>
            <div className="hidden xl:flex items-center gap-1 text-[11px] font-bold text-[#287A1C] bg-emerald-50 px-2 py-1 rounded-md border border-emerald-200">
              <ShieldCheck className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Certificado por Vanti</span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav
            role="navigation"
            aria-label="Navegación principal de la landing"
            className="hidden lg:flex items-center gap-1 xl:gap-2"
          >
            {NAV_LINKS.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 rounded-lg text-xs xl:text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066B3] ${
                    isActive
                      ? 'text-[#0066B3] bg-sky-50'
                      : 'text-[#263238] hover:text-[#0066B3] hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs: Llamar y WhatsApp */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-3">
            <a
              href={COMPANY_INFO.phoneCallUrl}
              className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-lg text-xs xl:text-sm font-semibold text-[#0066B3] bg-sky-50 hover:bg-sky-100 border border-sky-200 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066B3]"
              aria-label={`Llamar al ${COMPANY_INFO.phoneDisplay}`}
            >
              <Phone className="w-4 h-4 text-[#0066B3]" aria-hidden="true" />
              <span>Llamar</span>
            </a>

            <a
              href={COMPANY_INFO.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg text-xs xl:text-sm font-bold text-[#263238] bg-[#43BE24] hover:bg-[#37A51D] shadow-sm hover:shadow transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              aria-label="Escribir por WhatsApp a COLFGAS"
            >
              <MessageCircle className="w-4 h-4 text-[#263238]" aria-hidden="true" />
              <span>Escribir por WhatsApp</span>
            </a>
          </div>

          {/* Mobile Actions & Menu Toggle Button */}
          <div className="flex items-center lg:hidden gap-1.5 sm:gap-2">
            <a
              href={COMPANY_INFO.phoneCallUrl}
              className="min-h-[44px] min-w-[44px] inline-flex items-center justify-center rounded-lg bg-sky-50 text-[#0066B3] border border-sky-200 p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066B3]"
              aria-label={`Llamar al ${COMPANY_INFO.phoneDisplay}`}
              title="Llamar"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
            </a>

            <a
              href={COMPANY_INFO.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[44px] inline-flex items-center gap-1.5 text-xs font-bold px-3 py-2 rounded-lg text-[#263238] bg-[#43BE24] hover:bg-[#37A51D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              aria-label="Escribir por WhatsApp"
            >
              <MessageCircle className="w-4 h-4" aria-hidden="true" />
              <span>WhatsApp</span>
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="min-h-[44px] min-w-[44px] p-2.5 rounded-lg text-[#263238] hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066B3] flex items-center justify-center transition-colors"
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
          aria-label="Navegación móvil de la landing"
          className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 shadow-2xl animate-in slide-in-from-top duration-200"
        >
          {/* Sello Vanti en móvil */}
          <div className="mb-3 p-3 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-[#287A1C] flex-shrink-0" aria-hidden="true" />
            <span className="text-xs font-bold text-[#287A1C]">
              {COMPANY_INFO.vantiCertification}
            </span>
          </div>

          <div className="flex flex-col space-y-1">
            {NAV_LINKS.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleNavClick}
                  className={`min-h-[44px] flex items-center px-3 py-2.5 rounded-lg text-base font-semibold transition-colors ${
                    isActive
                      ? 'bg-sky-50 text-[#0066B3]'
                      : 'text-[#263238] hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-2.5">
            <a
              href={COMPANY_INFO.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleNavClick}
              className="min-h-[44px] w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-bold text-[#263238] bg-[#43BE24] hover:bg-[#37A51D] shadow-sm transition-all"
            >
              <MessageCircle className="w-5 h-5" aria-hidden="true" />
              <span>Escribir por WhatsApp ({COMPANY_INFO.phoneDisplay})</span>
            </a>

            <a
              href={COMPANY_INFO.phoneCallUrl}
              onClick={handleNavClick}
              className="min-h-[44px] w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold text-[#0066B3] bg-sky-50 hover:bg-sky-100 border border-sky-200 transition-all"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              <span>Llamar al {COMPANY_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
