import React, { useState, useEffect } from 'react';
import './Chat.css';
import { Avatar } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';

function Chat() {
    const[input, setInput] = useState('');
    const[seed, setSeed] = useState('');

    useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
}, []);

const sendMessage = (e) => {
    e.preventDefault();
    console.log('You typed...',input);
    setInput("");
}

  return <div className='chat'>
        <div className='chat_header'>
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>

            <div className="chat_headerInfo">
                <h3>Room name</h3>
                <p>Last seen at ...</p>
            </div>
            <div className="chat_headerRight">
                <IconButton>
                    <SearchIcon />
                </IconButton>
                <IconButton>
                    <AttachFileIcon />
                </IconButton>
                <IconButton>
                    <MoreVertIcon />
                </IconButton>
            </div>
        </div>
        <div className='chat_body'>
            <p className={`chat_message 
            ${true && "chat_receiver"}`}>
            {/* the true when the message.name === the message.displayName */}
            <span className="chat_name">Chioma Jenny</span>
            Hey Guys
            <span className="chat_timestamp">3:52pm</span>
            </p>
            
        </div>
        <div className="chat_footer">
        <InsertEmoticonIcon />
        <form>
        <input value={input} onChange={(e) => setInput(e.target.value)} placeholder='Type a message' type="text" />
        <button onClick={sendMessage} type="submit">Send a message</button>
        </form>
        <MicIcon />
        </div>
    </div>
  
}

export default Chat