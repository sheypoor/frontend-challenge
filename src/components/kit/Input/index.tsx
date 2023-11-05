import React, { KeyboardEventHandler } from 'react'
import styles from './index.module.scss'

interface IInputProps {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyDown?: React.KeyboardEventHandler<HTMLInputElement> | undefined
    style?: Record<string, string | number>;
    value?: string | number;
    type?: string;
}
const Input: React.FC<IInputProps> = ({ style, onChange, value, type, onKeyDown }) => {
    return <input 
        className={styles.inputStyle}
        style={{...style}}
        onChange={onChange}
        value={value}
        type={type}
        onKeyDown={onKeyDown}
    />
}

export default Input