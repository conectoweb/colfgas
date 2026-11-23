import React from 'react';
import Image from 'next/image';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  showTagline?: boolean;
}

export function Logo({ variant = 'dark', className = '', showTagline = false }: LogoProps) {
  const isLight = variant === 'light';

  return (
    <div
      className={`inline-flex items-center ${
        isLight
          ? 'bg-white px-3.5 py-2 rounded-xl shadow-sm border border-slate-700/20'
          : ''
      } ${className}`}
    >
      <Image
        src="/logos/logo-colfgas.png"
        alt="COLFGAS CONSTRUCCIONES S.A.S."
        width={217}
        height={72}
        priority={!isLight}
        className="h-10 sm:h-12 w-auto object-contain"
      />
      {showTagline && (
        <span
          className={`ml-2.5 text-xs font-semibold ${
            isLight ? 'text-slate-800' : 'text-[#5B6570]'
          } hidden md:inline-block border-l border-slate-300 pl-2.5`}
        >
          Gas Residencial e Industrial
        </span>
      )}
    </div>
  );
}
