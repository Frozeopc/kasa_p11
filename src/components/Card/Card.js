import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";


function Card(props) {
  let background = props.cover
  return (
    
              <Link
                to={`/house/${props.id}`}
                className='house-link'
                key={props.id}
                style={{backgroundImage:'url('+{background}+')'}}>
                
                <div className='card-info'>
                  <h4 className='item-title'>{props.title}</h4>
                </div>
              </Link>
           
  );
}

export default Card;

