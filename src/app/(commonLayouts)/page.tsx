import Footer from '@/components/Footer';
import HeroSection from '@/components/Home/HeroSection';
import Searchbar from '@/components/Home/Searchbar';
import TipsAndGuides from '@/components/Home/TipsAndGuides';
import TravelPosts from '@/components/Home/TravelPosts';

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <Searchbar />
      <TravelPosts />
      <TipsAndGuides />
      <Footer />
    </main>
  );
}
