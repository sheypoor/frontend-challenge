import React, { ReactNode } from 'react'
import { BUTTON_CLASS_OPTIONS } from './enums';
import { buttonClassName } from './config';

interface IButtonProps {
    style?: Record<string, string>;
    children?: ReactNode;
    disabled?: boolean;
    type?: keyof typeof BUTTON_CLASS_OPTIONS;
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
const Button: React.FC<IButtonProps> = ({ children, style, disabled, type, onClick}) => {
    return <button 
        onClick={onClick}
        className={buttonClassName(type)}
        style={{...style}}
        disabled={disabled}
    >
        {children}
    </button>
}

export default Button