import styles from './CommentsBtn.module.css';

export const CommentsBtn = ({ openModal }) => {
    return (
        <button className={styles.btn} onClick={() => openModal()}>
            Написать комментарий
        </button>
    );
};