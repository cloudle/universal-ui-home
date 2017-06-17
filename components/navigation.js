import React, { Component } from 'react';
import withRedux from 'next-redux-wrapper';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Router from 'next/router';

import { colors } from '../utils/index';

type Props = {
	url?: Object,
};

export default class Navigation extends Component {
	props: Props;

	render() {
		return <View style={styles.container}>
			{this.renderLogo()}
			{this.renderMenus()}
		</View>;
	}

	renderLogo() {
		return <View>
			<Text style={styles.text}>Universal UI</Text>
		</View>;
	}

	renderMenus() {
		return <View style={styles.menuContainer}>
			{menus.map((menu, i) => {
				const activeWrapperStyle = (this.props.url
					&& this.props.url.pathname === menu.link) ? {
					backgroundColor: 'rgba(255, 255, 255, 0.07)',
				} : {};

				return <TouchableOpacity
					activeOpacity={0.2} key={i}
					style={[styles.menuItemWrapper, activeWrapperStyle]}
					onPress={() => {
						Router.push(menu.link);
					}}>
					<Text style={styles.menuText}>{menu.title}</Text>
				</TouchableOpacity>})}
		</View>;
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: colors.main,
		paddingLeft: 10, paddingRight: 10,
	},
	text: {
		color: '#ffffff',
	},
	menuContainer: {
		flexDirection: 'row',
		marginLeft: 20, marginRight: 20,
		flex: 1,
	},
	menuItemWrapper: {
		padding: 12, paddingTop: 9, paddingBottom: 9,
		margin: 12, marginLeft: 8, marginRight: 8,
		borderRadius: 4,
	},
	menuText: {
		color: '#ffffff',
		fontSize: 12,
		fontWeight: '300',
	},
});

const menus = [{
	title: 'Platforms',
	link: '/platforms',
	active: true,
}, {
	title: 'Showcases',
	link: '/showcases',
}, {
	title: 'Docs',
	link: '/docs',
}, {
	title: 'Support',
	link: '/support',
},  {
	title: 'Ecosystem',
	link: '/ecosystem',
}, ];