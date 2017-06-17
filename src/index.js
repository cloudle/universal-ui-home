import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Provider, connect } from 'react-redux';
import { Button } from 'react-universal-ui';

import Greeting from '../components/greeting';

type Props = {

};

export default class App extends Component {
	props: Props;

	render() {
		return <View style={styles.container}>
			<Greeting/>
			<Text style={styles.welcome}>
				Welcome to React Native
			</Text>
			<Text style={styles.instructions}>
				To get started, edit src/app.js
			</Text>
			<Text style={styles.instructions}>
				Press Cmd+R to reload,{'\n'}
				Cmd+D or shake for dev menu
			</Text>
			<Button
				wrapperStyle={styles.buttonWrapper}
				title={`Click me!`}/>
		</View>;
	}
}

// type ContainerProps = {
// 	store: Object,
// };
//
// export default function AppContainer({ store }: ContainerProps) {
// 	return <Provider store={store}>
// 		<App/>
// 	</Provider>;
// }

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
	counterButton: {
		backgroundColor: '#00bcd4',
		width: 120, marginTop: 10,
	},
	buttonWrapper: {
		backgroundColor: '#00bcd4',
		width: 120,
		marginTop: 20,
	},
	buttonIcon: {
		fontSize: 28,
		color: '#ffffff',
	},
});