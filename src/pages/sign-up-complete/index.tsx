import { useEffect } from 'react';
import { useGlobalContext } from '../../store';
import {
	Card,
	Description,
	Item,
	List,
	Row,
	StyledSignUpComplete,
	SuggestionLink,
	Title,
} from './styles';
import { Youtube } from '../../assets';
import { useNavigate } from 'react-router-dom';
import { PERSONAL_INFORMATION_ADDRESS } from '../../routes';

function SignUpComplete() {
	const {
		state: { newsletter, personalInfo, token },
	} = useGlobalContext();
	const navigate = useNavigate();

	useEffect(() => {
		if (personalInfo === null || newsletter === null || token === undefined) {
			navigate(`/${PERSONAL_INFORMATION_ADDRESS}`);
		}
	}, [navigate, newsletter, personalInfo, token]);

	if (personalInfo === null || newsletter === null) {
		return <div></div>;
	}
	console.log(personalInfo);
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
						<Item>{personalInfo.name}</Item>
					</Row>
					<Row>
						Age:
						<Item>{personalInfo.age}</Item>
					</Row>
					<Row>
						Email:
						<Item>{newsletter.email.toLowerCase()}</Item>
					</Row>
					<Row>
						Newsletter:
						<Item>{newsletter.schedule}</Item>
					</Row>
					<Row>
						Token:
						<Item>{token}</Item>
					</Row>
				</List>
			</Card>

			<SuggestionLink
				href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
				target='_blank'
				rel='noopener noreferrer'>
				Watch a video in the meanwhile!
				<Youtube />
			</SuggestionLink>
		</StyledSignUpComplete>
	);
}

export default SignUpComplete;
