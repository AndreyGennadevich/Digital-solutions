import styles from './CommentsItem.module.css';

export const CommentsItem = ({ comment }) => {

    return (
        <li className={ styles.container }>
            <div className={ styles.header }>
                <span className={ styles.name }>
                    { comment.name }
                </span>
                <span className={ styles.email }>
                    { comment.email }
                </span>
            </div>
            <p className={ styles.text }>
                { comment.body }
            </p>
        </li>
    );
};