'use client';
import { useGetSingleTripQuery } from '@/redux/api/tripApi';

const SingleTrip = ({ params }: { params: { tripId: string } }) => {
  const { data: trip } = useGetSingleTripQuery(params.tripId);
  return (
    <div className="flex flex-col w-full my-5 gap-5 text-base-200">
      <div className="grid h-20 card rounded-box place-items-center ">
        <h1 className="text-3xl font-bold">Trip Details</h1>
      </div>
      {trip && (
        <div className="grid grid-cols-2 card bg-gray-800 rounded-box place-items-center p-5 text-gray-400">
          <div className="p-5">
            <p className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              Status: {trip.tripStatus}
            </p>
            <h2 className="block mt-1 text-lg leading-tight font-medium text-cyan-400">
              Destination: {trip.destination}
            </h2>
            <p className="mt-2 text-gray-500">{trip.description}</p>
            <div className="mt-4">
              <h3 className="font-semibold">Activities:</h3>
              <p className="list-disc list-inside text-orange-500">
                {trip.activities.join(',')}
              </p>
            </div>
            <div className="mt-4">
              <p>
                <strong>Budget:</strong> $ {trip.budget}
              </p>
              <p>
                <strong>Start Date:</strong>{' '}
                {new Date(trip.startDate).toLocaleDateString()}
              </p>
              <p>
                <strong>End Date:</strong>{' '}
                {new Date(trip.endDate).toLocaleDateString()}
              </p>
            </div>

            <div className="mt-4">
              <h3 className="font-semibold">User Details:</h3>
              <p>
                <strong>Name:</strong> {trip.user.name}
              </p>
              <p>
                <strong>Email:</strong> {trip.user.email}
              </p>
            </div>
          </div>
          {trip?.buddyRequest?.length > 0 && (
            <div className="p-5">
              <p className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                Trips Buddies:
              </p>
              <h2 className="block mt-1 text-lg leading-tight font-medium text-cyan-400">
                <div className="mt-4">
                  {trip?.buddyRequest.map((item: any, index: number) => {
                    return (
                      <div
                        className="mt-2 bg-slate-900 p-5 rounded"
                        key={index}
                      >
                        <p>
                          <strong>Name:</strong> {item?.user?.name}
                        </p>

                        <p>
                          <strong>Email:</strong> {item?.user?.email}
                        </p>
                        <p>
                          <strong>Status:</strong> {item?.status}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </h2>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SingleTrip;
