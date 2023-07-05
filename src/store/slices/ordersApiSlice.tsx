import {ORDERS_URL} from '../../constants/constants';
import {BannerType, CarouselType, ProductType} from '../../types';
import {OrderType} from '../../types/OrderType';
import {UserType} from '../../types/UserType';
import {apiSlice} from './apiSlice';

export const ordersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (order) => ({
        url: ORDERS_URL,
        method: 'GET',
        body: order,
      }),
    }),
    payOrder: builder.mutation<{order: OrderType}, void>({
      query: () => ({
        url: `${ORDERS_URL}/1/pay.json`,
        method: 'GET',
        // body: order,
      }),
    }),
  }),
});

export const {useCreateOrderMutation, usePayOrderMutation} = ordersApiSlice;
