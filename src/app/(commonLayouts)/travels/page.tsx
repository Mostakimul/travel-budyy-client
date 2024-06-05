'use client';

import Pagination from '@/app/(dashbordLayout)/components/pagination';
import { useGetAllTripQuery } from '@/redux/api/tripApi';
import Link from 'next/link';
import { useState } from 'react';

const Travels = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isError, isLoading } = useGetAllTripQuery({
    page: currentPage,
    limit: 10,
  });

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Trips</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {data &&
          data.trips.map((trip) => (
            <div key={trip.id} className="card w-full bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title text-xl font-bold">
                  {trip.destination}
                </h2>
                <p className="text-sm text-gray-500 mb-4">
                  User: {trip.user.name} ({trip.user.email})
                </p>

                <div className="mb-4">
                  <p className="font-semibold">Description</p>
                  <p>{trip.description}</p>
                </div>
                <div className="mb-4">
                  <p className="font-semibold">Status</p>
                  <p>{trip.tripStatus}</p>
                </div>
                <div className="mb-4">
                  <p className="font-semibold">Budget</p>
                  <p>${trip.budget}</p>
                </div>
                <div className="mb-4">
                  <p className="font-semibold">Dates</p>
                  <p>
                    From: {new Date(trip.startDate).toLocaleDateString()} To:{' '}
                    {new Date(trip.endDate).toLocaleDateString()}
                  </p>
                </div>
                <div className="mb-4">
                  <p className="font-semibold">Activities</p>
                  <ul className="list-disc list-inside">
                    {trip.activities.map((activity, index) => (
                      <li key={index}>{activity}</li>
                    ))}
                  </ul>
                </div>
                <div className="card-actions justify-end">
                  <Link
                    href={`/travels/${trip.id}`}
                    className="btn btn-primary"
                  >
                    Show Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
      {data && (
        <div className="grid place-content-center my-10">
          <Pagination meta={data?.meta} onPageChange={handlePageChange} />
        </div>
      )}
    </div>
  );
};

export default Travels;
