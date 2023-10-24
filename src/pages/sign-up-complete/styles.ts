import styled from '@emotion/styled';

export const SuggestionLink = styled.a`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 1rem;
	border: 1px solid ${({ theme }) => theme.colors.secondary};
	border-radius: 1rem;
	column-gap: 1rem;
	color: #777777;
	font-size: 0.75rem;
	text-decoration: none;

	:hover {
		color: ${({ theme }) => theme.colors.primary};
		border: 1px solid #bbbbbb;
	}
	svg {
		width: 24px;
		height: 24px;
		fill: #ff0000;
	}
`;

export const Item = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 3rem;
	padding: 0 1rem;
	border-radius: 2rem;
	background-color: ${({ theme }) => theme.colors.secondary};
`;

export const Row = styled.div`
	display: flex;
	align-items: center;
	margin-top: 0.75rem;
	column-gap: 1rem;
`;

export const List = styled.div`
	margin-top: 1rem;
`;

export const Card = styled.div`
	margin-top: 1rem;
	padding: 1.5rem;
	border-radius: 0.3125rem;
	background-color: ${({ theme }) => theme.colors.white};
	box-shadow: ${({ theme }) => theme.shadows.main};
`;

export const Description = styled.p`
	font-weight: 600;
	font-size: 1rem;
`;

export const Title = styled.h2`
	margin-top: 3rem;
	font-size: 3rem;
	text-align: center;
`;

export const StyledSignUpComplete = styled.div`
	width: 100%;
	max-width: ${({ theme }) => theme.breakpoints.medium};
	margin: auto;
`;
