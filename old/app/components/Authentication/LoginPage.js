import React, { Component } from 'react';
import {
	Container,
	Header,
	Title,
	Content,
	Footer,
	FooterTab,
	Button,
	Left,
	Right,
	Body,
	Icon,
	Text
} from 'native-base';

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
			<Container>
				<Content>
					<Text>This is Content Section</Text>
					<Button onPress={() => navigate('Home')}>
						<Text>Entrar</Text>
					</Button>
				</Content>
			</Container>
		);
	}
}