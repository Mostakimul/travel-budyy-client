import { TMeta, TUser } from '@/types';
import { baseApi } from './baseApi';

export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllUser: build.query({
      query: (arg: Record<string, any>) => ({
        url: '/user',
        method: 'GET',
        params: arg,
      }),
      transformResponse: (response: TUser[], meta: TMeta) => {
        return {
          users: response,
          meta,
        };
      },
      providesTags: ['users'],
    }),
    createUser: build.mutation({
      query: (data) => ({
        url: '/user/register',
        method: 'POST',
        data,
      }),
      invalidatesTags: ['users'],
    }),
    createAdmin: build.mutation({
      query: (data) => ({
        url: '/user/create-admin',
        method: 'POST',
        data,
      }),
      invalidatesTags: ['users'],
    }),
    getProfile: build.query({
      query: () => ({
        url: `/user/profile`,
        method: 'GET',
      }),
      providesTags: ['user'],
    }),
    updateProfile: build.mutation({
      query: (data) => {
        return {
          url: `/user/profile`,
          method: 'PATCH',
          data: data,
        };
      },
      invalidatesTags: ['users', 'user'],
    }),
    changeRole: build.mutation({
      query: (data) => {
        return {
          url: `/user/change-role`,
          method: 'PATCH',
          data: data,
        };
      },
      invalidatesTags: ['users', 'user'],
    }),
    blockUser: build.mutation({
      query: (data) => {
        return {
          url: `/user/block-user`,
          method: 'PATCH',
          data: data,
        };
      },
      invalidatesTags: ['users', 'user'],
    }),
    unblockUser: build.mutation({
      query: (data) => {
        return {
          url: `/user/unblock-user`,
          method: 'PATCH',
          data: data,
        };
      },
      invalidatesTags: ['users', 'user'],
    }),
  }),
});

export const {
  useGetAllUserQuery,
  useCreateUserMutation,
  useCreateAdminMutation,
  useGetProfileQuery,
  useUpdateProfileMutation,
  useChangeRoleMutation,
  useBlockUserMutation,
  useUnblockUserMutation,
} = userApi;
