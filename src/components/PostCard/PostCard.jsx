import styles from './PostCard.module.css';

export const PostCard = ({ post }) => {
    return (
        <div className={ styles.card }>
            <h2 className={ styles.title }>
                { post.title }
            </h2>
            <p className={ styles.description }>
                { post.body }
            </p>
        </div>
    );
};