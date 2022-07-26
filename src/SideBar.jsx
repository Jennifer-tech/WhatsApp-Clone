import React, { useState, useEffect } from 'react';
import "./SideBar.css";
import IconButton from '@mui/material/IconButton';
import { Avatar } from "@mui/material";
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import SidebarChat from './SidebarChat';
import db from './firebase';
import { getFirestore, collection, getDocs } from 'firebase/firestore';


function SideBar() {
    const [rooms, setRooms] = useState([]);

    const getRooms = async (db) => {
        const roomsCol = collection(db, 'rooms');
        const roomSnapshot = await getDocs(roomsCol);
        const roomList = roomSnapshot.docs.map(doc => doc.data());
        return roomList;
    }
console.log(rooms)
    useEffect(() => {
        // const rooms = collection(db, 'rooms')
        // .onSnapshot(snapshot => (
        //     setRooms(snapshot.docs.map(doc =>
        //         ({
        //             id: doc.id,
        //             data: doc.data()
        //         })
        //         ))
        // ))
        const _setRooms = async () => {
            const _rooms =  await getRooms(db)
            setRooms(_rooms)
        }
        _setRooms()

        // await getRooms(db)
        // setRooms()
    }, [])
  return (
    <div className='SideBar'>
        <div className='sidebar_header'>
            <Avatar />
            <div className="sidebar_headerRight">
                <IconButton>
                    <DonutLargeIcon />
                </IconButton>
                <IconButton>
                    <ChatIcon />
                </IconButton>
                <IconButton>
                    <MoreVertIcon />
                </IconButton>
                
            </div>
        </div>
        <div className='sidebar_search'>
            <div className="sidebar_searchContainer">
            <SearchIcon />
            <input placeholder='Search or start new chat' type='text' />
            </div>
        
        </div>
        <div className="sidebar_chats">
            <SidebarChat addNewChat />
            {Array.isArray(rooms) && rooms.map((room) => (
                <SidebarChat key={room.id} id={room.id} name={room.name} /> 
            ))}
        </div>
    </div>
    
  );
}

export default SideBar;