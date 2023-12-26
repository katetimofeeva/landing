import React, {
  ChangeEvent,
  useState,
  FC,
  InputHTMLAttributes,
  useEffect,
} from 'react';

import styles from './MyInput.module.css';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  type: 'email' | 'text';
  action: boolean;
}
const MyInput: FC<Props> = ({ type, action, ...props }) => {
  const [value, setValue] = useState('');

  useEffect(() => {
    if (action) {
      setValue('');
    }
  }, [action]);

  const handelChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return <input type={type} value={value} onChange={handelChange} {...props} />;
};

export default MyInput;
