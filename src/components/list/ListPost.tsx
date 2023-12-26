import React, { FC, useState } from 'react';

import styles from './ListPost.module.css';

interface Props {
  posts: { id: number; title: string; desc: string }[];
  view?: boolean;
}

const List: FC<Props> = ({ posts, view }) => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const showPostLists = () => {
    if (!view) {
      return posts.slice(0, 4);
    }
    return posts;
  };

  const onClickHandler = (id: number) => {
    console.log(id);
    setSelectedId(selectedId === id ? null : id);
  };

  return (
    <div>
      {showPostLists().map(({ title, desc, id }) => {
        const [first, firstName, LastName, date, month, year] =
          title.split(' ');
        const postStyle =
          id === selectedId
            ? `${styles.bgActive} ${styles.postStyle}`
            : `${styles.postStyle}`;
        return (
          <article
            key={id}
            className={postStyle}
            onClick={() => onClickHandler(id)}
          >
            <p className={styles.title}>
              {first}
              <span>{` ${firstName} ${LastName} `}</span>
              {`${date} ${month} ${year}`}
            </p>
            <h4 className={styles.desc}>{desc}</h4>
          </article>
        );
      })}
    </div>
  );
};

export default List;
