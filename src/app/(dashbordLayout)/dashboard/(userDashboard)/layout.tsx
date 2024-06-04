import React from 'react';
import { UserLayout } from './layout/userLayout';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <UserLayout>
        <div>{children}</div>
      </UserLayout>
    </div>
  );
};

export default DashboardLayout;
