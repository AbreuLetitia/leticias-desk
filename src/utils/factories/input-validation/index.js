import isEmail from 'validator/lib/isEmail';
import isStrongPassword from 'validator/lib/isStrongPassword';
import isAlphanumeric from 'validator/lib/isAlphanumeric';

const email = (input) => {
	console.log(input);
	input.valid = isEmail(input.value);
	return input;
};

const password = (input) => {
	input.valid = isStrongPassword(input.value);
	return input;
};

const username = (input) => {
	input.valid = isAlphanumeric(input.value);
	return input;
};

const validations = { email, password, username };

const inputValidationFactory = (input) => {
	const validationType = validations[input.key];

	if (validationType && input.touched) {
		return validationType(input);
	}

	return input;
};

export default inputValidationFactory;
