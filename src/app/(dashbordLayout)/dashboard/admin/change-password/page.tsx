import ChangePasswordForm from '@/app/(dashbordLayout)/components/forms/changePasswordForm';

const ChangePassword = () => {
  return (
    <div className="flex flex-col w-full my-5 gap-5">
      <div className="grid h-20 card rounded-box place-items-center ">
        <h1 className="text-3xl font-bold">Change Password</h1>
      </div>
      <div className="grid card rounded-box place-items-center p-5 text-gray-900">
        <ChangePasswordForm />
      </div>
    </div>
  );
};

export default ChangePassword;
