import React from 'react';
import { Text, ActivityIndicator } from 'react-native';
import { getLanguages } from 'react-native-i18n';
import { ApolloProvider } from 'react-apollo';
import { connect } from 'react-redux';
import I18n from 'react-native-i18n';
import { store, client } from './app/store';
import Router from './routers'; // Your main application component

I18n.fallbacks = true;

I18n.translations = {
	en: {
		greeting: 'Hi!'
	},
	fr: {
		greeting: 'Bonjour!'
	}
};

// Component to postpone render until after Redux state has been rehydrated
const Rehydrated = connect(({ rehydrated }) => ({ rehydrated }))(
	props => (props.rehydrated ? props.children : props.loading)
);

const Loading = () => <ActivityIndicator style={{ flex: 1 }} />;

class App extends React.Component {
	// constructor() {
	// 	super();
	// 	this.state = {};
	// }

	// async componentWillMount() {
	// 	await I18n.initAsync();
	// }

	render() {
		return (
			<ApolloProvider client={client} store={store}>
				{/* <Text>{I18n.t('greeting')}</Text> */}
				{/* <Rehydrated loading={<Loading />}> */}
				<Router />
				{/* </Rehydrated> */}
			</ApolloProvider>
		);
	}
}

export default App;
