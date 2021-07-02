import React from 'react'

const TheirMessage = ({lastMessage, message}) => {

    const isFirstMessageByUser = !lastMessage || lastMessage.sender.username != message.sender.username;
    //this will return whether it is the first message that is being returned by the user

    return (
        <div className="message-row">
            {
                isFirstMessageByUser && (
                    <div className = "message-avatar" 
                    style={{backgroundImage: `url(${message?.sender?.avatar})`}}
                    />
                    )

            }
            
                {   message?.attachments?.length>0
                ? (
                    //it means that the attcahed message is an image
                     
                        <img
                            src = {message.attachments[0].file}
                            alt ="message-attachment"
                            className="message-image"
                            style={{float:'right'}}
            
            
                            />
                        ) : (
                            <div className="message" style={{float:'right',marginRight:'18px',color:'Black',backgroundColor:"#306EFF"}}>
                                {message.text}
           
                             </div>
                        )
            
            }
        
             
            
        </div>
    );
}
export default TheirMessage;
