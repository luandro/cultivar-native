import React from 'react';
import { TabNavigator } from 'react-navigation';
import Home from '../containers/Home';
import Catalogue from '../containers/Catalogue';

export default TabNavigator(
	{
		Home: { screen: Home },
		// Poll: { screen: Poll },
		// Guide: { screen: Guide },
		Catalogue: { screen: Catalogue }
	},
	{
		tabBarPosition: 'bottom'
	}
);
