import React, { Component } from 'react';
import { Button, Icon } from 'native-base';
import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation';
import DrawBar from './containers/DrawBar';
import { Login, Signup } from './containers/Authentication';


export default (RouterNavigator = StackNavigator(
	{
		Home: { screen: DrawerRouter }
	},
	{
		navigationOptions: ({ navigation }) => ({
			headerLeft: (
				<Button onPress={() => navigation.navigate('DrawerOpen')}>
					<Icon name="menu" style={{ fontSize: 20, color: 'white' }} />
				</Button>
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
));