import Image from 'next/image';
import Link from 'next/link';

import RegisterForm from './RegisterForm';

const RegisterPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="card w-3/4 md:w-2/4 bg-base-100 grid p-5 place-items-center shadow-xl">
        <Image src="/assets/Logo.png" height={100} width={100} alt="Logo" />
        <div className="text-3xl my-5">Register</div>

        <RegisterForm />
        <div className="mt-5">
          <span>Already have an account? </span>
          <Link href="/login" className="link link-primary">
            Login Now!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
