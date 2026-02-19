import type { InputHTMLAttributes } from 'react';

export const Checkbox = (props: InputHTMLAttributes<HTMLInputElement>) => (
  <input type="checkbox" className="h-4 w-4 rounded border-border" {...props} />
);
