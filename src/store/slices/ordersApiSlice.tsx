import {ORDER_URL, USERS_URL, USER_URL} from '../../constants/constants';
import {BannerType, CarouselType, ProductType} from '../../types';
import {OrderType} from '../../types/OrderType';
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
    payOrder: builder.mutation<{order: OrderType}, void>({
      query: () => ({
        url: `${ORDER_URL}/1/pay.json`,
        method: 'GET',
        // body: order,
      }),
    }),
  }),
});

export const {useCreateOrderMutation, usePayOrderMutation} = ordersApiSlice;
