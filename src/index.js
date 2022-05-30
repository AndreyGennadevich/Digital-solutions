import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import { store } from './store/store';
import {Layout} from "./layout/Layout";
import { UsersListPage } from './pages/UsersListPage';
import { UserPage } from './pages/UserPage';
import { UserPostsPage } from './pages/UserPostsPage';
import { ROUTES } from './helpers/routes';
import './index.css';
import { PostInfoPage } from './pages/PostInfoPage';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Layout/>}>
                        <Route index element={<Navigate to={ROUTES.users}/>}/>
                        <Route path={ROUTES.users} element={<UsersListPage/>}/>
                        <Route path={ROUTES.users + '/:id'}>
                          <Route index element={<UserPage/>}/>
                          <Route path={ROUTES.posts} element={<UserPostsPage/>}/>
                          <Route path={ROUTES.posts + '/:idPost'} element={<PostInfoPage/>}/>
                        </Route>
                        <Route path="*" element={<NotFoundPage/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
  </Provider>
);

