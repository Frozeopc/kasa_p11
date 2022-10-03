import React from "react";
import "./Cards.css";
import { Link } from "react-router-dom";


function Cards(props) {
  return (
    
              <Link
                to={`/house/${props.id}`}
                className='house-link'
                key={props.id}>
                <img
                  src={props.cover}
                  alt={props.title}
                  className='house-image'
                />
                <div className='card-info'>
                  <h4 className='item-title'>{props.title}</h4>
                </div>
              </Link>
           
  );
}

export default Cards;

//deplacer dans home ligne 8 a 12 renomez card.js