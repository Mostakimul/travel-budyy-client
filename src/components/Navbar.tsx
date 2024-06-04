'use client';
import Image from 'next/image';
import Link from 'next/link';
import NavbarUserDropDown from './NavbarUserDropDown';

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li className="font-semibold text-lg">
              <Link href="/">Home</Link>
            </li>

            <li className="font-semibold text-lg">
              <Link href="/about-us">About Us</Link>
            </li>
            <li className="font-semibold text-lg">
              <Link href="/travels">Travels</Link>
            </li>
          </ul>
        </div>
        <Link href="/">
          <Image src="/assets/Logo.png" height={50} width={50} alt="Logo" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="font-semibold text-lg">
            <Link href="/">Home</Link>
          </li>

          <li className="font-semibold text-lg">
            <Link href="/about-us">About Us</Link>
          </li>
          <li className="font-semibold text-lg">
            <Link href="/travels">Travels</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <NavbarUserDropDown />
      </div>
    </div>
  );
};

export default Navbar;
