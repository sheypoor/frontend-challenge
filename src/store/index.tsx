import { createContext, useContext, useReducer } from 'react';
import { Nullable } from '../library/utilities';

interface IState {
	name: Nullable<string>;
	age: Nullable<number>;
	email: Nullable<string>;
	newsletter: Nullable<
		'add_name' | 'add_age' | 'add_email' | 'add_schedule' | 'add_token'
	>;
	token: Nullable<string>;
}

const initialState: IState = {
	name: undefined,
	age: undefined,
	email: undefined,
	newsletter: undefined,
	token: undefined,
};

interface IGlobalContext {
	state: IState;
	dispatch: React.Dispatch<IAction>;
}

export const GlobalContext = createContext<IGlobalContext>(null!);

interface Props {
	children: React.ReactNode;
}

interface IAction {
	type: 'add_name' | 'add_age' | 'add_email' | 'add_schedule' | 'add_token';
	payload: any;
}
function reducer(state: IState, action: IAction) {
	switch (action.type) {
		case 'add_name':
			return { ...state, name: action.payload };

		case 'add_age':
			return { ...state, age: action.payload };

		case 'add_email':
			return { ...state, email: action.payload };

		case 'add_schedule':
			return { ...state, newsletter: action.payload };

		case 'add_token':
			return { ...state, token: action.payload };
	}
	throw Error('Unknown action: ' + action.type);
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
