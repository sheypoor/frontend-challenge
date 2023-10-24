import { createContext, useContext, useReducer } from 'react';
import { IAction, IGlobalContext, IState } from './types';

const initialState: IState = {
	personalInfo: null,
	newsletter: null,
	token: undefined,
};

export const GlobalContext = createContext<IGlobalContext>(null!);

function reducer(state: IState, action: IAction): IState {
	switch (action.type) {
		case 'update_personal_info':
			return {
				...state,
				personalInfo: {
					...action.payload,
				},
			};

		case 'update_newsletter':
			return {
				...state,
				newsletter: {
					...action.payload,
				},
			};
		case 'update_token':
			return { ...state, token: action.payload };
	}
	throw Error('Unknown action: ' + action.type);
}

interface Props {
	children: React.ReactNode;
}

export function GlobalContextProvider({ children }: Props) {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<GlobalContext.Provider value={{ state, dispatch }}>
			{children}
		</GlobalContext.Provider>
	);
}

export function useGlobalContext() {
	return useContext(GlobalContext);
}
