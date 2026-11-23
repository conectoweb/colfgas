'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
  className?: string;
  title?: string;
  description?: string;
}

export function FaqAccordion({
  items,
  className = '',
  title = 'Preguntas Frecuentes',
  description = 'Respuestas claras sobre nuestros procesos de ingeniería, normativas y alcances de servicio.',
}: FaqAccordionProps) {
  const [openIndexes, setOpenIndexes] = useState<number[]>([0]); // First item open by default

  const toggleIndex = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section className={`rounded-3xl bg-[#F4F7F8] border border-slate-200/90 p-6 sm:p-10 ${className}`}>
      {(title || description) && (
        <div className="max-w-3xl mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0066B3]">
            Resolución de Dudas Técnicas
          </span>
          {title && (
            <h2 className="text-2xl sm:text-3xl font-bold text-[#263238] mt-1">
              {title}
            </h2>
          )}
          {description && (
            <p className="mt-2 text-sm text-[#5B6570] leading-relaxed">
              {description}
            </p>
          )}
        </div>
      )}

      <div className="space-y-3.5">
        {items.map((item, index) => {
          const isOpen = openIndexes.includes(index);
          const buttonId = `faq-btn-${index}`;
          const contentId = `faq-panel-${index}`;

          return (
            <div
              key={index}
              className={`rounded-2xl transition-all duration-200 bg-white border ${
                isOpen
                  ? 'border-[#0066B3]/40 shadow-sm ring-1 ring-[#0066B3]/10'
                  : 'border-slate-200/80 hover:border-slate-300'
              }`}
            >
              <h3>
                <button
                  type="button"
                  id={buttonId}
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  onClick={() => toggleIndex(index)}
                  className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left text-sm sm:text-base font-bold text-[#263238] hover:text-[#0066B3] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066B3] rounded-2xl transition-colors cursor-pointer"
                >
                  <span className="flex-1 pr-2">{item.question}</span>
                  <span
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'bg-sky-50 text-[#0066B3] rotate-180'
                        : 'bg-slate-100 text-[#5B6570]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" aria-hidden="true" />
                  </span>
                </button>
              </h3>

              <div
                id={contentId}
                role="region"
                aria-labelledby={buttonId}
                hidden={!isOpen}
                className={`px-5 sm:px-6 pb-5 sm:pb-6 text-xs sm:text-sm text-[#5B6570] leading-relaxed border-t border-slate-100 pt-3 ${
                  isOpen ? 'block animate-in fade-in-50 duration-150' : 'hidden'
                }`}
              >
                <p>{item.answer}</p>
                {item.category && (
                  <span className="inline-block mt-3 px-2.5 py-0.5 rounded text-[11px] font-semibold bg-slate-100 text-[#263238]">
                    {item.category}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
