import setAccessToken from './setAccessToken';

export const userLogin = async (userData: any) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_APP_API_URL}/auth/login`,
    {
      method: 'POST',
      body: JSON.stringify(userData),
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    },
  );
  const userInfo = await response.json();
  if (userInfo?.data?.accessToken) {
    setAccessToken(userInfo?.data?.accessToken);
  }
  return userInfo;
};
