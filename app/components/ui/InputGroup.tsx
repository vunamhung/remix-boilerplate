import type { ReactNode } from 'react';

export default function VInputGroup({ className, children, errors, label, htmlFor, helperText }: props) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor}>{label}</label>
      {children}
      {errors && <span className="text-red-500 text-xs">{helperText}</span>}
    </div>
  );
}

type props = { className: string; children: ReactNode; errors: string; label: string; htmlFor: string; helperText: string };
