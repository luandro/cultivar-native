import React from 'react';
import { Text, ActivityIndicator } from 'react-native';
import { getLanguages } from 'react-native-i18n';
import { ApolloProvider } from 'react-apollo';
import { connect } from 'react-redux';
import I18n from 'react-native-i18n';
import { store, client } from './app/store';
import Router from './app/routers'; // Your main application component

// Component to postpone render until after Redux state has been rehydrated
const Rehydrated = connect(({ rehydrated }) => ({ rehydrated }))(
	props => (props.rehydrated ? props.children : props.loading)
);

const Loading = () => <ActivityIndicator style={{ flex: 1 }} />;

class App extends React.Component {
	constructor() {
		super();
		this.state = {
		};
    }

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
