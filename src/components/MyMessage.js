import React from 'react'

const  MyMessage = ({message}) => {
    if(message?.attachments?.length>0)
    {
        //it means that the attcahed message is an image
        return (
            <img
                src = {message.attachments[0].file}
                alt ="message-attachment"
                className="message-image"
                style={{float:'right'}}


                />
        )

    }
    
    
    return (
        <div className="message" style={{float:'right',marginRight:'18px',color:'Black',backgroundColor:"#306EFF"}}>
            {message.text}
           
        </div>
    );
}
export default MyMessage;
