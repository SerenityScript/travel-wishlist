import { useState } from "react";
import { carousel } from "./carousel";
import './App.css';

function Slides() {
  const [reason, setReason] = useState(0);
  const { id, heading, image, description } = carousel[reason];

  const previousReason = () => {
    setReason((reason => {
      reason--;
      if (reason < 0) {
        return carousel.length - 1;
      }
      return reason;
    }))
  }
  const nextReason = () => {
    setReason((reason => {
      reason++;
      if (reason > carousel.length - 1) {
        reason = 0;
      }
      return reason;
    }))
  }

  return (
    <div>
      <p className="Par">
        <em>
          Italy is more than just a destination; it’s an experience of a lifetime. Our travel agency is dedicated to crafting personalized itineraries that cater to your interests, whether you’re an art enthusiast, a history buff, a foodie, or an adventure seeker. With our insider knowledge and local connections, we ensure that your Italian vacation is seamless and unforgettable.
        </em>
      </p>
    <div className="MainContainerSlides">
      <button className="Btn Previous" onClick={previousReason}>Prev</button>
      <div className="SlidesCont">
        <h2>{heading}</h2>
        <img className="SlidesImg" src={image} alt={heading} />
        <h3 className="Description">{description} </h3>
      </div>
      <button className="Btn Next" onClick={nextReason}>Next</button>
      </div>
      </div>
  )
}

export default Slides;