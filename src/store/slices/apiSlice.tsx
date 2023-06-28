import {BASE_URL} from '@env';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

import {ProductType, BannerType, CarouselType} from '../../types';
import {USER_URL} from '../../constants/constants';
import {UserType} from '../../types/UserType';

export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
  tagTypes: ['User'],
  endpoints: (builder) => ({
    getProducts: builder.query<{products: ProductType[]}, void>({
      query: () => 'products.json',
    }),
    getBanners: builder.query<{banners: BannerType[]}, void>({
      query: () => 'banners.json',
    }),
    getCarousel: builder.query<{carousel: CarouselType[]}, void>({
      query: () => 'carousel.json',
    }),
    // login: builder.mutation<
    //   {user: UserType},
    //   {email: string; password: string}
    // >({
    //   query: () => ({
    //     // query: () => ({
    //     url: `${USER_URL}/auth.json`,
    //     method: 'GET',
    //     // body: data,
    //     // }),
    //   }),
    // }),
    // register: builder.mutation<
  }),
});

export const {
  useGetProductsQuery,
  useGetBannersQuery,
  useGetCarouselQuery,
  // useLoginMutation,
} = apiSlice;
