import React, { useState } from 'react';
import {
	StyledPersonalInformation,
	Title,
	Description,
	Form,
	Input,
	Card,
	Label,
	InputWrapper,
	HelperText,
	Button,
} from './styles';
import { validateAge, validateName } from '../../library/utilities';
import { ArrowRight } from '../../assets';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../store';
interface IField {
	value: string;
	isValid: boolean;
	isTouched: boolean;
	errorMessage: string | undefined;
}

function PersonalInformationComponent() {
	const navigate = useNavigate();
	const { dispatch } = useGlobalContext();
	const [nameField, setNameField] = useState<IField>({
		value: '',
		isValid: false,
		isTouched: false,
		errorMessage: "Name can't be empty",
	});

	const [ageField, setAgeField] = useState<IField>({
		value: '',
		isValid: false,
		isTouched: false,
		errorMessage: "Age can't be empty",
	});

	function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
		const validationObject = validateName(event.target.value);
		setNameField((prev) => ({
			...prev,
			isTouched: true,
			value: event.target.value,
			...validationObject,
		}));
	}
	function handleNameFocusChange() {
		setNameField((prev) => ({
			...prev,
			isTouched: true,
		}));
	}

	function handleAgeChange(event: React.ChangeEvent<HTMLInputElement>) {
		const validationObject = validateAge(event.target.value);

		setAgeField((prev) => ({
			...prev,
			isTouched: true,
			value: event.target.value.trim(),
			...validationObject,
		}));
	}
	function handleAgeFocusChange() {
		setAgeField((prev) => ({
			...prev,
			isTouched: true,
		}));
	}

	function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		dispatch({ type: 'add_name', payload: nameField.value });
		dispatch({ type: 'add_age', payload: ageField.value });
		navigate('/newsletter/');
	}
	const nameFieldHelperText =
		nameField.isValid === false && nameField.isTouched === true
			? nameField.errorMessage
			: '';
	const ageFieldHelperText =
		ageField.isValid === false && ageField.isTouched === true
			? ageField.errorMessage
			: '';

	return (
		<StyledPersonalInformation>
			<Title>Hi Friend!</Title>
			<Card>
				<Description>Can you tell us a bit about yourself? </Description>

				<Form onSubmit={handleSubmit}>
					<InputWrapper>
						<Label htmlFor='name'>Name:</Label>
						<Input
							name='name'
							value={nameField.value}
							onChange={handleNameChange}
							onFocus={handleNameFocusChange}
							isValid={nameFieldHelperText ? false : true}
						/>
						<HelperText>{nameFieldHelperText}</HelperText>
					</InputWrapper>
					<InputWrapper>
						<Label htmlFor='age'>Age:</Label>
						<Input
							name='age'
							value={ageField.value}
							onChange={handleAgeChange}
							onFocus={handleAgeFocusChange}
							isValid={ageFieldHelperText ? false : true}
						/>
						<HelperText>{ageFieldHelperText}</HelperText>
					</InputWrapper>
					<Button disabled={!(nameField.isValid && ageField.isValid)}>
						<ArrowRight />
					</Button>
				</Form>
			</Card>
		</StyledPersonalInformation>
	);
}

export default PersonalInformationComponent;
