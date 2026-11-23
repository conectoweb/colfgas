import React from 'react';

interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  centered?: boolean;
  theme?: 'light' | 'dark';
  className?: string;
}

export function SectionHeader({
  badge,
  title,
  description,
  centered = true,
  theme = 'light',
  className = '',
}: SectionHeaderProps) {
  const isDark = theme === 'dark';

  return (
    <div
      className={`max-w-3xl mb-12 ${centered ? 'mx-auto text-center' : 'text-left'} ${className}`}
    >
      {badge && (
        <span
          className={`inline-block px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase mb-3 ${
            isDark
              ? 'bg-sky-500/20 text-sky-200 border border-sky-400/30'
              : 'bg-sky-50 text-[#0066B3] border border-sky-200'
          }`}
        >
          {badge}
        </span>
      )}
      <h2
        className={`text-2xl sm:text-3xl lg:text-4xl font-bold tracking-normal leading-snug ${
          isDark ? 'text-white' : 'text-[#263238]'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-3 text-base sm:text-lg leading-relaxed ${
            isDark ? 'text-slate-200' : 'text-[#5B6570]'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
