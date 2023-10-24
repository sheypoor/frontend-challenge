import styled from '@emotion/styled';

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

export const StyledInput = styled.div`
	margin-top: 1.5rem;
`;
