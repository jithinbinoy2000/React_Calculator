import React from 'react';
import './room.css';

function Room() {
  return (
    <div className='r-main'>
      <div className="circle"></div>
      <div className='room-body'>
        <div className="room-container">
          <div className="room-title">
            hd
          </div>
          <div className="room-id">
            <input type="text" name='id' placeholder='Enter Room Id' className='input'/>
          </div>
          <div className="room-email">
            <input type="email" name='email' placeholder='Enter Email Id' className='input'/>
          </div>
          <div className="room-join">
            <button className='room-join-button'>Join Room</button>
          </div>
        </div>
      </div>
      <div className="circle2"></div>
    </div>
  );
}

export default Room;
