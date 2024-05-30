import { TTrip } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

const Card = ({ post }: { post: TTrip }) => {
  return (
    <div className="card w-full bg-base-100 shadow-xl image-full">
      <figure>
        <Image
          src="/assets/cardBg.png"
          alt="trip"
          fill
          className="rounded-md"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{post.destination}</h2>
        <p>{post.description.slice(0, 50)}...</p>
        <div className="card-actions justify-end">
          <Link href={'/'} className="btn btn-primary">
            Show Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
