import user from "../assets/user.jpg";
import robot from "../assets/robot.jpg";
import "./Styles.css"
function Chatmsg({msg,sender}) { 
        return(
            <div className={sender === 'user'?'chat-message-user':'chat-message-robot'}>
              {sender === "robot" && <img src={robot} className="chat-message-profile"/>}
             <div className="chat-message-text"> {msg} </div>
              {sender === "user" && <img  src={user} className="chat-message-profile"/> }
            </div>
        );
}
export default Chatmsg;