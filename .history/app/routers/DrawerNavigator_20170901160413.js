import { DrawerNavigator } from 'react-navigation';
import DrawBar from '../containers/DrawBar';
import AuthTab from './AuthTab'

export default DrawerNavigator(
	{
		Auth: { screen: AuthTab },
		Main: { screen: MainNavigator }
		// Profile: { screen: Profile },
		// Configurations: { screen: Configurations },
		// Reader: { screen: Reader },
		// Donations: { screen: Donations },
		// About: { screen: About },
	},
	{
		contentComponent: props => <DrawBar {...props} />
	}
);