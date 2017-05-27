import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

class App extends Component {
	componentWillMount() {
		const config = {
			apiKey: 'AIzaSyDxhWUaaxIAy-GfIKODg7vX3j3dmAVvbmY',
			authDomain: 'udemy-reactnative-manager.firebaseapp.com',
			databaseURL: 'https://udemy-reactnative-manager.firebaseio.com',
			projectId: 'udemy-reactnative-manager',
			storageBucket: 'udemy-reactnative-manager.appspot.com',
			messagingSenderId: '974767161811'
		};
		firebase.initializeApp(config);
	}

	render() {
		return (
			<Provider store={createStore(reducers)}>
				<View>
					<Text>
						Hello!
					</Text>
				</View>
			</Provider>
		);
	}
}

export default App;
