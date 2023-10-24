/// <reference types="react-scripts" />

declare module 'sdk' {
	interface User {
		name: string;
		age: number;
		email: string;
		newsletter: 'daily' | 'weekly' | 'monthly';
	}
	declare function createUser(user: User): Promise<{
		user: User;
		token: string;
	}>;
}
