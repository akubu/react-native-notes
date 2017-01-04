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
            apiKey: "AIzaSyDNuqarTopmjFyA_2UKsQ9sI-1kiHGFLLA",
            authDomain: "notes-62eb4.firebaseapp.com",
            databaseURL: "https://notes-62eb4.firebaseio.com",
            storageBucket: "notes-62eb4.appspot.com",
            messagingSenderId: "883526619856"
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
