import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import styles from './Nav.module.css';

import {
  FacebookIcon,
  InstagramIcon,
  LinkedLnIcon,
  TwitterIcon,
} from '../icons/Icons';

interface Props {
  lists: string[];
  navType?: 'header' | 'icon';
  ulStyle?: React.CSSProperties;
  color?: string;
  gap?: 'gap';
  direction?: 'column';
  setShowMenu?: React.Dispatch<React.SetStateAction<boolean>>;
}

const Nav: FC<Props> = ({
  setShowMenu,
  lists,
  navType,
  ulStyle,
  color,
  direction,
  gap,
}) => {
  const stNav = navType === 'header' ? styles.mr : '';

  const nav = gap ? styles.navGap : styles.nav;
  const dir = direction === 'column' ? styles.direction : '';

  const getLink = (list: string): string => {
    const lowerCaseList = list.toLowerCase();
    return lowerCaseList === 'home'
      ? '/'
      : lowerCaseList === 'contact us'
        ? '/contact'
        : lowerCaseList === 'privacy policy'
          ? '/policy'
          : `/${lowerCaseList}`;
  };

  const toggleMenu = () => {
    if (setShowMenu) {
      setShowMenu((prev: boolean) => !prev);
    }
  };
  return (
    <nav className={stNav}>
      <ul className={`${nav} ${dir}`} style={ulStyle}>
        {lists.map((list) =>
          navType === 'icon' ? (
            list === 'facebook' ? (
              <FacebookIcon link={'#'} name={list} color={color} />
            ) : list === 'ln' ? (
              <LinkedLnIcon link={'#'} name={list} color={color} />
            ) : list === 'instagram' ? (
              <InstagramIcon link={'#'} name={list} color={color} />
            ) : (
              list === 'twitter' && (
                <TwitterIcon link={'#'} name={list} color={color} />
              )
            )
          ) : (
            <li key={list} onClick={toggleMenu}>
              <Link to={getLink(list)}>{list}</Link>
            </li>
          ),
        )}
      </ul>
    </nav>
  );
};

export default Nav;
