import { compose } from 'async';
import { isTyping } from 'react-chat-engine';
import MessageForm from './MessageForm';
import MyMessage from './MyMessage';
import TheirMessage from './TheirMessage';


const ChatFeed =(props)=>{
    // the following lines of code means that we are destrcuturing some data from the props that is chat feeds here
    const { chats, activeChat , userName, messages } =props;
    //the following line means that if chat exis then find the chat and the active chat
    const chat = chats && chats[activeChat];

    // the following line of code means that we are getting the key tat is the message id and we are rendering te message sending process
    // this component is used fir creating the messages 
    // the following fucntion checks who have read the messages
    //the function will work only if the oersin has read the message
    const renderReadReceipts = (message,isMyMessage) =>{
     return  chat.people.map((person,index) =>person.last_read===message.id && (
            
            <div
                key={`read_${index}`}
                className="read-receipt"
                style={{
                    float:isMyMessage?'right':'left',
                    backgroundImage: `url(${person?.person?.avatar})`
                }}


                />

        ))

    }
    const renderMessages = () =>{
        const keys = Object.keys(messages);
        //console.log(keys);
        return keys.map((key, index)=>{
            const message = messages[key];
           //  in above line we take the message with the specific key
           const lastMessageKey = index===0 ?null :keys[index-1];//this line means to return the last message if the index ==0 it means that their are no messages and we return null else return the index of the message

           const isMyMessage = userName===message.sender.username;// this checks if the last message sent was by us or not

           return (
           //this msg_${index} assigns the value of the message woth the given index to the key
            //  this is the meaning of the div with reciept classname this line means that if the last message was mine then while recieving the message we weill keep the message on right if mine else on the left if we recived the message 
            <div key = {`msg_${index}`} style={{width:'100%'}}>

            <div className = "message-block">
                {
                    isMyMessage ? <MyMessage message = {message}/> : <TheirMessage message = {message} lastMessage = {messages[lastMessageKey]}/>

                }


            </div>
            
        
            <div className = "read-receipts" style={{marginRight:isMyMessage ? '18px' : '0px', marginLeft: isMyMessage ? '0px':'68px'}}>        
            </div>

            {
                renderReadReceipts(message, isMyMessage)
            }
            </div>
           )

        })
    }
    
   
    //chat?.title checks that if we have chats already their or no if no then it wont reach till there as we have made a separate condition for the non exitance of chat which returns loading a a sring in cade it dienst exist
   // renderMessages()
   // this line is provdig the gap between the message and the block or form for sending message and i am sending it zero by defualt becuase messages sent should be at the last.
    if(!chat) return "Loading!......";
return (

    <div className="chat-feed">
        <div className="chat-title-container">
            <div className="chat-title">{chat?.title}</div>
            <div className="chat-subtitle">
            {chat.people.map((person)=> ` ${person.person.username}`)}
            </div>
        </div>
        {renderMessages()}
        <div style = {{height:'100px'}} />
        <div className="message-form-container">
            <MessageForm {...props} chatId = {activeChat}/>
        </div>

    </div>
);
}

export default ChatFeed;