import Link from 'next/link';

const UserSidebar = () => {
  return (
    <ul className="menu bg-base-200 w-56 h-full p-4 gap-2">
      <li>
        <Link href={'/dashboard'}>Dashboard</Link>
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
          </ul>
        </details>
      </li>
      <li>
        <Link href={'/dashboard/my-profile'}>My Profile</Link>
      </li>
    </ul>
  );
};

export default UserSidebar;
