import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import AppLayout from '../../components/layout';

export default class EcosystemPage extends Component {
	render() {
		return <AppLayout url={this.props.url}>
			<Text>EcosystemPage</Text>
		</AppLayout>;
	}
}

const styles = StyleSheet.create({

});