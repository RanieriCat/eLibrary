import type { ButtonHTMLAttributes } from 'react';
import { cn } from '../utils';

export const Button = ({ className, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button
    className={cn(
      'rounded-md bg-primary px-4 py-2 text-sm font-medium text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
      className,
    )}
    {...props}
  />
);
