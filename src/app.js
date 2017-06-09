import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './router';

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
		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
		return (
			<Provider store={store}>
				<Router />
			</Provider>
		);
	}
}

export default App;
