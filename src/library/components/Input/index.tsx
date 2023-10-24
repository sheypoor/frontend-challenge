import React, { useState } from 'react';
import { HelperText, Input, Label, StyledInput } from './styles';
import { IValidator } from '@utilities';

interface IField {
	value: string;
	isValid: boolean;
	isTouched: boolean;
	errorMessage: string | undefined;
}
interface Props {
	id: string;
	label: string;
	validator: (value: string) => IValidator;
	valueSetter: React.Dispatch<React.SetStateAction<string>>;
	isValidSetter: React.Dispatch<React.SetStateAction<boolean>>;
	className?: string;
}

function InputComponent({
	id,
	label,
	className,
	validator,
	valueSetter,
	isValidSetter,
}: Props) {
	const [field, setField] = useState<IField>({
		value: '',
		isValid: false,
		isTouched: false,
		errorMessage: undefined,
	});

	function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
		const value = event.target.value;
		const validationObject = validator(value);
		setField((prev) => ({
			...prev,
			isTouched: true,
			value: value,
			...validationObject,
		}));
		valueSetter(value);
		isValidSetter(validationObject.isValid);
	}
	function handleFocusChange(event: React.FocusEvent<HTMLInputElement>) {
		const validationObject = validator(event.target.value);
		setField((prev) => ({
			...prev,
			isTouched: true,
			...validationObject,
		}));
		isValidSetter(validationObject.isValid);
	}

	const fieldHelperText =
		field.isValid === false && field.isTouched === true
			? field.errorMessage
			: '';

	return (
		<StyledInput className={className}>
			<Label htmlFor={id}>{label}</Label>
			<Input
				name={id}
				value={field.value}
				onChange={handleChange}
				onFocus={handleFocusChange}
				isValid={fieldHelperText ? false : true}
			/>
			<HelperText>{fieldHelperText}</HelperText>
		</StyledInput>
	);
}

export default InputComponent;
