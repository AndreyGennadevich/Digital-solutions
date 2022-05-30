import { useGetPostsListQuery } from "../services/postsService";
import { useParams } from 'react-router-dom';
import { Loader, Error, PostsList } from '../components';

export const UserPostsPage = () => {

    const params = useParams();
    const { data, isLoading, isError } = useGetPostsListQuery({userId: params.id });

    return (
        <>
            {data && <PostsList posts={data}/>}
            {isLoading && <Loader/>}
            {isError && <Error/>}
        </>
    );
};