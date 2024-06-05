'use client';
import FormWrapper from '@/components/Form/FormWrapper';
import InputField from '@/components/Form/InputField';
import { useChangePasswordMutation } from '@/redux/api/userApi';
import { zodResolver } from '@hookform/resolvers/zod';
import { FieldValues } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

export const changePasswordValidationSchema = z.object({
  oldPassword: z.string(),
  newPassword: z.string(),
});

const ChangePasswordForm = () => {
  const [changePassword] = useChangePasswordMutation();
  const defaultValues = {
    oldPassword: '',
    newPassword: '',
  };

  const handleRegister = async (data: FieldValues) => {
    const modifiedData = {
      oldPassword: data.oldPassword,
      newPassword: data.newPassword,
    };

    try {
      const result = await changePassword(modifiedData);
      if (result.data) {
        toast.success('User password updated successfully!');
      }
    } catch (error: any) {
      console.log(error?.message);
      toast.error(error?.message);
    }
  };
  return (
    <FormWrapper
      onSubmit={handleRegister}
      resolver={zodResolver(changePasswordValidationSchema)}
      defaultValues={defaultValues}
      resetOnSubmit
    >
      <div className="flex flex-col gap-5 mb-5">
        <InputField
          name="oldPassword"
          label="Old Password"
          type="password"
          placeholder="Enter old password"
        />

        <InputField
          name="newPassword"
          label="New Password"
          type="password"
          placeholder="Enter new password"
        />
      </div>
      <button type="submit" className="btn btn-sm btn-primary mx-auto w-full">
        Update
      </button>
    </FormWrapper>
  );
};

export default ChangePasswordForm;
