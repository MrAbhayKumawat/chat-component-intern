import React from "react";
import ChatHeader from "../components/ChatHeader";
import UserChats from "../components/UserChats";
import BagImg from "../assets/BagImg.png";
import Vector from "../assets/Vector.png";
import AddRoadIcon from "@mui/icons-material/AddRoad";
import ClearIcon from "@mui/icons-material/Clear";
import ChatForm from "../components/ChatForm";

const Chats = () => {
  const popularTags = ["Clutch", "Fabric lining", "Baggit"];

  return (
    <div className="sm:w-96 w-full bg-white rounded-lg">
      <ChatHeader />
      <UserChats
        text="Hi Sam! I am your personal shopping assistant, how can I help you today?"
        time="4:45 PM"
        flex="start"
        bgcolor="blue-50"
      />
      <UserChats
        text="I am looking for a handbag with a long strap."
        time="4:45 PM"
        flex="end"
      />

      <div className="mt-2">
        <p className="text-start text-gray-500 mb-2">Popular tags for handbag</p>
        <div className="flex flex-wrap justify-center">
          {popularTags.map((tag, index) => (
            <button
              key={index}
              className="border border-blue-500 text-blue-500 p-1 px-3 mb-2 mr-2"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      <div className="m-2 mt-6 bg-blue-100 p-2 rounded-md">
        <div className="bg-white p-2 rounded-lg flex items-center space-x-2">
          <img src={BagImg} alt="BagImg" />
          <div>
            <div className="flex items-center space-x-1">
              <h1>Bags on Timpu</h1>
              <img src={Vector} alt="ChatUser" />
            </div>
            <p className="text-xs p-2">1123 products </p>
          </div>
        </div>
        <h1 className="text-sm sm:text-base">Or set filter and help us choose the best bag for you.</h1>
      </div>

      <div className="mt-5">
        <div className="flex justify-between items-center">
          <p className="text-start text-gray-300 mb-2">Select Filters</p>
          <div className="text-gray-500">
            <AddRoadIcon />
            Filter
          </div>
        </div>

        <div className="flex items-center gap-2 justify-center flex-wrap">
          {popularTags.map((tag, index) => (
            <button key={index} className="bg-gray-300 text-gray-800 p-1 px-3 text-xs mb-2">
              <div className="flex items-center">
                <span>{tag}</span>
                <span>
                  <ClearIcon />
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      <ChatForm />
    </div>
  );
};

export default Chats;
