import {ORDER_URL, USERS_URL, USER_URL} from '../../constants/constants';
import {BannerType, CarouselType, ProductType} from '../../types';
import {UserType} from '../../types/UserType';
import {apiSlice} from './apiSlice';

export const ordersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (order) => ({
        url: ORDER_URL,
        method: 'GET',
        body: order,
      }),
    }),
  }),
});

export const {useCreateOrderMutation} = ordersApiSlice;
