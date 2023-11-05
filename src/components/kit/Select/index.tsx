import React, { ChangeEventHandler, KeyboardEventHandler } from 'react'
import styles from './index.module.scss'
import { ISelectOptions } from './types';

interface IInputProps {
    style?: Record<string, string | number>;
    value?: string | number;
    options: ISelectOptions[];
    onChange?: ChangeEventHandler<HTMLSelectElement>;
    placeholder?: string;
}
const Select: React.FC<IInputProps> = ({ style, value, options, placeholder, onChange }) => {
    const handleSelectChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
        if (onChange) onChange(event);
    };
    return <select
        className={styles.inputStyle}
        style={{ ...style }}
        value={value}
        onChange={handleSelectChange}
    >
        <option value="">{placeholder || 'Select an item'}</option>
        {options.map((option: ISelectOptions) => <option key={option.value} value={option.value}>{option.label}</option>)}
    </select>
}

export default Select