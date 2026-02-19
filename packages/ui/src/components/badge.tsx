import type { HTMLAttributes } from 'react';
import { cn } from '../utils';

export const Badge = ({ className, ...props }: HTMLAttributes<HTMLSpanElement>) => (
  <span className={cn('rounded-full bg-surfaceMuted px-2 py-1 text-xs', className)} {...props} />
);
