import React, { Component } from 'react';
import withRedux from 'next-redux-wrapper';
import { Animated, Easing, Dimensions, View, Text, StyleSheet } from 'react-native';

import store from '../store';
import * as appActions from '../store/action/app';

type Props = {
	initialProgress?: number,
	backgroundColor?: string,
	shadowColor?: string,
	progress?: number,
	done?: boolean,
};

@withRedux(store, ({ app }) => {
	return {
		counter: app.counter,
		progress: app.loadingProgress,
		done: app.routeLoaded,
	};
})

export default class ProgressBar extends Component {
	props: Props;

	static defaultProps = {
		initialProgress: 0,
		backgroundColor: '#249ade',
		shadowColor: '#ffffff',
	};

	componentDidMount() {
		this.startProgress();
	}

	componentWillUnmount() {
		this.interval && clearInterval(this.interval);
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.done === true && nextProps.done === false) {
			this.startProgress();
		}
	}

	render() {
		const classes = this.props.done ? 'progress-bar done' : 'progress-bar',
			progressStyle = {
				width: `${this.props.progress * 100}%`,
				backgroundColor: this.props.backgroundColor,
				shadowColor: this.props.shadowColor,
			};

		return this.props.progress >= 1 ? <View>
			<Text>{JSON.stringify(this.props.counter)}</Text>
		</View> : <View className={classes} style={[styles.container, progressStyle]}>
			<Text>{JSON.stringify(this.props.counter)}</Text>
		</View>;
	}

	startProgress = () => {
		this.interval && clearInterval(this.interval);
		this.interval = setInterval(this.tick, 20);
		this.props.dispatch(appActions.updateLoadingProgress(0));
	};

	tick = () => {
		if (this.props.done) {
			this.closingTick();
		} else {
			this.optimisticTick();
		}
	};

	optimisticTick = () => {
		const currentProgress = this.props.progress;
		let nextProgress = currentProgress;

		if (currentProgress >= 0 && currentProgress < 0.2) { nextProgress += 0.01; }
		else if (currentProgress >= 0.2 && currentProgress < 0.5) { nextProgress += 0.004; }
		else if (currentProgress >= 0.5 && currentProgress < 0.8) { nextProgress += 0.002; }
		else if (currentProgress >= 0.8 && currentProgress < 0.99) { nextProgress += 0.0005; }
		this.props.dispatch(appActions.updateLoadingProgress(nextProgress));
	};

	closingTick = () => {
		const nextProgress = this.props.progress + 0.01 + (Math.random() * 0.01);

		if (nextProgress >= 1 && this.interval) clearInterval(this.interval);
		this.props.dispatch(appActions.updateLoadingProgress(nextProgress));
	}
}

const styles = StyleSheet.create({
  container: {
  	position: 'absolute', top: 0, left: 0,
		height: 2, width: '0%',
		shadowOffset: { width: 0, height: 0, },
		shadowOpacity: 0.5,
		shadowRadius: 4,
	},
});