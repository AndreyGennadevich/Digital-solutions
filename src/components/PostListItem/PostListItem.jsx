import styles from './PostListItem.module.css';
import { Link } from 'react-router-dom';

export const PostListItem = ({post}) => {
    return (
        <li key={post.id} className={ styles.item }>
            <div>
                <h3 className={styles.title}>{ post.title }</h3>
                <p className={styles.description}>{ post.body }</p>
            </div>
            <Link className={styles.link} to={ post.id.toString() }>
                Подробнее
            </Link> 
        </li>
    );
};

