
import Chatinput from "./Chatinput";
import Chatmsg from "./Chatmsg";
import { useState, useEffect, useRef } from "react";

import "./Styles.css"

function ChatMessages({ chatMessages }) {
    const chatMessagesRef = useRef(null);
    useEffect(() => {
    const containerElem = chatMessagesRef.current;
    if (containerElem) {
        containerElem.scrollTop = containerElem.scrollHeight;
    }
    }, [chatMessages]);

  return (
    <div className="chat-messages-container"
        ref={chatMessagesRef}>
      {chatMessages.map((mssg) => (
        <Chatmsg
          key={mssg.key}
          msg={mssg.msg}
          sender={mssg.sender}
        />
      ))}
    </div>
  );
}


function Final() {
    const [chatMessages,setChatMessages] =useState([
    { msg: "hello chatbot", sender: "user", key: "id1" },
    { msg: "hello ! how can i help you?", sender: "robot", key: "id2" },
    { msg: "can you get me todays date ?", sender: "user", key: "id3" },
    { msg: "Today is September 27", sender: "robot", key: "id4" }
     ]);
    
    return ( 
        <div className="app-container">
           
            <ChatMessages 
                chatMessages={chatMessages}
            /> 
             <Chatinput
                chatMessages={chatMessages}
                setChatMessages={setChatMessages}
            />    
        </div>
     );
}

export default Final;