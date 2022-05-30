import styles from './ModalWindow.module.css';
import { useState } from 'react';
import { usePostCommentMutation } from '../../services/commentsService';

export const ModalWindow = ({ postId, funcModalWindow }) => {

    const [ formValue, setFormValue ] = useState({
        postId,
        name: '',
        email: '',
        body: '',
    });

    const [postComment, {isError, error}] = usePostCommentMutation();

    const inputChangeHandler = (e) => {
        setFormValue({ ...formValue, [e.target.name]: e.target.value })
      }

    const onSubmit = async (e) => {
        e.preventDefault()
        postComment(formValue)
            .then(() => funcModalWindow())
    }

    return (
        <div className={ styles.modalWrapper }>
            <div className={ styles.modalWindow }>
                <div className={ styles.header }>
                    <span>
                        Create comment
                    </span>
                    <button className={styles.closeBtn} onClick={() => funcModalWindow()}>
                        <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L17 17" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                            <path d="M1 17L17 1" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                    </button>
                </div>
                <form className={ styles.form } onSubmit={(e) => onSubmit(e)}>
                    <label>
                        Имя
                        <input className={ styles.input } name='name' type="text" placeholder='Введите ваше имя' value={formValue.name} onChange={inputChangeHandler}/>
                    </label>
                    <label>
                        Email
                        <input className={ styles.input } name='email' type="email" placeholder='Введите ваш Email' value={formValue.email} onChange={inputChangeHandler}/>
                    </label>
                    <label>
                        Комментарий
                        <textarea className={ styles.textarea } name="body" id="textArea" cols="30" rows="4" onChange={inputChangeHandler} value={formValue.body} placeholder='Введите ваш комментарий'>
                        </textarea>
                    </label>
                    
                    <button className={styles.formBtn}>
                        Отправить
                    </button>
                </form>
            </div>
        </div>
    );
};