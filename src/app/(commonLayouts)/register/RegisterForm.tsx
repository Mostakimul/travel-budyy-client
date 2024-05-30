'use client';

import FormWrapper from '@/components/Form/FormWrapper';
import InputField from '@/components/Form/InputField';
import TextareaField from '@/components/Form/TextAreaField';
import { registerUser } from '@/services/actions/registerUser';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { FieldValues } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

export const RegistervalidationSchema = z.object({
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
  age: z.string(),
  bio: z.string(),
});

const RegisterForm = () => {
  const router = useRouter();
  const handleRegister = async (data: FieldValues) => {
    const modifiedData = {
      name: data.name,
      email: data.email,
      password: data.password,
      profile: {
        bio: data.bio,
        age: Number(data.age),
      },
    };

    try {
      const result = await registerUser(modifiedData);
      console.log(result);
      if (result.success) {
        toast.success(result?.message);
        router.push('/login');
      }
    } catch (error: any) {
      console.log(error?.message);
      toast.error(error?.message);
    }
  };

  return (
    <FormWrapper
      onSubmit={handleRegister}
      resolver={zodResolver(RegistervalidationSchema)}
    >
      <div className="flex flex-col gap-5 mb-5">
        <InputField
          name="name"
          label="Name"
          type="text"
          placeholder="Type here"
        />
        <InputField
          name="email"
          label="Email"
          type="email"
          placeholder="Type here"
        />
        <InputField
          name="password"
          label="Password"
          type="password"
          placeholder="Type here"
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
              placeholder="Type here"
            />
          </div>
        </div>
      </div>
      <button type="submit" className="btn btn-sm btn-primary mx-auto w-full">
        Register
      </button>
    </FormWrapper>
  );
};

export default RegisterForm;
