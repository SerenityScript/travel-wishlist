import { useState } from "react";
import { data } from "./data";
import "./App.css";

function Cities() {
  const [cards, setCards] = useState(data);
  const [showText, setShowText] = useState(false);

  const removeCity = (id) => {
    let newCities = cards.filter(item => item.id !== id);
    setCards(newCities);
  }

  //  const showTextClick = (item) => {
  //    item.showMore = !item.showMore
  //    setShowText(!showText)
  //  }

  const showTextClick = (id) => {
    let newCities = cards.map(item => {
      if (item.id === id) {
        item.showMore = !item.showMore;
      }
      return item;
    });
    setCards(newCities);
    setShowText(!showText);
  }

  return (
    <div>
      <p className="Par">
        <em>
          Italy is a land where history, culture, and natural beauty intertwine to create an unforgettable travel experience. From the snow-capped peaks of the Alps to the sun-drenched beaches of the Amalfi Coast, Italy offers a diverse array of landscapes that captivate every traveler.
        </em>
      </p>
      <h1>{cards.length} italian cities you have to visit</h1>
      <div className="Container">
        {cards.map((item => {
          const { id, city, heading, image, description, showMore } = item;
          
          return (
            <div key={id} className="City">
              <h2>{city}</h2>
              <hr />
              <h3>{heading}</h3>
              <img className="CityImg" src={image} alt={city} />
              <p>
                {showMore ? description : description.substring(0, 110)+ '...'}
                <button className="BtnShow" onClick={() => showTextClick(id)}>
                  {showMore ? "Show less" : "Show more"}
                </button>
              </p>
              <button className="RemoveBtn" onClick={() => removeCity(id)}>REMOVE</button>
            </div>
          );
        }))}
      </div>
      <button onClick={() => setCards([])} className="DeleteAllBtn">DELETE ALL</button>
      <p className="Par">
        Let us guide you through Italy’s enchanting cities, stunning landscapes, and hidden gems. Contact us today to start planning your dream Italian getaway. Buon viaggio!
      </p>
    </div>
  );
}

export default Cities;