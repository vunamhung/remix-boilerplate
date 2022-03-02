import type { FC, ReactNode } from 'react';
import clsx from 'clsx';
import { Controller } from 'react-hook-form';

type props = {
  control: any;
  name: string;
  label?: string;
  placeholder?: string;
  className?: string;
  children: ReactNode;
};

export const Select: FC<props> = ({ control, children, name, label, className }) => {
  return (
    <div className={clsx('relative', className)}>
      {label && <label htmlFor={name}>{label}</label>}
      <Controller
        control={control}
        name={name}
        render={({ field }) => {
          return (
            <select className={clsx('form-field form-select')} {...field}>
              {children}
            </select>
          );
        }}
      />
    </div>
  );
};
