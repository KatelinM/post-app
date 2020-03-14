import React, {useState} from 'react';
import s from './AddPostForm.module.sass';

const AddPostForm = (props) => {
    let { addPost, headPostId, toggleShowAddPostForm } = props;

    let [name, setName] = useState('');
    let [email, setEmail] = useState('');
    let [message, setMessage] = useState('');

    const post = {
        id: +new Date(),
        rating: 0,
        date: +new Date(),
        author: name,
        email: email,
        message: message + "\n",
        comments: []
    };

    const onAddPost = (event) => {
        event.preventDefault();
        event.stopPropagation();
        event.nativeEvent.stopImmediatePropagation();

        headPostId !== null && toggleShowAddPostForm(false);
        addPost(headPostId, post);
    };

    return (
        <div className={`${s.form} ${ !props.isVisible ? s.hide : null }`}>
            <p className={s.label}>Добавить комментарий</p>
            <form onSubmit={ onAddPost }>
                <div className={s.item}>
                    <label htmlFor="name">Имя</label>
                    <input
                        name="name"
                        type="text"
                        required
                        onChange={ (event) => setName(event.currentTarget.value) } />
                </div>
                <div className={s.item}>
                    <label htmlFor="message">E-mail</label>
                    <input
                        name="message"
                        type="email"
                        required
                        onChange={ (event) => setEmail(event.currentTarget.value) } />
                </div>
                <div className={s.item}>
                    <label htmlFor="comment">Комментарий</label>
                    <textarea
                        name="comment"
                        id=""
                        cols="30"
                        rows="10"
                        required
                        onChange={ (event) => setMessage(event.currentTarget.value) } ></textarea>
                </div>
                <button className={s.button} type="submit">Добавить комментарий</button>
            </form>
        </div>
    );
};

export default AddPostForm;
