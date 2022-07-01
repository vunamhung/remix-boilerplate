import type { FC } from 'react';
import type { RegisterOptions } from 'react-hook-form';
import clsx from 'clsx';
import { Controller } from 'react-hook-form';

type props = {
  control: any;
  rules?: Omit<RegisterOptions, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'>;
  name: string;
  label: string;
  className?: string;
};

export const Checkbox: FC<props> = ({ control, rules, name, label, className }) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field, fieldState: { error } }) => (
        <div className={clsx('relative font-body text-sm', className)}>
          <label className="inline-flex items-center">
            <input
              className={clsx('form-checkbox mr-1 shadow-sm', { '!border-red-500 focus:!border-red-300 focus:!ring-red-200': error })}
              {...field}
              checked={field.value}
              type="checkbox"
            />
            {label}
          </label>
          {error && <span className="absolute -bottom-4 left-0 text-xs text-red-500">{error?.message || 'This field is required'}</span>}
        </div>
      )}
    />
  );
};
