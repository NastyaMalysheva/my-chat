import React, {useContext} from 'react';

import {Button} from "@material-ui/core";
import {Context} from "../../index";

import "./login.scss"


const Login = () => {
    const {auth, firebase} = useContext(Context)


    const login = async () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        const {user} = await auth.signInWithPopup(provider)
        console.log(user)
    }

    return (
        <div className="login">
            <Button onClick={login} color="primary" variant="contained">Login with Google</Button>
        </div>
    );
};

export default Login;