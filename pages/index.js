import React, { Component } from 'react';
import { TouchableOpacity, View, Image, Text, StyleSheet, } from 'react-native';
import withRedux from 'next-redux-wrapper';
import { Button, Input } from 'react-universal-ui';
import Link from 'next/link';

import Layout from '../components/layout';
import Greeting from '../components/greeting';
import store from '../store';
import * as appActions from '../store/action/app';

type Props = {
	dispatch?: Function,
	counter?: number,
};

@withRedux(store, ({ app }) => {
	return {
		counter: app.counter,
	};
})

export default class IndexPage extends Component {
	props: Props;

	render() {
		return <Layout>
			<View style={styles.container}>
				<Greeting/>
				<Text>Hello world! {this.props.counter}</Text>
				<Button
					wrapperStyle={{ marginTop: 5, marginBottom: 10, }}
					title="Increase"
					onPress={() => this.props.dispatch(appActions.increaseCounter())}/>

				<Link href="docs"><a>Goto Counter Page</a></Link>
			</View>
		</Layout>;
	}
}

const styles = StyleSheet.create({
	container: {
		position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
		justifyContent: 'center', alignItems: 'center',
	},
});