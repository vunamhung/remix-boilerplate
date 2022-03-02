import type { FC } from 'react';
import clsx from 'clsx';
import { Controller } from 'react-hook-form';

type props = {
  control: any;
  name: string;
  label: string;
  className?: string;
};

export const Checkbox: FC<props> = ({ control, name, label, className }) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => {
        return (
          <div className={clsx('font-body text-xs', className)}>
            <label>
              <input className="mr-1" {...field} type="checkbox" />
              {label}
            </label>
          </div>
        );
      }}
    />
  );
};
