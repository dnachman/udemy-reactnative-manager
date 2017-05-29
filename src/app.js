import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

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
				<LoginForm />
			</Provider>
		);
	}
}

export default App;
