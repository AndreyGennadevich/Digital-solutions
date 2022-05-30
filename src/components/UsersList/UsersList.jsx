import { ListItem } from "../ListItem/ListItem";
import styles from './UsersList.module.css';

export const UsersList = ({ usersList }) => {

    return (
        <>
            <h2 className={styles.title}>Users</h2>
            <ul className={styles.wrap}>
                { usersList.map(i => <ListItem key={i.id} item={i}/>) }
            </ul>  
        </>
    );
};