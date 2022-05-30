import styles from './PostsList.module.css';
import { PostListItem } from '../PostListItem/PostListItem';

export const PostsList = ({ posts }) => {
    return (
        <ul className={ styles.list }>
            { posts.map(p => <PostListItem key={p.id} post={p}/>) }
        </ul>
    );
};