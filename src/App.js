import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import SignIn from './views/SignIn';
import Login from './views/Login';

const App = () => (
	<BrowserRouter>
		<Switch>
			<Route path="/signin" component={SignIn} />
			<Route path="/login" component={Login} />
			<Redirect from="/" to="/signin" />
		</Switch>
	</BrowserRouter>
);

export default App;
