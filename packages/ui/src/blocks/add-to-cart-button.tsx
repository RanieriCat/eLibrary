import { Button } from '../components/button';

export const AddToCartButton = ({ onAdd }: { onAdd: () => void }) => (
  <Button aria-label="Aggiungi al carrello" onClick={onAdd}>
    Aggiungi
  </Button>
);
