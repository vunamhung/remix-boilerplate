import type { FC } from 'react';
import type { RegisterOptions } from 'react-hook-form';
import clsx from 'clsx';
import { Controller } from 'react-hook-form';
import { __ } from '~/utilities';

type props = {
  control: any;
  rules?: Omit<RegisterOptions, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'>;
  name: string;
  label?: string;
  description?: string;
  placeholder?: string;
  className?: string;
  type?: string;
  defaultValue?: string;
  size?: 'sm' | 'md' | 'lg';
};

export const Input: FC<props> = ({ control, rules, name, label, description, placeholder, className, type, size, defaultValue }) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field, fieldState: { error } }) => (
        <div className={clsx('relative', className)}>
          {label && (
            <label htmlFor={name}>
              {label} {rules?.required && <span className="text-red-500">*</span>}
            </label>
          )}
          {description && <p className="text-sm text-gray-500">{description}</p>}
          <input
            className={clsx('form-field form-input', { '!border-red-500 focus:!border-red-300 focus:!ring-red-200': error, 'p-4': size === 'lg' })}
            {...field}
            placeholder={placeholder}
            type={type}
            defaultValue={defaultValue}
          />
          {error && (
            <span className={clsx('absolute -bottom-4 text-xs text-red-500', { 'right-0': label })}>
              {error?.message || __('This field is required')}
            </span>
          )}
        </div>
      )}
    />
  );
};
