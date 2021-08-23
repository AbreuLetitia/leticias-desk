import Link from '../../components/Link';
import Input from '../../components/Input';
import Button from '../../components/Button';

const Login = () => {
	return (
		<div>
			<Input label="Email: " placeholder="email" type="email" />
			<Input label="Password: " placeholder="password" type="password" />
			<Button label="Login" />
			<Link id="signin-link" to="/signin">
				Sign in
			</Link>
		</div>
	);
};

export default Login;
