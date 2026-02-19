import { useState, type HTMLAttributes } from 'react';
import { cn } from '../utils';

type Option = { label: string; value: string };

export const Select = ({
  options,
  value,
  onChange,
  className,
  ...props
}: {
  options: Option[];
  value?: string;
  onChange: (value: string) => void;
} & HTMLAttributes<HTMLDivElement>) => {
  const [open, setOpen] = useState(false);
  const active = options.find((option) => option.value === value) ?? options[0];

  return (
    <div className={cn('relative', className)} {...props}>
      <button
        type="button"
        className="w-full rounded-md border border-border bg-surface px-3 py-2 text-left"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        {active?.label}
      </button>
      {open ? (
        <ul
          role="listbox"
          tabIndex={-1}
          className="absolute z-10 mt-1 w-full rounded-md border border-border bg-surface shadow"
          onKeyDown={(event) => {
            if (event.key === 'Escape') setOpen(false);
          }}
        >
          {options.map((option) => (
            <li key={option.value}>
              <button
                className="w-full px-3 py-2 text-left hover:bg-surfaceMuted"
                onClick={() => {
                  onChange(option.value);
                  setOpen(false);
                }}
              >
                {option.label}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};
