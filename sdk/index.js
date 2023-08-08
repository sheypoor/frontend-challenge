export function createUser(user) {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve({user, token: 'test.token'});
		}, 1000);
	});
}
