import React from 'react';
import ReactDOM from 'react-dom/client';
import {Routes, Route } from 'react-router-dom';
import './App.css';
import MessageList from './screens/MessagesList';
import TimeLine from "./screens/TimeLine";
import Chats from "./screens/Chats";
import ProfileDetails from './screens/ProfileDetails';
import PostComments from './screens/PostComments';
import Sdata from './Sdata';



function App(){
  return(
    <div className='app'>
    <Routes>

        <Route path ="/main" element={<>

          
          
          {Sdata.map((val) =>{
  return(
    <TimeLine posticon = {val.posticon}
            postname = {val.postname}
            postimg = {val.postimg}
            name = {val.name}
            comments = {val.comments}
            time = {val.time}
          />

  );
})}


        </>} />
        <Route path ="/msg" element={<MessageList/>} />
        <Route path ="/chat" element={<Chats/>} />
        <Route path ="/pro" element={<ProfileDetails/>} />
        <Route path ="/comm" element={<PostComments/>} />

        
    </Routes>
    
    


    </div>

  );
}






export default App;




