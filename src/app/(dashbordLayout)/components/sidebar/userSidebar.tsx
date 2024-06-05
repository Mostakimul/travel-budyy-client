import Link from 'next/link';

const UserSidebar = () => {
  return (
    <ul className="menu bg-base-200 w-56 h-full p-4 gap-2">
      <li>
        <a>Dashboard</a>
      </li>
      <li>
        <details>
          <summary className="mb-2">Trip Management</summary>
          <ul>
            <li>
              <Link href={'/dashboard/trips/all-trip'}>All Trips</Link>
            </li>
            <li>
              <Link href={'/dashboard/trips/create-trip'}>Add Trip</Link>
            </li>
            <li>
              <Link href={'/dashboard/trips/deactive-trips'}>
                Deactive Trips
              </Link>
            </li>
          </ul>
        </details>
      </li>
    </ul>
  );
};

export default UserSidebar;
