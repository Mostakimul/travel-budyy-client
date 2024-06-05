import Link from 'next/link';

const AdminHomePage = () => {
  return (
    <div className="text-base-200">
      <p>AdminDashboard</p>

      <Link href={'/'} className="btn btn-sm btn-info mx-auto w-full mt-5">
        Home Page
      </Link>
    </div>
  );
};

export default AdminHomePage;
