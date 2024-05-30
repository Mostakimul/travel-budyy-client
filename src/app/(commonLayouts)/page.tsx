import HeroSection from '@/components/Home/HeroSection';
import Searchbar from '@/components/Home/Searchbar';
import TravelPosts from '@/components/Home/TravelPosts';

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <Searchbar />
      <TravelPosts />
    </main>
  );
}
