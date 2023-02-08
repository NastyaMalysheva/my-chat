import React, {useContext} from 'react'

import {
    Paper
} from "@material-ui/core";
import {Context} from "../../index";
import SendMessageBlock from "./SendMessageBlock/SendMessageBlock";
import InfoBar from "./InfoBar/InfoBar";
import Messages from "./Messages/Messages";
import {useCollectionData} from "react-firebase-hooks/firestore";
import {useAuthState} from "react-firebase-hooks/auth";

import './chat.scss'


function Chat() {
    const {firestore} = useContext(Context)
    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)
    const [messages, loading] = useCollectionData(
        firestore.collection('messages').orderBy('createdAt')
    )


    return (
        <Paper elevation={3} className="chat-layout">
            <InfoBar name={user?.displayName}/>
            <Messages isLoading={loading} messages={messages}/>
            <SendMessageBlock isLoading={loading}/>
        </Paper>
    )
}

export default Chat