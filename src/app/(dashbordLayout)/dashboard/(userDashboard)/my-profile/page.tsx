'use client';
import { useGetProfileQuery } from '@/redux/api/userApi';
import Link from 'next/link';

const MyProfile = () => {
  const { data: user } = useGetProfileQuery(undefined);
  return (
    <div className="flex flex-col w-full my-5 gap-5 text-base-200">
      <div className="grid h-20 card rounded-box place-items-center ">
        <h1 className="text-3xl font-bold">My Profile</h1>
      </div>
      {user && (
        <div className="grid grid-cols-2 card bg-gray-800 rounded-box place-items-center p-5 text-gray-400">
          <div className="p-5">
            <p className="uppercase tracking-wide text-xl text-indigo-500 font-semibold">
              Name: {user.name}
            </p>
            <p className="block mt-1 text-lg leading-tight font-medium text-cyan-400">
              Email: {user.email}
            </p>
            <p className="block mt-1 text-lg leading-tight font-medium text-cyan-400">
              Role: {user.role}
            </p>
            <p className="block mt-1 text-lg leading-tight font-medium text-cyan-400">
              Age: {user.userProfile.age}
            </p>
            <p className="block mt-1 text-lg leading-tight font-medium text-cyan-400">
              Age: {user.userProfile.bio}
            </p>
          </div>
          <Link
            href={`/dashboard/user/${user.id}`}
            className="btn btn-sm btn-info mx-auto w-full mt-5"
          >
            Edit Profile
          </Link>
        </div>
      )}
    </div>
  );
};

export default MyProfile;
