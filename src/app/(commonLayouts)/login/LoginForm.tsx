'use client';

import FormWrapper from '@/components/Form/FormWrapper';
import InputField from '@/components/Form/InputField';
import { zodResolver } from '@hookform/resolvers/zod';
import { FieldValues } from 'react-hook-form';
import { z } from 'zod';

export const LoginvalidationSchema = z.object({
  email: z.string().email('Please enter a valid email!'),
  password: z.string({
    required_error: 'Please enter a password!',
  }),
});

const LoginForm = () => {
  const handleLogin = (data: FieldValues) => {
    console.log(data);
  };
  return (
    <FormWrapper
      onSubmit={handleLogin}
      resolver={zodResolver(LoginvalidationSchema)}
      defaultValues={{
        email: '',
      }}
    >
      <div className="flex flex-col gap-5 mb-5">
        <InputField
          name="email"
          label="Email"
          type="text"
          placeholder="Type here"
        />
        <InputField
          name="password"
          label="Password"
          type="password"
          placeholder="Type here"
        />
      </div>
      <button type="submit" className="btn btn-sm btn-primary  mx-auto w-full">
        Login
      </button>
    </FormWrapper>
  );
};

export default LoginForm;
