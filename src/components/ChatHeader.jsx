import React from "react";
import ChatUser from "../assets/ChatUser.png";
import Vector from "../assets/Vector.png";

const ChatHeader = () => {
  return (
    <nav className="bg-blue-50 p-3 px-5 rounded-lg">
      <div className="flex flex-col sm:flex-row items-center justify-between">
        <div className="flex items-center space-x-2">
          <img src={ChatUser} alt="ChatUser" />
          <div>
            <div className="flex items-center space-x-1">
              <h1 className="text-blue-500 text-sm sm:text-base">Timpu</h1>
              <img src={Vector} alt="ChatUser" />
            </div>
            <h1 className="text-blue-500 text-sm sm:text-base">Chat assistant</h1>
          </div>
        </div>
        <div className="flex items-center space-x-1">
          <div className="h-3 w-3 rounded-full bg-green-500"></div>
          <h1 className="text-blue-500 text-sm sm:text-base">Online</h1>
        </div>
      </div>
    </nav>
  );
};

export default ChatHeader;
