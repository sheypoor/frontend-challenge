import styled from '@emotion/styled';

export const Button = styled.button`
	width: 100%;
	height: 2.75rem;
	margin-top: 2rem;
	padding: 0 1rem;
	border: 0;
	border-radius: 5rem;
	background-color: ${({ theme }) => theme.colors.primary};

	:hover {
		outline: ${({ theme }) => theme.colors.primary} solid 0.125rem;
		outline-offset: 0.125rem;
	}

	:disabled {
		outline: none;
		background-color: ${({ theme }) => theme.colors.disabled};
	}

	svg {
		fill: ${({ theme }) => theme.colors.white};
	}
`;

export const Form = styled.form``;

export const Description = styled.p`
	font-weight: 600;
	font-size: 1rem;
`;

export const Card = styled.div`
	margin-top: 1rem;
	padding: 1.5rem 1rem;
	border-radius: 0.3125rem;
	background-color: ${({ theme }) => theme.colors.white};
	box-shadow: ${({ theme }) => theme.shadows.main};
`;

export const Title = styled.h2`
	margin-top: 3rem;
	font-size: 3rem;
	text-align: center;
`;

export const StyledPersonalInformation = styled.div`
	width: 100%;
	max-width: ${({ theme }) => theme.breakpoints.medium};
	margin: auto;
`;
