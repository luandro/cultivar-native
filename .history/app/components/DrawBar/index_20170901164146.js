import React, { Component } from 'react';
import { Text, AppRegistry, Image, TouchableOpacity } from 'react-native';

const routes = ['Auth', 'Perfil', 'Sobre', 'Doações'];

export default class DrawBar extends Component {
	static navigationOptions = {
		header: null
	};
	render() {
		return (
			<Text>Menu</Text>
		);
	}
}
