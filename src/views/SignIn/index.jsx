import Button from '../../components/Button';
import Input from '../../components/Input';

const SignIn = () => {
	return (
		<div>
			<Input label="Email: " placeholder="example@example.com" />
			<Input label="Password: " placeholder="example123" />
			<Input label="Username: " placeholder="your username" />
			<Button />
		</div>
	);
};

export default SignIn;
