import shiva from "./shiva.jpg";
import "./ammulu/ammu.css";
import lingam from "./lingam.jpg";
import { useState } from "react";

const Card = (props) => {
  const { thumbnail, avatar, title, channelname, views } = props;
  console.log(props);
  return (
    <div className="card1">
      <div className="card2">
        <div className="thumbnail">
          <img src={thumbnail} alt="" />
        </div>
        <div className="description">
          <div className="Avatar">
            <img src={avatar} alt="" />
          </div>
          <div className="title">
            <div className="first">
              <p>{title}</p>
              <div className="dots">
                <i className="fas fa-ellipsis-v"></i>
              </div>
            </div>
            <div className="channelname">
              <p>{channelname}</p>
              <span className="tick">
                <i className="fas fa-check-circle"></i>
              </span>
            </div>
            <p>{views}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
