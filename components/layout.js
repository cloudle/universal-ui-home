import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import withRedux from 'next-redux-wrapper';
import Router from 'next/router';

import store from '../store';
import Navigation from './navigation';
import ProgressBar from './progressBar';
import * as appActions from '../store/action/app';
import type { Style } from '../typeDefinition';

type Props = {
	url?: Object,
	style?: Style,
	routeLoaded?: boolean,
};

@withRedux(store, ({ app }) => {
	return {
		routeLoaded: app.routeLoaded,
	};
})

export default class AppLayout extends Component {
	props: Props;

	componentWillMount() {
		Router.onRouteChangeStart = (url) => {
			this.props.dispatch(appActions.toggleRouteLoaded(false));
		};

		Router.onRouteChangeComplete = () => {
			this.props.dispatch(appActions.toggleRouteLoaded(true));
		};

		Router.onRouteChangeError = () => {
			this.props.dispatch(appActions.toggleRouteLoaded(true));
		};
	}

	render() {
		return <View style={styles.container}>
			<Navigation url={this.props.url}/>
			<View style={[styles.contentContainer, this.props.style]}>
				{this.props.children}
			</View>
			<ProgressBar backgroundColor="#ffffff"/>
		</View>;
	}
}

const styles = StyleSheet.create({
  container: {
  	position: 'absolute',
		top: 0, left: 0, right: 0, bottom: 0,
	},
	contentContainer: {
  	flex: 1,
	},
});