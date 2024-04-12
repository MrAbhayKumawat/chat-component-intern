import React from "react";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const ChatForm = () => {
  return (
    <form className="bg-blue-50 rounded-lg p-3 mt-3 pt-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center bg-white p-2 rounded-md w-full mr-2 justify-between">
          <input
            className="border-none focus:outline-none bg-transparent"
            type="text"
            name="message"
            placeholder="Type your message"
            aria-label="Type your message"
          />
          <span className="text-2xl pr-1">
            <AttachFileIcon />
          </span>
        </div>
        <button
          type="submit"
          className="bg-blue-600 p-2 px-3 rounded-lg text-white"
          aria-label="Send"
        >
          <ChevronRightIcon />
        </button>
      </div>
      <p className="text-center text-gray-500 mb-2 mt-2">
        Powered by Krunk.ai
      </p>
    </form>
  );
};

export default ChatForm;
