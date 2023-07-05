import {BASE_URL} from '@env';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

import {ProductType, BannerType, CarouselType} from '../../types';
import {UserType} from '../../types/UserType';

export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
  tagTypes: ['User', 'Product', 'Order'],
  endpoints: (builder) => ({}),
});

// export const {} = apiSlice;
