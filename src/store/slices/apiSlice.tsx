import {BASE_URL} from '@env';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

import {ProductType, BannerType, CarouselType} from '../../types';
import {UserType} from '../../types/UserType';
import {USER_URL} from '../../constants/constants';

export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
  tagTypes: ['User', 'Products', 'Orders'],
  endpoints: (builder) => ({
    // getProducts: builder.query<{products: ProductType[]}, void>({
    //   query: () => 'products.json',
    // }),
    // getBanners: builder.query<{banners: BannerType[]}, void>({
    //   query: () => 'banners.json',
    // }),
    // getCarousel: builder.query<{carousel: CarouselType[]}, void>({
    //   query: () => 'carousel.json',
    // }),
    // login: builder.mutation<{user: UserType}, void>({
    //   query: () => ({
    //     url: `${USER_URL}/auth.json`,
    //     method: 'GET',
    //     // body: data,
    //   }),
    // }),
  }),
});

export const {
  // useGetProductsQuery,
  // useGetBannersQuery,
  // useGetCarouselQuery,
  // useLoginMutation,
} = apiSlice;
