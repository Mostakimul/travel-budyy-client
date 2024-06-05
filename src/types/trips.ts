import { TUser } from './user';

export type TBuddyRequest = {
  id: string;
  tripId: string;
  userId: string;
  status: string;
  createdAt: string;
  updatedAt: string;
};

export type TBuddyRequestUser = TBuddyRequest & {
  user: TUser;
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
