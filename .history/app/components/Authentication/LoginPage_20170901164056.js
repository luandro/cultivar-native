import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';

export default class LoginPage extends Component {
	static navigationOptions = {
		drawerLabel: 'Login',
		// drawerIcon: () => <Icon name="menu" />,
		drawerWidth: 200,
		drawerPosition: 'right',	  
	};
	render() {
		const { navigation: { navigate } } = this.props;
		return (
			<View>
				<Text>This is Content Section</Text>
				<Button onPress={() => navigate('Home')} title='Entrar' />				
			</View>
		);
	}
}