import { useState } from 'react';

import './styles.css';

import Button from '../../components/Button';
import Input from '../../components/Input';
import Link from '../../components/Link';
import { registerNewUser } from '../../utils/services/sign-in-service';
import inputValidationFactory from '../../utils/factories/input-validation';

const SignIn = () => {
	const [isSubmittedValid, setIsSubmittedValid] = useState(null);
	const [form, setForm] = useState([
		{
			key: 'email',
			value: '',
			touched: false,
			valid: null,
		},
		{
			key: 'password',
			value: '',
			touched: false,
			valid: null,
		},
		{
			key: 'username',
			value: '',
			touched: false,
			valid: null,
		},
	]);

	const submit = async () => {
		if ((form[0].valid, form[1].valid, form[2].valid)) {
			setIsSubmittedValid(true);

			await registerNewUser(form[0].value, form[1].value, form[2].value);
			return;
		}

		setIsSubmittedValid(false);
	};

	const handleInput = (event, type) => {
		const formCopy = [...form];

		const updatedForm = formCopy.map((input) => {
			if (input.key === type) {
				input.value = event.target.value;
			}
			return inputValidationFactory(input);
		});

		setForm(updatedForm);
	};

	const handleTouched = (type) => {
		const formCopy = [...form];

		const updatedForm = formCopy.map((el) => {
			if (el.key === type) {
				el.touched = true;
			}
			return el;
		});

		setForm(updatedForm);

		formCopy.forEach((input) => {
			inputValidationFactory(input);
		});
	};

	return (
		<div id="signin-page">
			{isSubmittedValid === false && <p>some of the inputs arent valid!</p>}
			<Input
				className="signin-input"
				type="email"
				onChange={(value) => handleInput(value, 'email')}
				label="Email: "
				placeholder="example@example.com"
				onBlur={() => handleTouched('email')}
				errorMessage="not valid email"
				errorCondition={form[0].valid === false}
			/>
			<Input
				className="signin-input"
				type="password"
				onChange={(value) => handleInput(value, 'password')}
				label="Password: "
				placeholder="example123"
				onBlur={() => handleTouched('password')}
				errorMessage="not valid password"
				errorCondition={form[1].valid === false}
			/>
			<Input
				className="signin-input"
				type="text"
				onChange={(value) => handleInput(value, 'username')}
				label="Username: "
				placeholder="your username"
				onBlur={() => handleTouched('username')}
				errorMessage="not valid username"
				errorCondition={form[2].valid === false}
			/>
			<div id="signin-button-link">
				<Button id="submit-button" onClick={submit} label="Submit" />
				<Link id="login-link" to="/login">
					login
				</Link>
			</div>
		</div>
	);
};

export default SignIn;
