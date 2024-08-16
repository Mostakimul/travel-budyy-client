import FeaturedDestinantion from '@/components/Home/FeaturedDestinantion';
import HeroSection from '@/components/Home/HeroSection';
import TipsAndGuides from '@/components/Home/TipsAndGuides';
import TravelPosts from '@/components/Home/TravelPosts';

export default function Home() {
  // const TravelPosts = dynamic(() => import('@/components/Home/TravelPosts'), {
  //   ssr: false,
  // });
  // const FeaturedDestinantion = dynamic(
  //   () => import('@/components/Home/FeaturedDestinantion'),
  //   {
  //     ssr: false,
  //   },
  // );
  return (
    <div className="">
      <HeroSection />
      <TravelPosts />
      <FeaturedDestinantion />
      <TipsAndGuides />
    </div>
  );
}
