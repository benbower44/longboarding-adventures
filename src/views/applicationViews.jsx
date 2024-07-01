import { useEffect, useState } from "react";

import { Outlet, Route, Routes } from "react-router-dom";
import { Navbar } from "../components/navbar.jsx";
import { Home } from "../components/home.jsx";
import { Chat } from "../components/chat/chat.jsx";
import { EditChat } from "../components/chat/editChat.jsx";

export const ApplicationViews = () => {
    const [currentUser, setCurrentUser] = useState({});

    useEffect(() => {
        const longboardUser = localStorage.getItem("longboarder");
        const longboardUserObject = JSON.parse(longboardUser);
        setCurrentUser(longboardUserObject);
      }, []);
      return (
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Outlet />
               
              </>
            }
          >
             <Route path="/" element={<Home currentUser={currentUser} />} />
            
            <Route path="/chat">
          <Route index element={<Chat currentUser={currentUser} />} />
          <Route
            path=":chatId/editChat"
            element={<EditChat currentUser={currentUser} />}
          />
        </Route>
           
</Route>
</Routes>
    )}
