'use client';
import Error from '@/app/(dashbordLayout)/components/error';
import Pagination from '@/app/(dashbordLayout)/components/pagination';
import TripTable from '@/app/(dashbordLayout)/components/tables/tripTable';
import { useGetAllTripQuery, useUpdateTripMutation } from '@/redux/api/tripApi';
import { TTrip } from '@/types';
import { useState } from 'react';
import { toast } from 'sonner';

export type TChangeRole = {
  email: string;
  role: string;
};

const AllTrip = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isError, isLoading } = useGetAllTripQuery({
    page: currentPage,
    limit: 10,
  });
  const [updateTrip] = useUpdateTripMutation();

  const trips = data?.trips;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleDisable = async (id: string) => {
    const data = {
      tripStatus: 'DEACTIVE',
    };
    const result = await updateTrip({ data, id });
    if (result.data) {
      toast.success('Trip deactivated successfully!');
    } else {
      toast.error('Something went wrong!');
    }
  };

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
      <TripTable key={item.id} row={item} handleDisable={handleDisable} />
    ));
  }
  return (
    <div className="flex flex-col w-full my-5 gap-5 text-base-200">
      <div className="grid h-20 card rounded-box place-items-center ">
        <h1 className="text-3xl font-bold">All Trips</h1>
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

export default AllTrip;
