import React from 'react';
import { Text, AppRegistry, Image, TouchableOpacity } from 'react-native';

const routes = ['Auth', 'Perfil', 'Sobre', 'Doações'];

export default class DrawBar extends React.Component {
	static navigationOptions = {
		header: null
	};
	render() {
		return (
			<Text>Menu</Text>
		);
	}
}
