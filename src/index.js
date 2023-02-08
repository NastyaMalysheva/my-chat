import React, {createContext} from 'react';

import ReactDOM from 'react-dom';
import App from './App';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import './index.scss';

firebase.initializeApp({
    apiKey: "AIzaSyBVC37wSX08gaiMlHxxOv4R-vPPxQpoHBY",
    authDomain: "my-real-chat-eb0f1.firebaseapp.com",
    projectId: "my-real-chat-eb0f1",
    storageBucket: "my-real-chat-eb0f1.appspot.com",
    messagingSenderId: "291380122547",
    appId: "1:291380122547:web:510d0ae9019e65850071c6",
    measurementId: "G-PW4W1KDW1Z"
})
const auth = firebase.auth()
const firestore = firebase.firestore()


export const Context = createContext(null)

ReactDOM.render(
    <React.StrictMode>
        <Context.Provider value={{auth, firebase, firestore}}>
            <App/>
        </Context.Provider>
    </React.StrictMode>,
    document.getElementById('root')
);


