'use client';
import {
  useGetSingleTripQuery,
  useJoinBuddyReqMutation,
  useUpdateTravelReqMutation,
} from '@/redux/api/tripApi';
import { getUserInfo } from '@/services/auth.services';
import { toast } from 'sonner';

const hasUserRequested = (buddyRequest: any, userEmail: string) => {
  return buddyRequest.some((request: any) => request.user.email === userEmail);
};
const SingleTrip = ({ params }: { params: { tripId: string } }) => {
  const { data: trip } = useGetSingleTripQuery(params.tripId);
  const [joinBuddyReq] = useJoinBuddyReqMutation();
  const [updateTravelReq] = useUpdateTravelReqMutation();
  const user = getUserInfo();

  let userHasRequested = null;
  if (trip) {
    userHasRequested = hasUserRequested(trip?.buddyRequest, user?.email);
  }

  const handleJoinTrip = async (id: string) => {
    try {
      const result = await joinBuddyReq(id);
      if (result.data) {
        toast.success('Request sent successfully!');
      }
    } catch (error: any) {
      console.log(error?.message);
      toast.error(error?.message);
    }
  };

  const handleRequest = async (decider: string, id: string) => {
    try {
      const result = await updateTravelReq({
        data: { status: decider },
        id,
      });
      if (result.data) {
        toast.success('Request updated successfully!');
      }
    } catch (error: any) {
      console.log(error?.message);
      toast.error(error?.message);
    }
  };

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
          <div className="p-5">
            {trip?.buddyRequest?.length > 0 && (
              <>
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
                          {user.role === 'admin' ||
                            user.role === 'super_admin' ||
                            (item?.status === 'PENDING' &&
                              user.email === trip.user.email && (
                                <>
                                  <button
                                    onClick={() =>
                                      handleRequest('APPROVED', item.id)
                                    }
                                    className="btn btn-sm btn-info mx-auto w-full mt-5"
                                  >
                                    Accept
                                  </button>
                                  <button
                                    onClick={() =>
                                      handleRequest('REJECTED', item.id)
                                    }
                                    className="btn btn-sm btn-error mx-auto w-full mt-5"
                                  >
                                    Reject
                                  </button>
                                </>
                              ))}
                        </div>
                      );
                    })}
                  </div>
                </h2>
              </>
            )}

            {user.email !== trip.user.email && (
              <button
                onClick={() => handleJoinTrip(trip.id)}
                className="btn btn-sm btn-info mx-auto w-full mt-5"
                disabled={userHasRequested}
              >
                {userHasRequested ? 'Already Sent Request' : 'Request To Join'}
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleTrip;
