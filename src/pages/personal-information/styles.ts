import styled from '@emotion/styled';

export const Button = styled.button`
	margin-top: 2rem;
	background-color: #0084ff;
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

export const HelperText = styled.p`
	color: #fe5576;
	margin-top: 0.5rem;
	text-transform: lowercase;
	font-size: 0.75rem;
	height: 14px;
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

export const Input = styled.input<{ isValid: boolean }>`
	width: 100%;
	padding: 0 1rem;
	border: 1px solid #d0d1d3;
	border-radius: 0.3125rem;
	height: 2.75rem;
	outline: 0;

	:focus {
		border-color: ${(props) =>
			props.isValid === true ? '#0084ff' : '#fe5576'};
		box-shadow: 0 0 3px
			${(props) => (props.isValid === true ? '#0084ff' : '#fe5576')};
	}
`;

export const InputWrapper = styled.div`
	margin-top: 1.5rem;
`;

export const Form = styled.form``;

export const Description = styled.p`
	font-size: 1rem;
	font-weight: 600;
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

export const StyledPersonalInformation = styled.div`
	max-width: 27rem;
	width: 100%;
	margin: auto;
`;
