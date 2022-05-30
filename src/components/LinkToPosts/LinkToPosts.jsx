import styles from './LinkToPosts.module.css';
import { ROUTES } from '../../helpers/routes';
import { Link } from 'react-router-dom';

export const LinkToPosts = () => {
    return (
        <Link className={styles.link} to={ROUTES.posts}>
            Go to all posts user
        </Link>
    );
};