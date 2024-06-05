'use client';
import FormWrapper from '@/components/Form/FormWrapper';
import InputField from '@/components/Form/InputField';
import { useCreateTripMutation } from '@/redux/api/tripApi';
import { getUserInfo } from '@/services/auth.services';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { FieldValues } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

const updateTripValidationSchema = z.object({
  destination: z.string().optional(),
  startDate: z.string().optional(),
  endDate: z.string().optional(),
  budget: z.union([z.string(), z.number()]).optional(),
  activities: z.string().optional(),
  description: z.string().min(1, 'Description is required').optional(),
});

const CreateTripForm = () => {
  const user = getUserInfo();
  const router = useRouter();
  const [createTrip] = useCreateTripMutation();
  const defaultValues = {
    destination: '',
    startDate: '',
    endDate: '',
    budget: '',
    activities: '',
    description: '',
  };

  const handleUpdate = async (data: FieldValues) => {
    const modifiedData = {
      ...data,
      budget: Number(data.budget),
      activities: [
        ...data.activities
          .split(',')
          .map((activity: string) => activity.trim()),
      ],
    };
    try {
      const result = await createTrip(modifiedData);
      if (result.data) {
        toast.success('Trip created successfully!');
        user.role === 'user'
          ? router.push('/dashboard/trips/all-trip')
          : router.push('/dashboard/admin/trips/all-trip');
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
          name="budget"
          label="Budget"
          type="text"
          placeholder="Enter trip status"
        />
        <InputField
          name="activities"
          label="Activities"
          type="text"
          placeholder="Enter activities separated by (,)"
        />
        <InputField
          name="description"
          label="Description"
          type="text"
          placeholder="Enter description"
        />
      </div>
      <button type="submit" className="btn btn-sm btn-primary mx-auto w-full">
        Add Trip
      </button>
    </FormWrapper>
  );
};

export default CreateTripForm;
