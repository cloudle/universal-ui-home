import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import AppLayout from '../../components/layout';

export default class SupportPage extends Component {
	render() {
		return <AppLayout url={this.props.url}>
			<Text>SupportPage</Text>
		</AppLayout>;
	}
}

const styles = StyleSheet.create({

});