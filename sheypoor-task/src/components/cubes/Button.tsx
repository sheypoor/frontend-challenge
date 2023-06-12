import React, { ReactNode } from 'react';
import clsx from 'clsx';

interface Props {
    children: ReactNode;
    onClick?: (() => void) | any;
    type?: 'button' | 'submit' | 'reset';
    className?: string;
    disabled?: boolean;

}

const Button = ({ children, onClick, type = 'button', className , disabled }: Props) => {
  const clickButton = (e: any) => {
    onClick?.();
  };
  return (
    <button disabled={disabled} className={clsx({ 'opacity-50 cursor-not-allowed': disabled } , className)} type={type} onClick={clickButton}>
      {children}
    </button>
  );
};

export default Button;