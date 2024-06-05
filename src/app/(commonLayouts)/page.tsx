import HeroSection from '@/components/Home/HeroSection';
import Searchbar from '@/components/Home/Searchbar';
import TipsAndGuides from '@/components/Home/TipsAndGuides';
import dynamic from 'next/dynamic';

export default function Home() {
  const TravelPosts = dynamic(() => import('@/components/Home/TravelPosts'), {
    ssr: false,
  });
  const FeaturedDestinantion = dynamic(
    () => import('@/components/Home/FeaturedDestinantion'),
    {
      ssr: false,
    },
  );
  return (
    <div className="">
      <HeroSection />
      <Searchbar />
      <TravelPosts />
      <FeaturedDestinantion />
      <TipsAndGuides />
    </div>
  );
}
