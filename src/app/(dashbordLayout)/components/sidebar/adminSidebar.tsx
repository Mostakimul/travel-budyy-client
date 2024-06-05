import Link from 'next/link';

const AdminSidebar = () => {
  return (
    <ul className="menu bg-base-200 w-56 h-full p-4 gap-2">
      <li>
        <a>Dashboard</a>
      </li>
      <li>
        <details>
          <summary className="mb-2">User Management</summary>
          <ul>
            <li>
              <Link href={'/dashboard/admin/users/all-user'}>All Users</Link>
            </li>
            <li>
              <Link href={'/dashboard/admin/users/add-user'}>Add Users</Link>
            </li>
            <li>
              <Link href={'/dashboard/admin/users/add-admin'}>Add Admin</Link>
            </li>
            <li>
              <Link href={'/dashboard/admin/users/blocked-users'}>
                Blocked Users
              </Link>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <details>
          <summary className="mb-2">Trip Management</summary>
          <ul>
            <li>
              <Link href={'/dashboard/admin/trips/all-trip'}>All Trips</Link>
            </li>
            <li>
              <Link href={'/dashboard/admin/trips/deactivated-trips'}>
                Deactive Trips
              </Link>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <details>
          <summary className="mb-2">Profile Management</summary>
          <ul>
            <li>
              <Link href={'/dashboard/admin/my-profile'}>My Profile</Link>
            </li>
          </ul>
        </details>
      </li>
    </ul>
  );
};

export default AdminSidebar;
