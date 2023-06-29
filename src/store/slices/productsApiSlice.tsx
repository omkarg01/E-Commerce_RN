import {USERS_URL, USER_URL} from '../../constants/constants';
import {BannerType, CarouselType, ProductType} from '../../types';
import {UserType} from '../../types/UserType';
import {apiSlice} from './apiSlice';

export const productsApiSlice = apiSlice.injectEndpoints({
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
    // register: builder.mutation<{user: UserType}, UserType>({
    //   query: () => ({
    //     url: `${USERS_URL}`,
    //     method: 'GET',
    //     // body: data,
    //   }),
    // }),
  }),
});

export const {useGetProductsQuery, useGetBannersQuery, useGetCarouselQuery} =
  productsApiSlice;
