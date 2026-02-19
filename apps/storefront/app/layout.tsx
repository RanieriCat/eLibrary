import '@metodo-a/tokens/dist/tokens.css';
import '@metodo-a/ui/src/styles/theme-default.css';
import './globals.css';
import { Footer } from '../components/footer';
import { Header } from '../components/header';
import { Providers } from '../components/providers';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" className="theme-default">
      <body>
        <Providers>
          <Header />
          <main className="mx-auto min-h-[80vh] max-w-6xl p-4">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
