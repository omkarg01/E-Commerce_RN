import {USERS_URL} from '../../constants/constants';
import {UserType} from '../../types/UserType';
import {apiSlice} from './apiSlice';

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<
      {user: UserType},
      {email: string; password: string}
    >({
      query: (data) => ({
        url: `${USERS_URL}/auth`,
        method: 'POST',
        body: data,
      }),
    }),
    register: builder.mutation<{user: UserType}, UserType>({
      query: () => ({
        url: `${USERS_URL}`,
        method: 'GET',
        // body: data,
      }),
    }),
    getProfile: builder.query<UserType, void>({
      query: () => ({
        url: `${USERS_URL}/profile.json`,
        method: 'GET',
        // body: data,
      }),
    }),
    updateProfile: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/profile`,
        method: 'PUT',
        body: data,
      }),
    }),
  }),
});

export const {useRegisterMutation, useLoginMutation, useGetProfileQuery} =
  userApiSlice;
