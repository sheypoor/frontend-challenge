import { useEffect } from 'react';
import { useGlobalContext } from '../../store';
import { useNavigate } from 'react-router-dom';
import { PERSONAL_INFORMATION_ADDRESS } from '../../routes';

function Newsletter() {
	const navigate = useNavigate();
	const { state } = useGlobalContext();

	useEffect(() => {
		if (state.age === undefined || state.name === undefined) {
			navigate(`/${PERSONAL_INFORMATION_ADDRESS}`);
		}
	}, [navigate, state.age, state.name]);

	return (
		<div>
			{state.name}
			<br />
			{state.age}
		</div>
	);
}

export default Newsletter;
