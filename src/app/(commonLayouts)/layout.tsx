import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function CommonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header>
        <nav>
          <Navbar />
        </nav>
      </header>
      <main>{children}</main>
      <Footer />
    </>
  );
}
