import React, { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import "./Rating.css"
const Rating = () => {
  const [number, setNumber] = useState(0);
  const [hoverStar, setHoverStar] = useState(undefined);

  const handleClick = () => {
    alert("Rating response submitted Successfully!");
  };

  const handleText = () => {
    switch (number || hoverStar) {
      case 0:
        return "Evaluate";
      case 1:
        return "Dissatisfaction";
      case 2:
        return "Unsatisfied";
      case 3:
        return "Normal";
      case 4:
        return "Satisfied";
      case 5:
        return "Very Satisfied";
      default:
        return "Evaluate";
    }
  };

  const handlePlaceHolder = () => {
    switch (number || hoverStar) {
      case 0:
        return "Comment here...";
      case 1:
      case 2:
      case 3:
      case 4:
        return "What is your problem?";
      case 5:
        return "Why do you like the product?";
      default:
        return "Comment here...";
    }
  };

  return (
      <div className="modal">
      <div className="modal-contant">
    <div className="Rating">
    <h1>🎥Rate Us!</h1>

      <div className="Rating-stars">
        {[1, 2, 3, 4, 5].map((star) => (
          <span key={star} onMouseOver={() => setHoverStar(star)} onMouseLeave={() => setHoverStar(undefined)}>
            {number >= star || hoverStar >= star ? (
              <AiFillStar style={{ color: "orange" }} />
            ) : (
              <AiOutlineStar style={{ color: "orange" }} />
            )}
          </span>
        ))}
      </div>
      <p>{handleText()}</p>
      <textarea className="Rating-textarea" placeholder={handlePlaceHolder()} />
      <button className="Rating-button" onClick={handleClick}>
        Submit
      </button>
    </div>
    </div>
    </div>
  );
};

export default Rating;