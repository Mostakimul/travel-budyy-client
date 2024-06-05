'use client';
import { RegistervalidationSchema } from '@/app/(commonLayouts)/register/RegisterForm';
import FormWrapper from '@/components/Form/FormWrapper';
import InputField from '@/components/Form/InputField';
import TextareaField from '@/components/Form/TextAreaField';
import { useCreateUserMutation } from '@/redux/api/userApi';
import { zodResolver } from '@hookform/resolvers/zod';
import { FieldValues } from 'react-hook-form';
import { toast } from 'sonner';

const defaultValues = {
  name: '',
  email: '',
  password: '',
  bio: '',
  age: '',
};

const AddUserForm = () => {
  const [createUser] = useCreateUserMutation();

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
      const result = await createUser(modifiedData);
      if (result.data) {
        toast.success('User Added Successfully!');
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
        Add
      </button>
    </FormWrapper>
  );
};

export default AddUserForm;
