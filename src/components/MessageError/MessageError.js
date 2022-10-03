import React from "react";
import { Link } from "react-router-dom";
import "./MessageError.css";

function MessageError() {
  return (
    <div className='error-container'>
      <span className='letter-404'>404</span>
      <p className='message-404'>
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link to='/' className='link-back-to-home'>Retourner sur la page d’accueil</Link>
    </div>
  );
}

export default MessageError;