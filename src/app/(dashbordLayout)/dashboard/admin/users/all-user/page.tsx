'use client';
import Error from '@/app/(dashbordLayout)/components/error';
import Pagination from '@/app/(dashbordLayout)/components/pagination';
import UserTable from '@/app/(dashbordLayout)/components/tables/userTable';
import { useGetAllUserQuery } from '@/redux/api/userApi';
import { TUser } from '@/types';
import { useState } from 'react';

const AllUser = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isError, isLoading } = useGetAllUserQuery({
    page: currentPage,
    limit: 10,
  });
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const users = data?.users;
  const meta = data?.meta;

  let content = null;
  if (isLoading && !isError) {
    content = <tr className="loading loading-bars loading-lg"></tr>;
  } else if (!isLoading && isError) {
    content = (
      <tr>
        <Error message="Error fetching data!" />
      </tr>
    );
  } else if (!isLoading && !isError && users) {
    content = users.map((item: TUser) => (
      <UserTable key={item.id} row={item} />
    ));
  }

  console.log(data);
  return (
    <div className="flex flex-col w-full my-5 gap-5">
      <div className="grid h-20 card rounded-box place-items-center ">
        <h1 className="text-3xl font-bold">All Users</h1>
      </div>
      <div className="grid card rounded-box place-items-center p-5">
        <div className="overflow-x-auto w-full">
          <table className="table text-center">
            {/* head */}
            <thead className="text-base-200 text-lg">
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>{content}</tbody>
          </table>
        </div>

        {users && (
          <div className="mt-5">
            <Pagination meta={data?.meta} onPageChange={handlePageChange} />
          </div>
        )}
      </div>
    </div>
  );
};

export default AllUser;
