import React from 'react';
import s from './AddPostForm.module.sass';

const AddPostForm = ({ id, comments, addPost}) => {
    const post = {
                id: 12,
                rating: 115,
                date: 1581466813000,
                author: 'Rrr',
                message: '2 lvl Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            }
  const onAddPost = () => addPost(id, post);

  return (
      <div className={s.form}>
          <p className={s.label}>Добавить комментарий</p>
          <form onSubmit={ onAddPost }>
              <div className={s.item}>
                  <label htmlFor="name">Имя</label>
                  <input name="name" type="text" required />
              </div>
              <div className={s.item}>
                  <label htmlFor="email">E-mail</label>
                  <input name="email" type="email" required />
              </div>
              <div className={s.item}>
                  <label htmlFor="comment" required >Комментарий</label>
                  <textarea name="comment" id="" cols="30" rows="10"></textarea>
              </div>
              <button className={s.button} type="submit">Добавить комментарий</button>
          </form>

      </div>
  );
};

export default AddPostForm;
