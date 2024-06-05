import CreateTripForm from '@/app/(dashbordLayout)/components/forms/createTripForm';

const CreateTrip = () => {
  return (
    <div className="flex flex-col w-full my-5 gap-5 text-base-200">
      <div className="grid h-20 card rounded-box place-items-center ">
        <h1 className="text-3xl font-bold">Create Trip</h1>
      </div>
      <div className="grid card rounded-box place-items-center p-5 text-gray-900">
        <CreateTripForm />
      </div>
    </div>
  );
};

export default CreateTrip;
