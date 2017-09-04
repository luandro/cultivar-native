import React from 'react';
import { Text, ActivityIndicator } from 'react-native';
import CodePush from 'react-native-code-push';
// import Expo from 'expo';
import { getLanguages } from 'react-native-i18n';
import { ApolloProvider } from 'react-apollo';
import { connect } from 'react-redux';
import { store, client } from './app/store';
import Router from './app/router'; // Your main application component

import UpdateModal from './app/components/UpdateModal';

// Component to postpone render until after Redux state has been rehydrated
const Rehydrated = connect(({ rehydrated }) => ({ rehydrated }))(
	props => (props.rehydrated ? props.children : props.loading)
);

const Loading = () => <ActivityIndicator style={{ flex: 1 }} />;

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			isReady: false,
			showDownloadingModal: false,
			showInstalling: false,
			downloadProgress: 0
		};
	}

	// async componentWillMount() {
	// 	// Load Fonts
	// 	await Expo.Font.loadAsync({
	// 		Roboto: require('native-base/Fonts/Roboto.ttf'),
	// 		Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
	// 		Ionicons: require('@expo/vector-icons/fonts/Ionicons.ttf')
	// 	});

	// 	this.setState({ isReady: true });
	// }

	componentWillMount() {
		getLanguages().then(languages => {
			console.log(languages); // ['en-US', 'en']
		});
	}

	componentDidMount() {
		// CodePush Sync
		CodePush.sync(
			{ updateDialog: true, installMode: CodePush.InstallMode.IMMEDIATE },
			status => {
				switch (status) {
					case CodePush.SyncStatus.DOWNLOADING_PACKAGE:
						this.setState({ showDownloadingModal: true });
						this._modal.open();
						break;
					case CodePush.SyncStatus.INSTALLING_UPDATE:
						this.setState({ showInstalling: true });
						break;
					case CodePush.SyncStatus.UPDATE_INSTALLED:
						this._modal.close();
						this.setState({ showDownloadingModal: false });
						break;
					default:
						break;
				}
			},
			({ receivedBytes, totalBytes }) => {
				this.setState({ downloadProgress: receivedBytes / totalBytes * 100 });
			}
		);
	}

	render() {
		const { isReady, showDownloadingModal, showInstalling, downloadProgress } = this.state;
		// if (!isReady) {
		// 	return <Loading />;
		// }
		// if (showDownloadingModal) {
		// 	return <UpdateModal showInstalling={showInstalling} downloadProgress={downloadProgress} />
		// }
		return (
			<ApolloProvider client={client} store={store}>
				{/* <Rehydrated loading={<Loading />}> */}
				<Router />
				{/* </Rehydrated> */}
			</ApolloProvider>
		);
	}
}

// export default CodePush(App);
export default App;
