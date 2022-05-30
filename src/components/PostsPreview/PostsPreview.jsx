import styles from './PostsPreview.module.css';
import { useState } from 'react';
import { ROUTES } from '../../helpers/routes';
import { Link } from 'react-router-dom';

export const PostsPreview = ({ postData }) => {

    const [post, setPost] = useState(false);

    const showAllPosts = () => {
        if(post === false) {
            return postData.slice(0, 3).map(p => {
                return <li className={styles.listItem} key={p.id}>
                    <Link to={ROUTES.posts + '/' + p.id}>
                        {p.title}
                    </Link>
                </li>
            })
            
        } else {
            return postData.map(p => {
                return <li className={styles.listItem} key={p.id}>
                    <Link to={ROUTES.posts + '/' + p.id}>
                        {p.title}
                    </Link>
                </li>
            })
        }
    }

    return (
        <ul className={styles.list}>
            {showAllPosts()}
            <li className={styles.listItem}>
                <button className={styles.btn} onClick={() => setPost(!post)}>
                    {!post ? 'Show more' : 'Show less'}
                </button>
            </li>
        </ul>
    );
};