import React, { FC, ReactNode } from 'react';

import styles from './Info.module.css';

interface Props {
  title: string;
  info: string;
  desc: string;
  headingType?: 'h3' | 'h2' | 'h1';
  children?: ReactNode;
  date?: boolean;
  span?: string;
  additionInfo?: string;
}
const Info: FC<Props> = ({
  info,
  title,
  desc,
  children,
  headingType = 'h2',
  date = false,
  span,
  additionInfo,
}) => {
  const HeadingTag = headingType;
  const titleStyle = headingType === 'h2' ? styles.big : styles.small;
  return (
    <article>
      {!date ? (
        <p className={styles.info}>{info}</p>
      ) : (
        <p className={styles.leftColumnMainInfoDate}>
          {info} <span>{span} </span> {additionInfo}
        </p>
      )}

      <HeadingTag className={titleStyle}>{title}</HeadingTag>
      <p className={styles.desc}>{desc}</p>
      {children}
    </article>
  );
};

export default Info;
