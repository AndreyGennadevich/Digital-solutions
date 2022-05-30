import { useGetUserQuery } from '../services/usersService';
import { useParams } from 'react-router-dom';
import { useGetPostsListQuery } from '../services/postsService';
import { Loader, Error, PostsPreview, LinkToPosts, UserCard } from '../components';

export const UserPage = () => {

    const params = useParams();
    const { data: userData, isLoading, isError } = useGetUserQuery({ userId: params.id });
    const { data: postData } = useGetPostsListQuery({ userId: params.id });

    return (
        <>
            { userData && postData && <>
                <UserCard user={userData}/>
                <PostsPreview postData={ postData }/>
                <LinkToPosts/>
            </>
            }
            { isLoading && <Loader/> }
            { isError && <Error/> }
        </>
    );
};