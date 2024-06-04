import { logoutUser } from '@/services/actions/logoutUser';
import { getUserInfo, isLoggedIn } from '@/services/auth.services';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const NavbarUserDropDown = () => {
  const userInfo = getUserInfo();
  const router = useRouter();

  const handleLogout = () => {
    logoutUser(router);
    router.refresh();
  };
  return (
    <>
      {isLoggedIn() ? (
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <Image
                height={50}
                width={50}
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">{userInfo?.name}</a>
            </li>
            <li>
              {userInfo?.role === 'admin' ? (
                <Link href="/dashboard/admin">Dashboard</Link>
              ) : (
                <Link href="/dashboard">Dashboard</Link>
              )}
            </li>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </ul>
        </div>
      ) : (
        <div>
          <ul>
            <li className="font-semibold text-lg cursor-pointer">
              <Link href="/login">Login</Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default NavbarUserDropDown;
