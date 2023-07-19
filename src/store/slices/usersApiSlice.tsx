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
      query: (data) => ({
        url: `${USERS_URL}`,
        method: 'POST',
        body: data,
      }),
    }),
    getProfile: builder.query<UserType, void>({
      query: () => ({
        url: `${USERS_URL}/profile`,
        method: 'GET',
        // body: data,
      }),
    }),
    updateProfile: builder.mutation<UserType, UserType>({
      query: (data) => ({
        url: `${USERS_URL}/profile`,
        method: 'PUT',
        body: data,
      }),
    }),
    resetPassword: builder.mutation<
      {password: string; confirm_password: string},
      any
    >({
      query: (data) => ({
        url: `${USERS_URL}/reset-password`,
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useGetProfileQuery,
  useUpdateProfileMutation,
  useResetPasswordMutation,
} = userApiSlice;
