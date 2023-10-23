import { createContext, useContext, useReducer } from 'react';
import { Nullable } from '../library/utilities';

interface IState {
	name: Nullable<string>;
	age: Nullable<number>;
}

const initialState: IState = {
	name: undefined,
	age: undefined,
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
	type: 'add_name' | 'add_age';
	payload: any;
}
function reducer(state: IState, action: IAction) {
	switch (action.type) {
		case 'add_name':
			return { ...state, name: action.payload };

		case 'add_age':
			return { ...state, age: action.payload };
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
