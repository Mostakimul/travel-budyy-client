'use client';
import EditTripForm from '@/app/(dashbordLayout)/components/forms/editTripForm';
import { useGetSingleTripQuery } from '@/redux/api/tripApi';

const EditTrip = ({ params }: { params: { id: string } }) => {
  const { data: trip } = useGetSingleTripQuery(params.id);
  return (
    <div className="flex flex-col w-full my-5 gap-5">
      <div className="grid h-20 card rounded-box place-items-center ">
        <h1 className="text-3xl font-bold">Edit Trip</h1>
      </div>
      <div className="grid card rounded-box place-items-center p-5 text-gray-900">
        {trip && <EditTripForm trip={trip} />}
      </div>
    </div>
  );
};

export default EditTrip;
