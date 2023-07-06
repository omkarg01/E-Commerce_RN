import {ORDERS_URL} from '../../constants/constants';
import {BannerType, CarouselType, ProductType} from '../../types';
import {OrderType} from '../../types/OrderType';
import {UserType} from '../../types/UserType';
import {apiSlice} from './apiSlice';

export const ordersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation<{order: OrderType}, OrderType>({
      query: (order) => ({
        url: ORDERS_URL,
        method: 'POST',
        body: order,
      }),
    }),
    payOrder: builder.mutation<{order: OrderType}, OrderType>({
      query: (order) => ({
        url: `${ORDERS_URL}/1/pay`,
        method: 'PUT',
        body: order,
      }),
    }),
  }),
});

export const {useCreateOrderMutation, usePayOrderMutation} = ordersApiSlice;
