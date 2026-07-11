import Footer from './Footer';
import ScrollToHash from './ScrollToHash';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-aurora-bg">
      <ScrollToHash />
      {children}
      <Footer />
    </div>
  );
}
