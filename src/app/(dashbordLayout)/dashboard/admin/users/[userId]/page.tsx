'use client';

import EditUserForm from '@/app/(dashbordLayout)/components/forms/editUserForm';
import { useGetSingleUserQuery } from '@/redux/api/userApi';

export default function EditUser({ params }: { params: { userId: string } }) {
  const { data } = useGetSingleUserQuery(params.userId);

  return (
    <div className="flex flex-col w-full my-5 gap-5">
      <div className="grid h-20 card rounded-box place-items-center ">
        <h1 className="text-3xl font-bold">Edit User</h1>
      </div>
      <div className="grid card rounded-box place-items-center p-5 text-gray-900">
        {data && <EditUserForm user={data} />}
      </div>
    </div>
  );
}
