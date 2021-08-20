import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import SignIn from './views/SignIn';

const App = () => (
	<BrowserRouter>
		<Switch>
			<Route path="/signin" component={SignIn} />
			<Redirect from="/" to="/signin" />
		</Switch>
	</BrowserRouter>
);

export default App;
