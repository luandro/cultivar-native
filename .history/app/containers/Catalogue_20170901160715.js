import React from 'react';
import { Text, Button, View } from 'react-native';

export default class Catalogue extends React.Component {
	render() {
    const { navigation: { navigate } } = this.props;
		return (
			<View>
				<Text>Catalogue!</Text>
				<Button onPress={() => navigate('DrawerOpen')}>
					<Text>Menu</Text>
				</Button>
			</View>
		);
	}
}
