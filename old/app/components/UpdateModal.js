import { Container, Content, Text, View } from 'native-base';
import Modal from 'react-native-modalbox';

export default UpdateModal = ({ showInstalling, downloadProgress }) =>
	<Modal
		backdrop={false}
		ref={c => {
			this._modal = c;
		}}
		swipeToClose={false}
	>
		<View
			style={{
				flex: 1,
				alignSelf: 'stretch',
				justifyContent: 'center',
				padding: 20
			}}
		>
			{showInstalling
				? <Text
						style={{
							// color: theme.brandPrimary,
							textAlign: 'center',
							marginBottom: 15,
							fontSize: 15
						}}
					>
						Instalando atualização...
					</Text>
				: <View
						style={{
							flex: 1,
							alignSelf: 'stretch',
							justifyContent: 'center',
							padding: 20
						}}
					>
						<Text
							style={{
								// color: theme.brandPrimary,
								textAlign: 'center',
								marginBottom: 15,
								fontSize: 15
							}}
						>
							Downloading update... {`${parseInt(downloadProgress, 10)} %`}
						</Text>
					</View>}
		</View>
	</Modal>;
