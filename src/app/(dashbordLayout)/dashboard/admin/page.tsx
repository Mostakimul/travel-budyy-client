import DurationChart from '@/components/DurationChart/DurationChart';
import UserChart from '@/components/UserChart/UserChart';
import Link from 'next/link';

const AdminHomePage = () => {
  return (
    <div className="text-base-200 min-h-screen">
      <p>AdminDashboard</p>

      <Link href={'/'} className="btn btn-sm btn-info mx-auto w-full mt-5">
        Home Page
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 py-5">
        <DurationChart />
        <UserChart />
      </div>
    </div>
  );
};

export default AdminHomePage;
