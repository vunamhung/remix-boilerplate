import type { FC } from 'react';
import clsx from 'clsx';
import { Controller } from 'react-hook-form';

type props = {
  control: any;
  name: string;
  label: string;
  value: any;
  defaultChecked: any;
  className?: string;
};

export const Radio: FC<props> = ({ control, name, label, value, defaultChecked, className }) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <div className={clsx('font-body text-sm', className)}>
          <label className="inline-flex items-center">
            <input className="form-radio mr-1" {...field} value={value} defaultChecked={defaultChecked} type="radio" />
            {label}
          </label>
        </div>
      )}
    />
  );
};
