'use client';

import UserSidebar from '@/app/(dashbordLayout)/components/sidebar/userSidebar';
import React from 'react';
import { RiAlignJustify } from 'react-icons/ri';

interface Props {
  children: React.ReactNode;
}

export const UserLayout = ({ children }: Props) => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center p-2 bg-gray-900 md:m-2 md:rounded-md shadow-md">
        {/* Mobile breadcum icon */}
        <div className="w-full flex items-center justify-end">
          <label
            htmlFor="my-drawer-2"
            className="drawer-button lg:hidden text-gray-200"
          >
            <RiAlignJustify size={30} />
          </label>
        </div>

        {/* Page goes here */}

        <div className="w-full h-full p-2">{children}</div>
      </div>
      <div className="drawer-side md:m-2 md:rounded-md shadow-md">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <UserSidebar />
      </div>
    </div>
  );
};
