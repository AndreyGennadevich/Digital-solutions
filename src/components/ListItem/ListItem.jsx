import { Link } from "react-router-dom";
import { ROUTES } from "../../helpers/routes";
import styles from './ListItem.module.css';

export const ListItem = ({item}) => {
    return (
        <li className={styles.listItem}>
            <h4 className={styles.title}>
                {item.name}
            </h4>
            <Link className={styles.itemBtn} to={'/' + ROUTES.users + '/' + item.id}>Смотреть профиль</Link>
        </li>
    );
};