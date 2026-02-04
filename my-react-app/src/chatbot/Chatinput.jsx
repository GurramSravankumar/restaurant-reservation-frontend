import { useState } from "react";
import Chatbot from "./Chatbot";
import "./Styles.css"
function Chatinput({chatMessages,setChatMessages}) {
    const [inputText,setInputText] =useState('');
    function saveInputText(event){
        setInputText(event.target.value);
    }


   function sendMessage() {
  if (!inputText.trim()) return;

  const botReply = Chatbot(inputText);

  setChatMessages(prevMessages => [
    ...prevMessages,
    {
      msg: inputText,
      sender: "user",
      id: crypto.randomUUID()
    },
    {
      msg: botReply,
      sender: "robot",
      id: crypto.randomUUID()
    }
  ]);

  setInputText("");
}

    return (  
        <div className="chat-input-container">
            <input 
                className="chat-input"
                placeholder="send a message to chatbot" 
                size="30"
                onChange={saveInputText}
                value={inputText}
            />
            <button
                className="button-send"
                onClick={sendMessage} 
            >send</button>
        </div>
    );
}

export default Chatinput;