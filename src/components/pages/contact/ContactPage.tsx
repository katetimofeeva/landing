import React, { useState } from 'react';

import styles from './ContactPage.module.css';

import Info from '../../infoSection/Info';
import MyButton from '../../UI/Button/MyButton';

const contactInfo = [
  {
    title: 'Working hours',
    contact: 'Monday To Friday 9:00 AM to 8:00 PM ',
    info: 'Our Support Team is available 24/7',
  },
  {
    title: 'Contact Us',
    contact: '020 7993 2905 ',
    info: 'hello@finsweet.com',
  },
];

const ContactPage = () => {
  const [formValue, setFormValue] = useState({
    name: '',
    email: '',
    queryRelated: '',
    message: '',
  });
  console.log(formValue, 'formValue');

  // const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //   setFormValue((prev) => ({ ...prev, queryRelated: e.target.value }));
  // };

  const onChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>,
  ) => {
    console.log(e.target.name);
    const name = e.target.name;
    const value = e.target.value;
    setFormValue((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formValue, 'formValue');
    setFormValue({
      name: '',
      email: '',
      queryRelated: '',
      message: '',
    });
  };

  const showLabel = formValue.queryRelated ? styles.hidden : '';
  const showLabelName = formValue.name ? styles.hidden : '';
  const showLabelEmail = formValue.email ? styles.hidden : '';
  const showLabelMessage = formValue.message ? styles.hidden : '';
  const btnDisable = Boolean(
    formValue.email &&
      formValue.name &&
      formValue.message &&
      formValue.queryRelated,
  );

  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    name: string,
  ) => {
    e.preventDefault();
    setFormValue((prev) => ({ ...prev, [name]: '' }));
  };
  return (
    <main>
      <section className={styles.container}>
        <Info
          title='Let’s Start a Conversation'
          headingType='h1'
          info='Contact us'
          desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.'
        />
        <div className={styles.contactInfo}>
          {contactInfo.map(({ title, info, contact }) => {
            return (
              <div className={styles.column} key={title}>
                <p className={styles.title}>{title}</p>
                <h5>{contact}</h5>
                <p>{info}</p>
              </div>
            );
          })}
        </div>
        <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
          <div className={styles.row}>
            <label className={showLabelName} htmlFor='name'>
              Full Name
            </label>
            <input
              onChange={(e) => onChange(e)}
              id='name'
              type='text'
              value={formValue.name}
              name='name'
            />
            <button
              className={styles.delete}
              onClick={(e) => handleClick(e, 'name')}
            >
              &times;
            </button>
          </div>
          <div className={styles.row}>
            <label className={showLabelEmail} htmlFor='email'>
              Full Name
            </label>
            <input
              onChange={(e) => onChange(e)}
              id='email'
              type='email'
              value={formValue.email}
              name='email'
            />
            <button
              className={styles.delete}
              onClick={(e) => handleClick(e, 'email')}
            >
              &times;
            </button>
          </div>
          <div className={styles.row}>
            <label className={showLabel} htmlFor='queryRelated'>
              Query Related
            </label>
            <select
              onChange={(e) => onChange(e)}
              id='queryRelated'
              value={formValue.queryRelated}
              name='queryRelated'
            >
              <option value='' disabled selected></option>
              <option value='business'>Business</option>
              <option value='economy'>Economy</option>
              <option value='technology'>Technology</option>
              <option value='startup'>Startup</option>
            </select>
          </div>
          <div className={styles.row}>
            <label className={showLabelMessage} htmlFor='message'>
              Message
            </label>
            <textarea
              onChange={(e) => onChange(e)}
              id='message'
              value={formValue.message}
              name='message'
            />
            <button
              className={styles.delete}
              onClick={(e) => handleClick(e, 'message')}
            >
              &times;
            </button>
          </div>
          <MyButton type='submit' disabled={!btnDisable} buttonType='main'>
            Send Message
          </MyButton>
        </form>
      </section>
    </main>
  );
};

export default ContactPage;
