'use server';

export const userLogin = async (userData: any) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_APP_API_URL}/auth/login`,
    {
      method: 'POST',
      body: JSON.stringify(userData),
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
  const userInfo = await response.json();
  return userInfo;
};
