import { getUserInfo } from '@/services/auth.services';
import { useEffect, useState } from 'react';
export type TUserInfo = {
  email: string;
  name: string;
  role: string;
  iat: number;
  exp: number;
};
const NameAndRole = () => {
  const [userInfo, setUserInfo] = useState<TUserInfo | null>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<null | unknown>(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const data = await getUserInfo();
        setUserInfo(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserInfo();
  }, []);

  let content = null;

  if (loading) {
    content = <p>Loading...</p>;
  }
  if (error) {
    content = <p>Error loading user info</p>;
  }

  if (userInfo) {
    content = (
      <>
        <p className="badge badge-secondary badge-outline">
          Name: {userInfo?.name}
        </p>
        <p className="badge badge-accent badge-outline">
          Role: {userInfo?.role}
        </p>
      </>
    );
  }

  return <>{content}</>;
};

export default NameAndRole;
