import type { FC } from 'react';
import clsx from 'clsx';
import RcTextarea from 'rc-textarea';
import { Controller } from 'react-hook-form';

type props = {
  control: any;
  rules?: object;
  name: string;
  label?: string;
  description?: string;
  placeholder?: string;
  className?: string;
  autoSize?: boolean;
};

export const Textarea: FC<props> = ({ control, rules, name, label, description, placeholder, className, autoSize }) => {
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
            <RcTextarea
              className={clsx('form-field form-textarea', { 'border-red-500 focus:border-red-300 focus:ring-red-200': error })}
              {...field}
              placeholder={placeholder}
              autoSize={autoSize}
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
