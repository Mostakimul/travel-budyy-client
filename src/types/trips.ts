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

export type TBuddyRequest = {
  id: string;
  tripId: string;
  userId: string;
  status: string;
  createdAt: string;
  updatedAt: string;
};

export type TTrip = {
  id: string;
  userId: string;
  destination: string;
  startDate: string;
  endDate: string;
  budget: number;
  description: string;
  tripStatus: string;
  activities: string[];
  createdAt: string;
  updatedAt: string;
  user: TUser;
  buddyRequest: TBuddyRequest[];
};
