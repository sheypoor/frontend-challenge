import { Input as InputComponent } from '../../library/components';
import styled from '@emotion/styled';

export const RetryMessage = styled.p`
	margin-top: 1rem;
	color: ${({ theme }) => theme.colors.error};
	text-align: center;
`;

export const Button = styled.button<{ isRetry: boolean }>`
	width: 100%;
	height: 2.75rem;
	margin-top: 2rem;
	padding: 0 1rem;
	border: 0;
	border-radius: 5rem;
	background-color: ${({ isRetry, theme }) =>
		isRetry ? theme.colors.error : theme.colors.primary};

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

export const Chips = styled.div<{ isActive: boolean }>`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 3rem;
	padding: 0 1rem;
	border-radius: 2rem;
	color: ${({ isActive, theme }) =>
		isActive ? theme.colors.white : 'currentColor'};
	text-transform: capitalize;
	cursor: pointer;
	background-color: ${({ isActive, theme }) =>
		isActive ? theme.colors.primary : theme.colors.disabled};

	${({ isActive, theme }) =>
		isActive
			? `
	outline: 0.125rem solid ${theme.colors.primary};
	outline-offset: 0.125rem;
	`
			: ''}
`;

export const Options = styled.div`
	display: flex;
	column-gap: 0.625rem;
`;

export const OptionsWrapper = styled.div`
	margin-top: 1rem;
`;

export const Label = styled.label`
	display: block;
	margin-bottom: 0.5rem;
	font-size: 0.75rem;
	line-height: 1.4;
`;

export const Form = styled.form``;

export const Input = styled(InputComponent)`
	margin: 0;
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

export const StyledNewsletter = styled.div`
	width: 100%;
	max-width: ${({ theme }) => theme.breakpoints.medium};
	margin: auto;
`;
