export type TUser = {
  id: string;
  name: string;
  email: string;
  password: string;
  role: string;
  status: string;
  createdAt: string;
  updatedAt: string;
};

type TUserProfile = {
  id: string;
  bio: string;
  age: number;
};

export type TUserAndProfile = TUser & {
  userProfile: TUserProfile;
};
