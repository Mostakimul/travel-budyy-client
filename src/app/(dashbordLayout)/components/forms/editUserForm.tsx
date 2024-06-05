'use client';
import FormWrapper from '@/components/Form/FormWrapper';
import InputField from '@/components/Form/InputField';
import TextareaField from '@/components/Form/TextAreaField';
import { useUpdateUserMutation } from '@/redux/api/userApi';
import { TUserAndProfile } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { FieldValues } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

export const updateValidationSchema = z.object({
  name: z.string().optional(),
  bio: z.string().optional(),
  age: z.union([z.string(), z.number()]).optional(),
});

const EditUserForm = ({ user }: { user: TUserAndProfile }) => {
  const [updateUser] = useUpdateUserMutation();
  const router = useRouter();
  const defaultValues = {
    name: user.name,
    bio: user.userProfile.bio,
    age: user.userProfile.age,
  };

  const handleRegister = async (data: FieldValues) => {
    const modifiedData = {
      email: user.email,
      name: data.name,
      profile: {
        bio: data.bio,
        age: Number(data.age),
      },
    };

    try {
      const result = await updateUser(modifiedData);
      if (result.data) {
        toast.success('User updated successfully!');
        router.back();
      }
    } catch (error: any) {
      console.log(error?.message);
      toast.error(error?.message);
    }
  };

  return (
    <FormWrapper
      onSubmit={handleRegister}
      resolver={zodResolver(updateValidationSchema)}
      defaultValues={defaultValues}
      resetOnSubmit
    >
      <div className="flex flex-col gap-5 mb-5">
        <InputField
          name="name"
          label="Name"
          type="text"
          placeholder="Enter Name"
        />
        <div>
          <h3 className="mb-5 font-bold underline text-center text-primary">
            Profile Details
          </h3>
          <div className="flex flex-col w-full lg:flex-row gap-5">
            <TextareaField name="bio" placeholder="Type your bio..." />
            <InputField
              name="age"
              label="Age"
              type="number"
              placeholder="Enter Age"
            />
          </div>
        </div>
      </div>
      <button type="submit" className="btn btn-sm btn-primary mx-auto w-full">
        Update
      </button>
    </FormWrapper>
  );
};

export default EditUserForm;
