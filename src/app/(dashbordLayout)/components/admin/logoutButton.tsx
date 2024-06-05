import { logoutUser } from '@/services/actions/logoutUser';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { FaSignOutAlt } from 'react-icons/fa';

const LogoutButton = ({ router }: { router: AppRouterInstance }) => {
  const handleLogout = () => {
    logoutUser(router);
  };
  return (
    <button
      onClick={handleLogout}
      className="badge badge-error badge-outline flex items-center gap-2 mx-2 cursor-pointer"
    >
      <FaSignOutAlt />
      Logout
    </button>
  );
};

export default LogoutButton;
