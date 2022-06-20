import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const headers = {
      'Access-Control-Allow-Credentials' : true,
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Methods':'GET',
      'Access-Control-Allow-Headers':'application/json',
};

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({ baseUrl: `http://localhost:4000` }),
    endpoints: (builder) => ({
      getProductsByCategories: builder.query({
        query: (category) => ({
            url: `/products?categoria=${category}`,
            method: 'GET',
        })
      })
    //   }),
    //   getDetailById: builder.query({
    //     query: (id) => ({
    //         url: `/title/get-details?tconst=${id}`,
    //         method: 'GET',
    //         headers
    //     })
    //   }),
    //   getRatingsById: builder.query({
    //     query: (id) => ({
    //         url: `/title/get-ratings?tconst=${id}`,
    //         method: 'GET',
    //         headers
    //     })
    //   }),
    //   getTopCastById: builder.query({
    //     query: (id) => ({
    //         url: `/title/get-top-cast?tconst=${id}`,
    //         method: 'GET',
    //         headers
    //     })
    //   }),
    //   getOverviewDetailsById: builder.query({
    //     query: (id) => ({
    //         url: `/title/get-overview-details?tconst=${id}`,
    //         method: 'GET',
    //         headers
    //     })
    //   }),
    //   getFullCreditsById: builder.query({
    //     query: (id) => ({
    //         url: `/title/get-full-credits?tconst=${id}`,
    //         method: 'GET',
    //         headers
    //     })
    })
});

export const { 
  useGetProductsByCategoriesQuery, 
//   useGetDetailByIdQuery,
//   useGetRatingsByIdQuery,
//   useGetTopCastByIdQuery,
//   useGetOverviewDetailsByIdQuery,
//   useGetFullCreditsByIdQuery,
} = productsApi;