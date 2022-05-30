import styles from './UserCard.module.css';

export const UserCard = ({user}) => {
    return (
        <div className={styles.card}>
            <div className={styles.cardCell}>
                <h2>
                    { user.username }
                </h2>
            </div>
            <div className={styles.cardCell}>
            <span>
                { user.name }
            </span>
            </div>
            <div className={styles.cardCell}>
                <span>
                    { user.email }
                </span>
            </div>
            <div className={styles.cardCell}>
                <span>
                    { user.phone }
                </span>
            </div>
            <div className={styles.cardCell}>
                <span>
                    { user.website }
                </span>
            </div>
            <div className={styles.cardCell}>
                <span>
                    { user.company.name }
                </span>
                <span>
                    { user.company.bs }
                </span>
            </div>
         </div>
    );
};