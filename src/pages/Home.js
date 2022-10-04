import React from "react";
import Card from "../components/Card/Card";
import "../components/MessageError/MessageError.css";
import HeroSectionImage from "../images/HeroSection.png";
import Data from "../data/data.json";

function Home() {
  return (
    <>
      <div className='hero-container'>
        <h1>Chez vous, partout et ailleurs</h1>
        <img
          src={HeroSectionImage}
          className='hero-section-image'
          alt='home-background'
        />
      </div>
      <div className='card-container'>
      <ul className='card-list'>
        <li className='card-item'>
          {Data.map((item) => {
            return (
      <Card id={item.id} cover={item.cover} title={item.title} />
      );
    })}
  </li>
</ul>
</div>
    </>
  );
}

export default Home;