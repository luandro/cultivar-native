import React from 'react';
import { Text, Button, View } from 'react-native';

export default class Home extends React.Component {
	render() {
    const { navigation: { navigate } } = this.props;
		return (
			<View>
				<Text>Home!</Text>
				<Button onPress={() => navigate('DrawerOpen')}>
					<Text>Menu</Text>
				</Button>
			</View>
		);
	}
}
