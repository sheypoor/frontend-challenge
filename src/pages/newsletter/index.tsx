import { createUser } from 'sdk';
import { useEffect, useState } from 'react';
import { useGlobalContext } from '../../store';
import { useNavigate } from 'react-router-dom';
import { COMPLETE_ADDRESS, PERSONAL_INFORMATION_ADDRESS } from '../../routes';
import {
	Button,
	Card,
	Chips,
	Form,
	HelperText,
	Input,
	InputWrapper,
	Label,
	Options,
	OptionsWrapper,
	RetryMessage,
	StyledNewsletter,
	Title,
} from './styles';
import { IField } from '../personal-information';
import { validateEmail } from '../../library/utilities';
import { ArrowRight, Reload } from '../../assets';

type OptionsType = 'daily' | 'weekly' | 'monthly';

function Newsletter() {
	const navigate = useNavigate();
	const {
		state: { personalInfo },
		dispatch,
	} = useGlobalContext();

	const [isConnectionError, setIsConnectionError] = useState(false);
	const [selectedScheduleOption, setSelectedScheduleOption] =
		useState<OptionsType>('daily');

	const [emailField, setEmailField] = useState<IField>({
		value: '',
		isValid: false,
		isTouched: false,
		errorMessage: "Name can't be empty",
	});

	function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
		const validationObject = validateEmail(event.target.value);

		setEmailField((prev) => ({
			...prev,
			isTouched: true,
			value: event.target.value,
			...validationObject,
		}));
	}
	function handleEmailFocusChange() {
		setEmailField((prev) => ({
			...prev,
			isTouched: true,
		}));
	}
	const handleOptionClick = (option: OptionsType) => {
		setSelectedScheduleOption(option);
	};

	function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		setIsConnectionError(false);
		if (personalInfo === null) {
			return;
		}
		const user = {
			name: personalInfo.name,
			age: personalInfo.age,
			email: emailField.value.trim(),
			newsletter: selectedScheduleOption,
		};
		createUser(user)
			.then((response) => {
				dispatch({
					type: 'update_personal_info',
					payload: { name: response.user.name, age: response.user.age },
				});
				dispatch({
					type: 'update_newsletter',
					payload: {
						email: response.user.email,
						schedule: response.user.newsletter,
					},
				});
				dispatch({ type: 'update_token', payload: response.token });
				navigate(`/${COMPLETE_ADDRESS}`);
			})
			.catch(() => {
				setIsConnectionError(true);
			});
	}

	useEffect(() => {
		if (personalInfo === null) {
			navigate(`/${PERSONAL_INFORMATION_ADDRESS}`);
		}
	}, [navigate, personalInfo]);

	const emailFieldHelperText =
		emailField.isValid === false && emailField.isTouched === true
			? emailField.errorMessage
			: '';

	if (personalInfo === null) {
		return <div></div>;
	}

	return (
		<StyledNewsletter>
			<Title>Let's set you up for Newsletters {personalInfo.name}!</Title>
			<Card>
				<Form onSubmit={handleSubmit}>
					<InputWrapper>
						<Label htmlFor='email'>E-mail:</Label>
						<Input
							name='email'
							type='email'
							value={emailField.value}
							onChange={handleEmailChange}
							onFocus={handleEmailFocusChange}
							isValid={emailFieldHelperText ? false : true}
						/>
						<HelperText>{emailFieldHelperText}</HelperText>
					</InputWrapper>
					<OptionsWrapper>
						<Label>Schedule:</Label>
						<Options>
							<Chips
								isActive={selectedScheduleOption === 'daily'}
								onClick={() => handleOptionClick('daily')}>
								Daily
							</Chips>
							<Chips
								isActive={selectedScheduleOption === 'weekly'}
								onClick={() => handleOptionClick('weekly')}>
								weekly
							</Chips>
							<Chips
								isActive={selectedScheduleOption === 'monthly'}
								onClick={() => handleOptionClick('monthly')}>
								monthly
							</Chips>
						</Options>
					</OptionsWrapper>
					<Button disabled={!emailField.isValid} isRetry={isConnectionError}>
						{isConnectionError ? <Reload /> : <ArrowRight />}
					</Button>
					{isConnectionError ? (
						<RetryMessage>Something went wrong! try again</RetryMessage>
					) : null}
				</Form>
			</Card>
		</StyledNewsletter>
	);
}

export default Newsletter;
