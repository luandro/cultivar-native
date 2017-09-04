import { TabNavigator } from 'react-navigation';
import { Login, Signup } from '../containers/Authentication';

export default TabNavigator({
	Login: { screen: Login },
	Signup: { screen: Signup }
});