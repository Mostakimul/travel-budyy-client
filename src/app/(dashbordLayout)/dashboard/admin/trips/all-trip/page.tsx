'use client';
import Error from '@/app/(dashbordLayout)/components/error';
import Pagination from '@/app/(dashbordLayout)/components/pagination';
import TripTable from '@/app/(dashbordLayout)/components/tables/tripTable';
import { useGetAllTripQuery } from '@/redux/api/tripApi';
import { TTrip } from '@/types';
import { useState } from 'react';

export type TChangeRole = {
  email: string;
  role: string;
};

const AllTrips = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isError, isLoading } = useGetAllTripQuery({
    page: currentPage,
    limit: 10,
  });
  const trips = data?.trips;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // const handleBlockUser = async (email: string) => {
  //   const result = await blockUser({ email: email });
  //   if (result.data) {
  //     toast.success('User blocked successfully!');
  //   } else {
  //     toast.error('Something went wrong!');
  //   }
  // };

  // const handleChangeRole = async (data: TChangeRole) => {
  //   let modifiedData = {
  //     ...data,
  //     role: data.role === 'ADMIN' ? 'USER' : 'ADMIN',
  //   };
  //   const result = await changeRole(modifiedData);
  //   if (result.data) {
  //     toast.success('User role changed successfully!');
  //   } else {
  //     toast.error('Something went wrong!');
  //   }
  // };

  let content = null;
  if (isLoading && !isError) {
    content = <tr className="loading loading-bars loading-lg"></tr>;
  } else if (!isLoading && isError) {
    content = (
      <tr>
        <Error message="Error fetching data!" />
      </tr>
    );
  } else if (!isLoading && !isError && trips) {
    content = trips.map((item: TTrip) => (
      <TripTable key={item.id} row={item} />
    ));
  }
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
                <th>Destinantion</th>
                <th>Activities</th>
                <th>Budget</th>
                <th>Organizer</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>{content}</tbody>
          </table>
        </div>

        {trips && (
          <div className="mt-5">
            <Pagination meta={data?.meta} onPageChange={handlePageChange} />
          </div>
        )}
      </div>
    </div>
  );
};

export default AllTrips;