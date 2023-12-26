import React, { FC } from 'react';

import styles from './Blog.module.css';

interface IProps {
  title: string;
  info: string;
  desc: string;
}
const Blog: FC<IProps> = ({ title, info, desc }) => {
  return (
    <div className={styles.blog}>
      <h2>{title}</h2>
      <p>{info}</p>
      <p>{desc}</p>
    </div>
  );
};

export default Blog;
