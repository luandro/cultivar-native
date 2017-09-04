import React from 'react';
import { Text, Button, Container } from 'native-base';

export default class Home extends React.Component {
	render() {
    const { navigation: { navigate } } = this.props;
		return (
			<Container>
				<Text>Home!</Text>
				<Button onPress={() => navigate('DrawerOpen')}>
					<Text>Menu</Text>
				</Button>
			</Container>
		);
	}
}
