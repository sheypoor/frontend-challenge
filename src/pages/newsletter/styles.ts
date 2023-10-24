import { Input as InputComponent } from '../../library/components';
import styled from '@emotion/styled';

export const RetryMessage = styled.p`
	color: #fe5576;
	margin-top: 1rem;
	text-align: center;
`;

export const Button = styled.button<{ isRetry: boolean }>`
	margin-top: 2rem;
	background-color: ${({ isRetry }) => (isRetry ? '#fe5576' : '#0084ff')};
	border-radius: 5rem;
	padding: 0 16px;
	border: 0;
	width: 100%;
	height: 44px;

	:hover {
		outline: #0084ff solid 2px;
		outline-offset: 2px;
	}

	:disabled {
		background-color: #dddddd;
		outline: none;
	}

	svg {
		fill: #ffffff;
	}
`;

export const Chips = styled.div<{ isActive: boolean }>`
	background-color: ${({ isActive }) => (isActive ? '#0084ff' : '#ddd')};
	color: ${({ isActive }) => (isActive ? '#fff' : '#333')};
	border-radius: 2rem;
	height: 48px;
	text-transform: capitalize;
	padding: 0 1rem;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;

	${({ isActive }) =>
		isActive
			? `
	outline: 2px solid #0084ff;
	outline-offset: 2px;
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
	font-weight: 400;
	font-size: 0.75rem;
	line-height: 1.4;
	letter-spacing: 0;
	color: #030a17;
	display: block;
	margin-bottom: 0.5rem;
`;

export const Form = styled.form``;

export const Input = styled(InputComponent)`
	margin: 0;
`;

export const Card = styled.div`
	margin-top: 16px;
	padding: 1.5rem 1rem;
	box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.1);
	background-color: white;
	border-radius: 0.3125rem;
`;

export const Title = styled.h2`
	text-align: center;
	font-size: 3rem;
	margin-top: 48px;
`;

export const StyledNewsletter = styled.div`
	max-width: 28rem;
	width: 100%;
	margin: auto;
`;
