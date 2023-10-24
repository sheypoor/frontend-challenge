import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '@components';
import { useGlobalContext } from '@store';
import { NEWSLETTER_ADDRESS } from '@routes';
import { validateAge, validateName } from '@utilities';
import { ArrowRight } from '@assets';
import {
	StyledPersonalInformation,
	Title,
	Description,
	Form,
	Card,
	Button,
} from './styles';

function PersonalInformationComponent() {
	const navigate = useNavigate();
	const { dispatch } = useGlobalContext();

	const [name, setName] = useState('');
	const [isNameValid, setIsNameValid] = useState(false);
	const [age, setAge] = useState('');
	const [isAgeValid, setIsAgeValid] = useState(false);

	function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		dispatch({
			type: 'update_personal_info',
			payload: { name: name.trim(), age },
		});
		navigate(`/${NEWSLETTER_ADDRESS}/`);
	}

	return (
		<StyledPersonalInformation>
			<Title>Hi Friend!</Title>
			<Card>
				<Description>Can you tell us a bit about yourself? </Description>
				<Form onSubmit={handleSubmit}>
					<Input
						id='name'
						label='Name:'
						validator={validateName}
						valueSetter={setName}
						isValidSetter={setIsNameValid}
					/>
					<Input
						id='age'
						label='Age:'
						validator={validateAge}
						valueSetter={setAge}
						isValidSetter={setIsAgeValid}
					/>
					<Button disabled={!(isNameValid && isAgeValid)}>
						<ArrowRight />
					</Button>
				</Form>
			</Card>
		</StyledPersonalInformation>
	);
}

export default PersonalInformationComponent;
