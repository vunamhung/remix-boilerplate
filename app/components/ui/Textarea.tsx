import type { FC } from 'react';
import type { RegisterOptions } from 'react-hook-form';
import clsx from 'clsx';
import RcTextarea from 'rc-textarea';
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
  autoSize?: boolean | { minRows?: number; maxRows?: number };
};

export const Textarea: FC<props> = ({ control, rules, name, label, description, placeholder, className, autoSize }) => {
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
          <RcTextarea
            className={clsx('form-field form-textarea', { '!border-red-500 focus:!border-red-300 focus:!ring-red-200': error })}
            {...field}
            placeholder={placeholder}
            autoSize={autoSize}
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
