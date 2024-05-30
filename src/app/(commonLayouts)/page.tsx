import Footer from '@/components/Footer';
import FeaturedDestinantion from '@/components/Home/FeaturedDestinantion';
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
      <FeaturedDestinantion />
      <TipsAndGuides />
      <Footer />
    </main>
  );
}
