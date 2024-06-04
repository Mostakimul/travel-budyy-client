import { TTrip } from '@/types';
import Card from '../Card';

const FeaturedDestinantion = async () => {
  const result = await fetch(
    `${process.env.NEXT_PUBLIC_APP_API_URL}/trip?limit=3`,
  );

  const travelPosts = await result.json();

  let content = null;

  if (travelPosts.success === true) {
    content = travelPosts?.data?.map((post: TTrip) => (
      <Card key={post.id} post={post} />
    ));
  } else {
    content = <p>No post found!</p>;
  }
  return (
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Featured Destinations</h2>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {content}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinantion;
