import React, { useEffect } from 'react';
import { useGlobalContext } from '../../store';
import {
	Card,
	Description,
	Item,
	List,
	Row,
	StyledSignUpComplete,
	Suggestion,
	Title,
} from './styles';
import { Youtube } from '../../assets';
import { useNavigate } from 'react-router-dom';
import { PERSONAL_INFORMATION_ADDRESS } from '../../routes';

function SignUpComplete() {
	const { state } = useGlobalContext();
	const navigate = useNavigate();

	useEffect(() => {
		if (
			state.age === undefined ||
			state.name === undefined ||
			state.email === undefined ||
			state.token === undefined ||
			state.newsletter === undefined
		) {
			navigate(`/${PERSONAL_INFORMATION_ADDRESS}`);
		}
	}, [
		navigate,
		state.age,
		state.email,
		state.name,
		state.newsletter,
		state.token,
	]);
	return (
		<StyledSignUpComplete>
			<Title>We have everything we need!</Title>
			<Card>
				<Description>
					Here's the information we got back from the server:
				</Description>
				<List>
					<Row>
						Name:
						<Item>{state.name}</Item>
					</Row>
					<Row>
						Age:
						<Item>{state.age}</Item>
					</Row>
					<Row>
						Email:
						<Item>{state.email}</Item>
					</Row>
					<Row>
						Newsletter:
						<Item>{state.newsletter}</Item>
					</Row>
					<Row>
						Token:
						<Item>{state.token}</Item>
					</Row>
				</List>
			</Card>

			<Suggestion
				href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
				target='_blank'
				rel='noopener noreferrer'>
				Watch a video in the meanwhile!
				<Youtube />
			</Suggestion>
		</StyledSignUpComplete>
	);
}

export default SignUpComplete;
