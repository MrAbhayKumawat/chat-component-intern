import React from 'react';

const UserChats = ({ text, time, flex = "start", bgcolor }) => {
  const justifyContent = `justify-${flex}`;
  const backgroundColor = bgcolor ? `bg-${bgcolor}` : "bg-lime-100";

  return (
    <div className={`m-2 flex ${justifyContent}`}>
      <div>
        <div className={`${backgroundColor} p-2 w-56 rounded-md`}>
          <h1>{text}</h1>
        </div>
        <p className='text-start text-xs mt-2'>{time}</p>
      </div>
    </div>
  );
};

export default UserChats;
