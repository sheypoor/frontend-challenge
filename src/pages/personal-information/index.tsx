import React, { useState } from 'react';
import {
	StyledPersonalInformation,
	Title,
	Description,
	Form,
	Card,
	Button,
} from './styles';
import { validateAge, validateName } from '../../library/utilities';
import { ArrowRight } from '../../assets';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../store';
import { Input as InputComponent } from '../../library/components';

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
		navigate('/newsletter/');
	}

	return (
		<StyledPersonalInformation>
			<Title>Hi Friend!</Title>
			<Card>
				<Description>Can you tell us a bit about yourself? </Description>
				<Form onSubmit={handleSubmit}>
					<InputComponent
						id='name'
						label='Name:'
						validator={validateName}
						valueSetter={setName}
						isValidSetter={setIsNameValid}
					/>
					<InputComponent
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
