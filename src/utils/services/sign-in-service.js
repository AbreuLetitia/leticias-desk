import instance from './index';

export const registerNewUser = async (email, password, username) => {
	try {
		const res = await instance.post('/users.json', {
			email: email,
			password: password,
			username: username,
		});

		console.log(res);
	} catch (error) {
		console.log(error);
	}
};
