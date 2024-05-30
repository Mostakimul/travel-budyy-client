import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="relative bg-cover bg-center h-screen w-full flex items-center justify-center hero-bg">
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="relative z-10 text-center text-white p-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to Travel Buddy
        </h1>
        <p className="text-lg md:text-2xl mb-8">
          Find A Travel Buddy, Share Experiences
        </p>
        <Link
          href="/travels"
          className="btn btn-primary px-6 py-3 text-lg font-semibold rounded-md shadow-lg"
        >
          Share Your Trip
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
