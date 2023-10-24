import { Nullable } from '@utilities';

export type ISchedule = 'daily' | 'weekly' | 'monthly';

export interface IState {
	personalInfo: Nullable<{
		name: string;
		age: number;
	}>;
	newsletter: Nullable<{
		email: string;
		schedule: ISchedule;
	}>;
	token: string | undefined;
}

export interface IAction {
	type: 'update_personal_info' | 'update_newsletter' | 'update_token';
	payload: any;
}

export interface IGlobalContext {
	state: IState;
	dispatch: React.Dispatch<IAction>;
}
