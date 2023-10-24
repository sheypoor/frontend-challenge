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
	max-width: 28rem;
	width: 100%;
	margin: auto;
`;
