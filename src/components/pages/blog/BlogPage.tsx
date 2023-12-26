import React from 'react';

import styles from './BlogPage.module.css';

import Nav from '../../UI/Nav/Nav';
import Info from '../../infoSection/Info';

const posts = [
  {
    url: '/assets/pexels-mantas-sinkevičius-1106476.jpg',
    id: 1,
    title: 'Font sizes in UI design: The complete guide to follow',
    info: 'BUSINESS',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    url: '/assets/pexels-canva-studio-3153201.jpg',
    id: 2,
    title: 'How to build rapport with your web design clients',
    info: 'ECONOMY',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];

const BlogPage = () => {
  const icons = ['facebook', 'instagram', 'twitter', 'ln'];
  return (
    <main>
      <section className={styles.section}>
        <div className={styles.main}>
          <img
            alt='main screen'
            src='/assets/pexels-daniel-xavier-1212984.jpg'
          />
          <div>
            <h1>Hey there, I’m Andrew Jonhson and welcome to my Blog</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
              blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.
              At risus viverra adipiscing at in tellus.
            </p>
            <Nav lists={icons} navType='icon' gap='gap' color='#232536' />
          </div>
        </div>
        <div className={styles.decElem}>
          <div className={styles.first}></div>
          <div className={styles.second}></div>
        </div>
      </section>
      <section className={styles.container}>
        <div>
          <h1>My Posts</h1>
          {posts.map(({ id, url, title, info, desc }) => {
            return (
              <div className={styles.card} key={id}>
                <img alt={title} src={url} />
                <Info title={title} info={info} desc={desc} />
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default BlogPage;
