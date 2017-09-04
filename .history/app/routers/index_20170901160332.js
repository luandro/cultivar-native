import React, { Component } from 'react';
import { Button, Text } from 'react-native';
import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation';

const MainNavigator = TabNavigator(
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


export default StackNavigator(
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
);