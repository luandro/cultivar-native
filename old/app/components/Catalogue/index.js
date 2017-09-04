import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default class Page extends React.Component {
	render() {
		const { navigation, data: { error, allPlants } } = this.props;
		return (
			<View>
				<Text>Catalogue</Text>
				{allPlants && allPlants.map(plant => <Text key={plant.binomial}>{plant.binomial}</Text>)}
				{error && <Text style={{ color: 'red' }}>{error.toString()}</Text>}
				<Button title="Go Home" onPress={() => navigation.navigate('Home')} />
			</View>
		);
	}
}
