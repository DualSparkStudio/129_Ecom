import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { CartPanel } from './CartPanel';

export function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <CartPanel />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
