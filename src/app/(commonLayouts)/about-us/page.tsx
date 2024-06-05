import Image from 'next/image';

const AboutUs = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="card w-full bg-base-100 shadow-xl mb-4">
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold">About Us</h2>
          <p className="text-lg mt-4">
            Welcome to our website! We are dedicated to providing you with the
            best experience possible. Heres a bit more about who we are and what
            we do.
          </p>
        </div>
      </div>

      <div className="card w-full bg-base-100 shadow-xl mb-4">
        <div className="card-body">
          <h2 className="card-title text-xl font-bold">Mission Statement</h2>
          <p className="mt-2">
            Our mission is to connect travelers with unforgettable experiences
            around the world. We strive to make travel planning seamless and
            enjoyable by offering a comprehensive platform where users can
            discover, book, and share their travel adventures. Whether you are
            looking for a relaxing getaway or an adventurous expedition, our
            goal is to provide you with the tools and inspiration to make your
            travel dreams a reality.
          </p>
        </div>
      </div>

      <div className="card w-full bg-base-100 shadow-xl mb-4">
        <div className="card-body">
          <h2 className="card-title text-xl font-bold">Our Team</h2>
          <p className="mt-2">
            We are a diverse group of professionals dedicated to [websites
            purpose or mission]. Our team includes experts in [fields or
            specializations], all working together to provide you with the best
            service possible.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            <div className="flex flex-col items-center">
              <Image
                height={24}
                width={24}
                src="/assets/Logo.png"
                alt="Team Member 1"
                className="w-24 h-24 rounded-full mb-2"
              />
              <h3 className="font-semibold">Team Member 1</h3>
              <p className="text-sm text-gray-500">Role/Position</p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                height={24}
                width={24}
                src="/assets/Logo.png"
                alt="Team Member 2"
                className="w-24 h-24 rounded-full mb-2"
              />
              <h3 className="font-semibold">Team Member 2</h3>
              <p className="text-sm text-gray-500">Role/Position</p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                height={24}
                width={24}
                src="/assets/Logo.png"
                alt="Team Member 3"
                className="w-24 h-24 rounded-full mb-2"
              />
              <h3 className="font-semibold">Team Member 3</h3>
              <p className="text-sm text-gray-500">Role/Position</p>
            </div>
          </div>
        </div>
      </div>

      <div className="card w-full bg-base-100 shadow-xl mb-4">
        <div className="card-body">
          <h2 className="card-title text-xl font-bold">Contact Us</h2>
          <p className="mt-2">
            Wed love to hear from you! Feel free to reach out to us at:
          </p>
          <ul className="list-none mt-4">
            <li className="mb-2">
              <strong>Email:</strong>{' '}
              <a href="mailto:info@example.com" className="text-blue-500">
                info@example.com
              </a>
            </li>
            <li className="mb-2">
              <strong>Phone:</strong>{' '}
              <a href="tel:+1234567890" className="text-blue-500">
                +1234567890
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
