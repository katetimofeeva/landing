import React from 'react';

import styles from './AboutPage.module.css';

import Info from '../../infoSection/Info';
import Blog from '../../blog/Blog';
import ListCards from '../../listCards/ListCards';
import MyButton from '../../UI/Button/MyButton';
const auth: { url: string; title: string; info: string; id: number }[] = [
  {
    url: '/assets/pexels-vazhnik-7562313.jpg',
    title: 'Floyd Miles',
    info: 'Content Writer @Company',
    id: 1,
  },
  {
    url: '/assets/pexels-tim-douglas-6567545.jpg',
    title: 'Dianne Russell',
    info: 'Content Writer @Company',
    id: 2,
  },
  {
    url: '/assets/pexels-anastasia-shuraeva-5704849.jpg',
    title: 'Jenny Wilson',
    info: 'Content Writer @Company',
    id: 3,
  },
  {
    url: '/assets/pexels-tim-douglas-6205509.jpg',
    title: 'Leslie Alexander',
    info: 'Content Writer @Company',
    id: 4,
  },
  {
    url: '/assets/pexels-andrea-piacquadio-927451.jpg',
    title: 'Guy Hawkins',
    info: 'Content Writer @Company',
    id: 5,
  },
  {
    url: '/assets/pexels-keira-burton-6147118.jpg',
    title: 'Eleanor Pena',
    info: 'Content Writer @Company',
    id: 6,
  },
  {
    url: '/assets/pexels-anna-shvets-5262459.jpg',
    title: 'Robert Fox',
    info: 'Content Writer @Company',
    id: 7,
  },
  {
    url: '/assets/pexels-pixabay-39866.jpg',
    title: 'Jacob Jones',
    info: 'Content Writer @Company',
    id: 8,
  },
];
const info = [
  {
    count: '12+',
    title: 'Blogs Published',
  },
  {
    count: '18K+',
    title: 'Views on Finsweet',
  },
  {
    count: '30K+',
    title: 'Total active Users',
  },
];

const AboutPage = () => {
  return (
    <main>
      <section className={styles.section}>
        <div className={styles.aboutUs}>
          <div className={styles.df}>
            <div className={styles.left}>
              <p>ABOUT US</p>
              <h1>
                We are a team of content writers who share their learnings
              </h1>
            </div>
            <p className={styles.right}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        <div className={styles.photo}>
          <div>
            <div className={styles.focusInfo}>
              {info.map(({ count, title }) => {
                return (
                  <div key={title}>
                    <p>{count}</p>
                    <span>{title}</span>
                  </div>
                );
              })}
            </div>
            <div className={styles.first}></div>
            <div className={styles.second}></div>
          </div>
        </div>
        <div className={styles.infoSection}>
          <Info
            info={'Our mision'}
            title={
              'Creating valuable content for creatives all around the world'
            }
            headingType={'h3'}
            desc={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.'
            }
          />
          <Info
            info={'Our Vision'}
            title={'A platform that empowers individuals to improve'}
            headingType={'h3'}
            desc={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.'
            }
          />
        </div>
      </section>
      <section className={styles.section}>
        <h1 className={styles.hidden}> Our team of creatives</h1>
        <div className={styles.container}>
          <Blog
            title={'Our team of creatives'}
            info={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
            }
            desc={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.'
            }
          />
          <div className={styles.image}>
            <img className={styles.sticker} src='/assets/shapes.svg' />
            <img
              className={styles.img}
              src='/assets/pexels-pixabay-461049.jpg'
              alt='hands'
            />
          </div>
        </div>
      </section>
      <section className={styles.section}>
        <h1 className={styles.hidden}> Why we started this Blog</h1>
        <div className={styles.container}>
          <div className={styles.image}>
            <img
              className={styles.img}
              src='/assets/pexels-buro-millennial-1438072.jpg'
            />
          </div>
          <Blog
            title={'Why we started this Blog'}
            info='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
            desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.'
          />
        </div>
      </section>
      <section className={styles.section}>
        <h2 className={styles.titleAuth}>List of Authors</h2>
        <div>
          <ListCards type={'auth'} auth={auth} />
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.box}>
          <h2 className={styles.title}>
            Join our team to be a part of our story
          </h2>
          <p className={styles.p}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
          <MyButton buttonType='main'>Join Now</MyButton>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
