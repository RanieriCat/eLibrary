import type { InputHTMLAttributes } from 'react';
import { cn } from '../utils';

export const Input = ({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) => (
  <input
    className={cn('w-full rounded-md border border-border px-3 py-2 text-sm', className)}
    {...props}
  />
);
