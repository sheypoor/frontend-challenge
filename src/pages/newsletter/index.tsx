import { createUser } from 'sdk';
import { useEffect, useState } from 'react';
import { useGlobalContext } from '../../store';
import { useNavigate } from 'react-router-dom';
import { PERSONAL_INFORMATION_ADDRESS } from '../../routes';
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
	const { state, dispatch } = useGlobalContext();

	const [isConnectionError, setIsConnectionError] = useState(false);
	const [selectedOption, setSelectedOption] = useState<OptionsType>('daily');

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
		setSelectedOption(option);
	};

	function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		setIsConnectionError(false);
		if (state.name === undefined || state.age === undefined) {
			return;
		}
		const user = {
			name: state.name,
			age: state.age,
			email: emailField.value,
			newsletter: selectedOption,
		};
		createUser(user)
			.then((res) => {
				dispatch({ type: 'add_email', payload: emailField.value });
				dispatch({ type: 'add_schedule', payload: selectedOption });
				dispatch({ type: 'add_token', payload: res.token });
			})
			.catch(() => {
				setIsConnectionError(true);
			});
	}

	useEffect(() => {
		if (state.age === undefined || state.name === undefined) {
			navigate(`/${PERSONAL_INFORMATION_ADDRESS}`);
		}
	}, [navigate, state.age, state.name]);

	const emailFieldHelperText =
		emailField.isValid === false && emailField.isTouched === true
			? emailField.errorMessage
			: '';

	return (
		<StyledNewsletter>
			<Title>Let's set you up for Newsletters {state.name}!</Title>
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
								isActive={selectedOption === 'daily'}
								onClick={() => handleOptionClick('daily')}>
								Daily
							</Chips>
							<Chips
								isActive={selectedOption === 'weekly'}
								onClick={() => handleOptionClick('weekly')}>
								weekly
							</Chips>
							<Chips
								isActive={selectedOption === 'monthly'}
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
