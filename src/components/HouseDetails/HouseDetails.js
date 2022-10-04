import React from "react";
import { FaStar } from "react-icons/fa";
import "./HouseDetails.css";

function HouseDetails(props) {
  
  const starColor = {
    red: "#ff6060",
    grey: "#E3E3E3",
  };

  const stars = Array(5).fill(0);

  return (
    <div className='house-infos-container'>
      <div className='house-infos-details'>
        <h2 className='house-title'>{props.house.title}</h2>
        <span className='house-location'>{props.house.location}</span>
        <div className='house-tags'>
          {props.house.tags.map((tag) => (
            <div className='tag' key={tag}>
              {tag}
            </div>
          ))}
        </div>
      </div>

      <div className='house-host-rating'>
        <div className='host-infos-container'>
          <span className='host-name'>{props.house.host.name}</span>
          <img className='host-profil' alt='house' src={props.house.host.picture} />
        </div>
        <div className='host-rating'>
          <div className='stars'>
            {stars.map((_, index) => (
              <FaStar
                key={index}
                className='stars'
                color={props.house.rating > index ? starColor.red : starColor.grey}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HouseDetails;