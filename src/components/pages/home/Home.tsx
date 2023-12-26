import React, { useState } from 'react';

import styles from './HomePage.module.css';

import MyButton from '../../UI/Button/MyButton';
import List from '../../list/ListPost';
import Info from '../../infoSection/Info';
import ListCards from '../../listCards/ListCards';
interface Post {
  id: number;
  title: string;
  desc: string;
}
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
];
const HomePage = () => {
  const posts: Post[] = [
    {
      id: 1,
      title: 'By John Deo 1 Aug 23, 2021',
      desc: '8 Figma design systems that you can download for free today.',
    },
    {
      id: 2,
      title: 'By John Deo 1 Aug 23, 2021',
      desc: '8 Figma design systems that you can download for free today.',
    },
    {
      id: 3,
      title: 'By John Deo 1 Aug 23, 2021',
      desc: '8 Figma design systems that you can download for free today.',
    },
    {
      id: 4,
      title: 'By John Deo 1 Aug 23, 2021',
      desc: '8 Figma design systems that you can download for free today.',
    },
    {
      id: 5,
      title: 'By John Deo 1 Aug 23, 2021',
      desc: '8 Figma design systems that you can download for free today.',
    },
    {
      id: 6,
      title: 'By John Deo 1 Aug 23, 2021',
      desc: '8 Figma design systems that you can download for free today.',
    },
    {
      id: 7,
      title: 'By John Deo 1 Aug 23, 2021',
      desc: '8 Figma design systems that you can download for free today.',
    },
  ];

  const [allPost, setAllPost] = useState<boolean>(false);

  const [next, setNext] = useState<boolean>(false);
  const [prev, setPrev] = useState<boolean>(false);
  const handelClick = () => {
    setAllPost((prevAllPost) => !prevAllPost);
  };

  return (
    <main>
      <section className={styles.mainScreen}>
        <p className={styles.mainScreenPost}>
          Posted on <span>startup</span>
        </p>
        <h1 className={styles.mainScreenTitle}>
          Step-by-step guide to choosing great font pairs
        </h1>
        <p className={styles.mainScreenDate}>
          By <span>James West</span> | May 23, 2022
        </p>
        <p className={styles.mainScreenInfo}>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident.
        </p>
        <MyButton buttonType='main'>Read More &gt;</MyButton>
      </section>
      <section className={styles.section}>
        <div className={styles.sectionWrapper}>
          <button className={styles.allPosts} onClick={handelClick}>
            View All
          </button>
          <div className={styles.leftColumn}>
            <h2>Featured Post</h2>
            <div className={styles.padding}>
              {/* <div className={styles.photo} /> */}
              <img
                className={styles.photo}
                src='/assets/white-concrete-building-1838640.png'
                alt='Featured Post home'
              />
              <Info
                title=' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.'
                info='By'
                span='John Doe'
                additionInfo='l May 23, 2022'
                desc=' Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident.'
                headingType='h3'
                date={true}
              >
                <MyButton buttonType='main'>Read More &gt;</MyButton>
              </Info>
            </div>
          </div>
          <div className={styles.rightColumn}>
            <h2>All Posts</h2>
            <div className={allPost ? `${styles.scroll}` : ''}>
              <List posts={posts} view={allPost} />
            </div>
          </div>
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.wrapper}>
          <img src='/assets/groupe-of-people.jpg' alt='groupe of people' />
          <div className={styles.historyColumn}>
            <Info
              headingType='h1'
              info='Why we started'
              desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip.'
              title=' It started out as a simple idea and evolved into our passion'
            >
              <MyButton buttonType='main'>Discover our story &gt;</MyButton>{' '}
            </Info>
          </div>
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.thirdSectionWrapper}>
          <div className={styles.thirdSectionWrapperColum}>
            <Info
              info='ABOUT US'
              title='We are a community of content writers who share their learnings'
              desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            >
              <MyButton buttonType={'secondary'}>Read More &gt;</MyButton>
            </Info>
          </div>
          <div className={styles.thirdSectionWrapperColum}>
            <Info
              headingType='h3'
              info='Our mision'
              title='Creating valuable content for creatives all around the world'
              desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat..'
            />
          </div>
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.forthSection}>
          <h2>Choose A Category</h2>
          <ListCards type='category' />
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.forthSection}>
          <h2>List of Authors</h2>
          <ListCards type={'auth'} auth={auth} />
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.testimonialsWrapper}>
          <div className={styles.left}>
            <Info
              title='What people say about our blog'
              info='TESTIMONIALs'
              desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.'
              headingType='h2'
            />
          </div>
          <div className={styles.right}>
            <h4>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </h4>
            <div className={styles.avatarBox}>
              <img src='/assets/Profile picture.jpg' alt='' />
              <div>
                <h4>Jonathan Vallem</h4>
                <p>New york, USA</p>
              </div>
              <div className={styles.flex}>
                <div
                  className={`${styles.prev} ${styles.flex}`}
                  onClick={() => {
                    console.log('2', prev);
                    setPrev((prev) => !prev);
                    setNext(false);
                  }}
                >
                  <svg
                    width='48'
                    height='48'
                    viewBox='0 0 48 48'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <g id='Back button'>
                      <g id='Group 9103'>
                        <circle
                          id='Ellipse 14'
                          cx='24'
                          cy='24'
                          r='24'
                          transform='rotate(-180 24 24)'
                          fill={prev ? '#592ea9' : 'white'}
                        />
                        <path
                          id='Arrow 1'
                          d='M34.2852 25C34.8374 25 35.2852 24.5523 35.2852 24C35.2852 23.4477 34.8374 23 34.2852 23L34.2852 25ZM13.449 23.2929C13.0585 23.6834 13.0585 24.3166 13.449 24.7071L19.813 31.0711C20.2035 31.4616 20.8367 31.4616 21.2272 31.0711C21.6177 30.6805 21.6177 30.0474 21.2272 29.6569L15.5703 24L21.2272 18.3431C21.6177 17.9526 21.6177 17.3195 21.2272 16.9289C20.8367 16.5384 20.2035 16.5384 19.813 16.9289L13.449 23.2929ZM34.2852 23L14.1561 23L14.1561 25L34.2852 25L34.2852 23Z'
                          fill={prev ? 'white' : '#232536'}
                        />
                      </g>
                    </g>
                  </svg>
                </div>
                <div
                  className={`${styles.next} ${styles.flex}`}
                  onClick={() => {
                    console.log('1', next);
                    setNext((prev) => !prev);
                    setPrev(false);
                  }}
                >
                  <svg
                    width='48'
                    height='48'
                    viewBox='0 0 48 48'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <g id='Back button'>
                      <g id='Group 9103'>
                        <circle
                          id='Ellipse 14'
                          cx='24'
                          cy='24'
                          r='24'
                          transform='rotate(-180 24 24)'
                          fill={next ? '#592ea9' : 'white'}
                        />
                        <path
                          id='Arrow 1'
                          d='M34.2852 25C34.8374 25 35.2852 24.5523 35.2852 24C35.2852 23.4477 34.8374 23 34.2852 23L34.2852 25ZM13.449 23.2929C13.0585 23.6834 13.0585 24.3166 13.449 24.7071L19.813 31.0711C20.2035 31.4616 20.8367 31.4616 21.2272 31.0711C21.6177 30.6805 21.6177 30.0474 21.2272 29.6569L15.5703 24L21.2272 18.3431C21.6177 17.9526 21.6177 17.3195 21.2272 16.9289C20.8367 16.5384 20.2035 16.5384 19.813 16.9289L13.449 23.2929ZM34.2852 23L14.1561 23L14.1561 25L34.2852 25L34.2852 23Z'
                          fill={next ? 'white' : '#232536'}
                        />
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.lastSection}>
          <h2>Join our team to be a part of our story</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
          <MyButton buttonType={'main'}>Join Now</MyButton>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
