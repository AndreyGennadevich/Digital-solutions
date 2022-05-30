import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react';
import { API_BASE_URL } from '../helpers/config';

export const postsApi = createApi({
    reducerPath: 'postsApi',
    baseQuery: fetchBaseQuery({baseUrl: API_BASE_URL}),
    endpoints: (builder) => ({
        getPostsList: builder.query({
            query: ({userId}) =>  ({
                url: `/posts`,
                params: {
                    userId,
                }
            }),
        }),
        getPost: builder.query({
            query: ({postId}) =>  ({
                url: `/posts/${postId}`,
            }),
        }),
    }),
});

export const {useGetPostsListQuery, useGetPostQuery } = postsApi;