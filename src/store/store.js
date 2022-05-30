import {configureStore} from "@reduxjs/toolkit";
import { usersListApi } from "../services/usersService";
import { postsApi } from "../services/postsService";
import { commentsApi } from "../services/commentsService";

export const store = configureStore({
    reducer: {
        [usersListApi.reducerPath]: usersListApi.reducer,
        [postsApi.reducerPath]: postsApi.reducer,
        [commentsApi.reducerPath]: commentsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(usersListApi.middleware).concat(postsApi.middleware).concat(commentsApi.middleware),
});
