'use server';

export const registerUser = async (userData: any) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_APP_API_URL}/user/register`,
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
