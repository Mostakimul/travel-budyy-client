import { TTrip } from '@/types';
import Card from '../Card';

const TravelPosts = async () => {
  const result = await fetch(`${process.env.APP_API_URL}/trip`, {
    cache: 'no-cache',
  });

  const travelPosts = await result.json();

  return (
    <section className="p-8 ">
      <h3 className="text-3xl font-bold mb-6 text-center">Recent Trips</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2 lg:gap-5">
        {travelPosts &&
          travelPosts.data.map((post: TTrip) => (
            <Card key={post.id} post={post} />
          ))}
      </div>
    </section>
  );
};

export default TravelPosts;

/**
 * Travel Cards: Display up to 10 recent travel posts in card format. Each card should include:
 * TODO: Trip destination
 * TODO: Photo
 * TODO: Brief description
 * TODO: Travel dates
 * TODO: Link to the full travel details page
 * !See More Button: Button at the bottom of the cards that redirects to the Travels page, displaying all trips with search functionality.
 */
