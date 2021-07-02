import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import './App.css';
import  ChatFeed from "./components/ChatFeed";
import  LoginForm from "./components/LoginForm";


const App=()=>{
    if(!localStorage.getItem('username')) return <LoginForm />
    return (

        <ChatEngine

        height="100vh"
        projectID="77ae9519-2465-4b19-a86b-48cc624bf656"
        userName="Vedant"
        userSecret="123123"
        renderChatFeed = {(chatAppProps)=><ChatFeed {...chatAppProps} />}
    />

    );
   }
export default App;
 