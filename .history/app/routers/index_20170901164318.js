import React from 'react';
import { Button, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import DrawerNavigator from './DrawerNavigator';

export default StackNavigator(
	{
		Home: { screen: DrawerNavigator }
	},
	{
		navigationOptions: ({ navigation }) => ({
			headerLeft: (
				<Button onPress={() => navigation.navigate('DrawerOpen')} title="Menu"/>
			),
			headerTitle: 'Cultivar',
			headerTitleStyle: {
				color: '#FFF'
			},
			headerStyle: {
				backgroundColor: 'green'
			},
			headerBackTitle: null,
			headerTintColor: '#FFF'
		})
		// styles
	}
);