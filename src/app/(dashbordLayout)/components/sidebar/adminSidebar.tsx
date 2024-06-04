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
              <a>All Users</a>
            </li>
            <li>
              <a>Add Users</a>
            </li>
            <li>
              <a>Add Admin</a>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <details>
          <summary className="mb-2">Trip Management</summary>
          <ul>
            <li>
              <a>All Trips</a>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <details>
          <summary className="mb-2">Profile Management</summary>
          <ul>
            <li>
              <a>My Profile</a>
            </li>
          </ul>
        </details>
      </li>
    </ul>
  );
};

export default AdminSidebar;
