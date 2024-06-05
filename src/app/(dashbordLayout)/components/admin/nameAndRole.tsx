import { getUserInfo } from '@/services/auth.services';

const NameAndRole = async () => {
  const userInfo = await getUserInfo();
  return (
    <>
      <p className="badge badge-secondary badge-outline">
        Name: {userInfo.name}
      </p>
      <p className="badge badge-accent badge-outline">Role: {userInfo.role}</p>
    </>
  );
};

export default NameAndRole;
