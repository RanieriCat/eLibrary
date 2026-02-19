import { Button } from '../components/button';

export const QuantityStepper = ({ value, onChange }: { value: number; onChange: (value: number) => void }) => (
  <div className="flex items-center gap-2">
    <Button onClick={() => onChange(Math.max(1, value - 1))}>-</Button>
    <span>{value}</span>
    <Button onClick={() => onChange(value + 1)}>+</Button>
  </div>
);
