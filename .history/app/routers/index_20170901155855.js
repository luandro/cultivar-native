import React, { Component } from 'react';
import { Button, Text } from 'react-native';
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
                    <Text>Menu</Text>
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