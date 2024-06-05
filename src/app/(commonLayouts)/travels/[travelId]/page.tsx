'use client';

import { useGetSingleTripQuery } from '@/redux/api/tripApi';

const TravelDetails = ({ params }: { params: { travelId: string } }) => {
  const { data: trip } = useGetSingleTripQuery(params.travelId);

  return (
    <div className="container  mx-auto p-4">
      <div className="card w-full bg-base-100 shadow-xl">
        {trip && (
          <div className="card-body">
            <h2 className="card-title text-2xl font-bold mb-4">
              {trip.destination}
            </h2>
            <p className="text-sm text-emerald-800 mb-4">
              Organizer: {trip.user.name} ({trip.user.email})
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="font-semibold">Description</p>
                <p className="mb-4">{trip.description}</p>
              </div>
              <div>
                <p className="font-semibold">Status</p>
                <p className="mb-4">{trip.tripStatus}</p>
              </div>
              <div>
                <p className="font-semibold">Budget</p>
                <p className="mb-4">${trip.budget}</p>
              </div>
              <div>
                <p className="font-semibold">Dates</p>
                <p className="mb-4">
                  From: {new Date(trip.startDate).toLocaleDateString()} To:{' '}
                  {new Date(trip.endDate).toLocaleDateString()}
                </p>
              </div>
              <div className="md:col-span-2">
                <p className="font-semibold">Activities</p>
                <ul className="list-disc list-inside mb-4">
                  {trip.activities.map((activity: any, index: number) => (
                    <li key={index}>{activity}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TravelDetails;
