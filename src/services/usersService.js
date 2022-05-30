import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react';
import { API_BASE_URL } from '../helpers/config';

export const usersListApi = createApi({
    reducerPath: 'usersListApi',
    baseQuery: fetchBaseQuery({baseUrl: API_BASE_URL}),
    endpoints: (builder) => ({
        getUsersList: builder.query({
            query: () =>  '/users',
        }),
        getUser: builder.query({
            query: ({userId}) =>  `/users/${userId}`,
        }),
    }),
});

export const {useGetUsersListQuery, useGetUserQuery} = usersListApi;