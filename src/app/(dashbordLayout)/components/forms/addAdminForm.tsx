'use client';
import FormWrapper from '@/components/Form/FormWrapper';
import InputField from '@/components/Form/InputField';
import { useCreateAdminMutation } from '@/redux/api/userApi';
import { zodResolver } from '@hookform/resolvers/zod';
import { FieldValues } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

const defaultValues = {
  name: '',
  email: '',
  password: '',
};

const AdminRegisterValidationSchema = z.object({
  name: z.string({
    required_error: 'Please enter your name!',
  }),
  email: z
    .string({
      required_error: 'Please enter your email!',
    })
    .email('Please enter a valid email!'),
  password: z.string({
    required_error: 'Please enter a password!',
  }),
});

const AddAdminForm = () => {
  const [createAdmin] = useCreateAdminMutation();

  const handleRegister = async (data: FieldValues) => {
    const modifiedData = {
      name: data.name,
      email: data.email,
      password: data.password,
    };

    try {
      const result = await createAdmin(modifiedData);
      if (result.data) {
        toast.success('Admin Created Successfully!');
      }
    } catch (error: any) {
      console.log(error?.message);
      toast.error(error?.message);
    }
  };

  return (
    <FormWrapper
      onSubmit={handleRegister}
      resolver={zodResolver(AdminRegisterValidationSchema)}
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
        <InputField
          name="email"
          label="Email"
          type="email"
          placeholder="Enter Email"
        />
        <InputField
          name="password"
          label="Password"
          type="password"
          placeholder="Enter Password"
        />
      </div>
      <button type="submit" className="btn btn-sm btn-primary mx-auto w-full">
        Add
      </button>
    </FormWrapper>
  );
};

export default AddAdminForm;
