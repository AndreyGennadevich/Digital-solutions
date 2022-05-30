import { useGetUsersListQuery } from '../services/usersService';
import { UsersList, Loader, Error } from '../components';

export const UsersListPage = () => {

    const {data, isLoading, isError} = useGetUsersListQuery();

    return (
        <>
            {data && <UsersList usersList={data}/>}
            {isLoading && <Loader/>}
            {isError && <Error/>}
        </>
    );
};