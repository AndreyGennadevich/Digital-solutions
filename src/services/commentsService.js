import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react';
import { API_BASE_URL } from '../helpers/config';

export const commentsApi = createApi({
    reducerPath: 'commentsApi',
    baseQuery: fetchBaseQuery({baseUrl: API_BASE_URL}),
    endpoints: (builder) => ({
        getCommentsList: builder.query({
            query: ({postId}) =>  ({
                url: `/comments`,
                params: {
                    postId,
                }
            }),
        }),
        postComment: builder.mutation({
            query: (value) => ({
                url: `/comments`,
                method: 'POST',
                body: {
                    ...value
                }
            })
        })
    }),
});

export const {useGetCommentsListQuery, usePostCommentMutation } = commentsApi;