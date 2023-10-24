import styled from '@emotion/styled';

export const Suggestion = styled.a`
	display: flex;
	align-items: center;
	justify-content: center;
	text-decoration: none;
	margin-top: 1rem;
	column-gap: 1rem;
	font-size: 0.75rem;
	color: #777;
	border: 1px solid #ddd;
	border-radius: 1rem;
	:hover {
		color: #0084ff;
	border: 1px solid #bbb;

	}
	svg {
		width: 24px;
		height: 24px;
		fill: red;
	}
`;

export const Item = styled.div`
	background-color: #ddd;
	color: #333;
	border-radius: 2rem;
	height: 48px;
	text-transform: capitalize;
	padding: 0 1rem;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Row = styled.div`
	display: flex;
	align-items: center;
	column-gap: 1rem;
	margin-top: 0.75rem;
`;

export const List = styled.div`
	margin-top: 1rem;
`;

export const Description = styled.p`
	margin-top: 4rem;
	font-size: 1rem;
	font-weight: 600;
`;

export const Title = styled.h2`
	text-align: center;
	font-size: 3rem;
	margin-top: 48px;
`;

export const StyledSignUpComplete = styled.div`
	max-width: 28rem;
	width: 100%;
	margin: auto;
`;
