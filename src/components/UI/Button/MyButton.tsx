import React, { FC, ReactNode } from 'react';

import styles from './MyButton.module.css';

interface Props {
  // text: string;
  buttonType: 'main' | 'nav' | 'secondary';
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'submit';
}

const BUTTON_TYPE_CLASSES = {
  main: 'mainBtn',
  nav: 'navBtn',
  secondary: 'secondaryBTN',
};

const MyButton: FC<Props> = ({
  children,
  onClick,
  buttonType,
  disabled,
  type,
  ...props
}) => {
  const buttonClass = `${styles.btn} ${
    styles[BUTTON_TYPE_CLASSES[buttonType]]
  }`;
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <button
      disabled={disabled}
      onClick={handleClick}
      className={buttonClass}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};

export default MyButton;
