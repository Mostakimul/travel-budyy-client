'use client';

import FormWrapper from '@/components/Form/FormWrapper';
import InputField from '@/components/Form/InputField';
import { userLogin } from '@/services/actions/userLogin';
import { storeUserInfo } from '@/services/auth.services';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { FieldValues } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

export const LoginvalidationSchema = z.object({
  email: z.string().email('Please enter a valid email!'),
  password: z.string({
    required_error: 'Please enter a password!',
  }),
});

const LoginForm = () => {
  const router = useRouter();

  const handleLogin = async (data: FieldValues) => {
    const toastId = toast.loading('Loading...', { duration: 2000 });
    const modifiedData = {
      email: data.email,
      password: data.password,
    };

    try {
      const result = await userLogin(modifiedData);

      if (result.success) {
        toast.success(result?.message, {
          id: toastId,
        });
        storeUserInfo({ accessToken: result?.data?.accessToken });
        router.push('/');
      } else {
        toast.error(result?.message, {
          id: toastId,
        });
      }
    } catch (error: any) {
      console.log(error?.message);
      toast.error(error?.message);
    }
  };

  return (
    <FormWrapper
      onSubmit={handleLogin}
      resolver={zodResolver(LoginvalidationSchema)}
      defaultValues={{
        email: '',
        password: '',
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
