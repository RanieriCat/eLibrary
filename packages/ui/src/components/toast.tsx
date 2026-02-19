export const Toast = ({ message }: { message: string }) => (
  <div role="status" aria-live="polite" className="fixed bottom-4 right-4 rounded bg-text px-3 py-2 text-white">
    {message}
  </div>
);
