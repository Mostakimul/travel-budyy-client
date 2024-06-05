import FormWrapper from '@/components/Form/FormWrapper';
import InputField from '@/components/Form/InputField';
import { useUpdateTripMutation } from '@/redux/api/tripApi';
import { TTrip } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { FieldValues } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

type TEditTripFormProps = {
  trip: TTrip;
};

const updateTripValidationSchema = z.object({
  destination: z.string().optional(),
  startDate: z.string().optional(),
  endDate: z.string().optional(),
  tripStaus: z.string().optional(),
  budget: z.union([z.string(), z.number()]).optional(),
  activities: z.string().optional(),
  description: z.string().min(1, 'Description is required').optional(),
});

const EditTripForm = ({ trip }: TEditTripFormProps) => {
  const router = useRouter();
  const [updateTrip] = useUpdateTripMutation();
  const defaultValues = {
    destination: trip.destination,
    startDate: trip.startDate,
    endDate: trip.endDate,
    tripStatus: trip.tripStatus,
    budget: trip.budget,
    activities: '',
    description: trip.description,
  };

  const handleUpdate = async (data: FieldValues) => {
    const modifiedData = {
      ...data,
      budget: Number(data.budget),
      activities: [
        ...trip.activities,
        ...data.activities
          .split(',')
          .map((activity: string) => activity.trim()),
      ],
    };
    try {
      const result = await updateTrip({ data: modifiedData, id: trip.id });
      if (result.data) {
        toast.success('Trip updated successfully!');
        router.push('/dashboard/admin/trips/all-trip');
      }
    } catch (error: any) {
      console.log(error?.message);
      toast.error(error?.message);
    }
  };
  return (
    <FormWrapper
      onSubmit={handleUpdate}
      resolver={zodResolver(updateTripValidationSchema)}
      defaultValues={defaultValues}
      resetOnSubmit
    >
      <div className="flex flex-col gap-5 mb-5">
        <InputField
          name="destination"
          label="Destination"
          type="text"
          placeholder="Enter destination"
        />
        <InputField
          name="startDate"
          label="Start Date"
          type="date"
          placeholder="Enter start date"
        />
        <InputField
          name="endDate"
          label="End Date"
          type="date"
          placeholder="Enter end date"
        />
        <InputField
          name="tripStatus"
          label="Trip Status"
          type="text"
          placeholder="Enter trip status"
        />
        <InputField
          name="budget"
          label="Budget"
          type="text"
          placeholder="Enter trip status"
        />
        <span className="text-purple-600">{trip.activities.join(',')}</span>
        <InputField
          name="activities"
          label="Activities"
          type="text"
          placeholder="Enter new activities separated by (,)"
        />
        <InputField
          name="description"
          label="Description"
          type="text"
          placeholder="Enter description"
        />
      </div>
      <button type="submit" className="btn btn-sm btn-primary mx-auto w-full">
        Update
      </button>
    </FormWrapper>
  );
};

export default EditTripForm;
