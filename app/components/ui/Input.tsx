import type { FC } from 'react';
import clsx from 'clsx';
import { Controller } from 'react-hook-form';

type props = {
  control: any;
  rules?: object;
  name: string;
  label?: string;
  description?: string;
  placeholder?: string;
  className?: string;
  type?: string;
};

export const Input: FC<props> = ({ control, rules, name, label, description, placeholder, className, type }) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field, fieldState: { error } }) => {
        return (
          <div className={clsx('relative', className)}>
            {label && <label htmlFor={name}>{label}</label>}
            {description && <p className="text-sm text-gray-500">{description}</p>}
            <input
              className={clsx('form-field form-input', { 'border-red-500 focus:border-red-300 focus:ring-red-200': error })}
              {...field}
              placeholder={placeholder}
              type={type}
            />
            {error && (
              <span className={clsx('absolute -bottom-4 text-xs text-red-500', { 'right-0': label })}>
                {error?.message || 'This field is required'}
              </span>
            )}
          </div>
        );
      }}
    />
  );
};
