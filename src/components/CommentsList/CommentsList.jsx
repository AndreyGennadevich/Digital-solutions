import { CommentsItem } from '../CommentsItem/CommentsItem';
import styles from './CommentsList.module.css';

export const CommentsList = ({ comments }) => {
    return (
        <ul className={styles.commentsList}>
            { comments.map(c => <CommentsItem key={c.id} comment={c} />) }
        </ul>
    );
};