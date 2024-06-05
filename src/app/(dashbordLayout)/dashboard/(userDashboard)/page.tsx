import Link from 'next/link';

const UserDashboard = () => {
  return (
    <div className="text-base-200">
      <p>UserDashboard</p>

      <Link href={'/'} className="btn btn-sm btn-info mx-auto w-full mt-5">
        Home Page
      </Link>
    </div>
  );
};

export default UserDashboard;
