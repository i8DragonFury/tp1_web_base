import React from 'react';

import img_avatar from "../assets/img_avatar.png";

import './Avatar.css';

function Avatar (props){
  return (
    <div className={`avatar ${props.className}`} style={props.style}>
      <img
        src={img_avatar}
        /*src={props.img} */
        alt={props.alt}
        style={{ width: props.width, height: props.width }}
      />
    </div>
  );
};

export default Avatar;
