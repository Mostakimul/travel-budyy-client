import { TMeta, TTrip } from '@/types';
import { baseApi } from './baseApi';

export const tripApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllTrip: build.query({
      query: (arg: Record<string, any>) => ({
        url: '/trip',
        method: 'GET',
        params: arg,
      }),
      transformResponse: (response: TTrip[], meta: TMeta) => {
        return {
          trips: response,
          meta,
        };
      },
      providesTags: ['trips'],
    }),

    createTrip: build.mutation({
      query: (data) => ({
        url: '/trip',
        method: 'POST',
        data,
      }),
      invalidatesTags: ['trips'],
    }),
    getSingleTrip: build.query({
      query: (id) => ({
        url: `/trip/${id}`,
        method: 'GET',
      }),
      providesTags: ['trip'],
    }),
    updateTrip: build.mutation({
      query: ({ data, id }) => {
        return {
          url: `/trip/${id}`,
          method: 'PUT',
          data: data,
        };
      },
      invalidatesTags: ['trips', 'trip'],
    }),
    joinBuddyReq: build.mutation({
      query: (id) => {
        return {
          url: `/trip/join-trip/${id}`,
          method: 'POST',
        };
      },
      invalidatesTags: ['trips', 'trip'],
    }),
  }),
});

export const {
  useCreateTripMutation,
  useGetAllTripQuery,
  useGetSingleTripQuery,
  useJoinBuddyReqMutation,
  useUpdateTripMutation,
} = tripApi;
