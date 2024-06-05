import { axiosBaseQuery } from '@/helpers/axios/axiosBaseQuery';
import { createApi } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: axiosBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_APP_API_URL as string,
  }),
  endpoints: () => ({}),
  tagTypes: [
    'users',
    'user',
    'blocked-users',
    'trips',
    'trip',
    'deactive-trips',
  ],
});
