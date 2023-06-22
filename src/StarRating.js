import React, { useState } from "react";
import Star from "./Star";
const container = {
  display: "flex",
  //   alignItem: "center",
  gap: "8px",
  marginTop: "1.5rem",
};
const star = {
  display: "flex",
};

function StarRating({ maxRating = 5, color }) {
  const [rating, setRating] = useState(0);
  const [tempRating, setTempRating] = useState(0);
  const paragraph = {
    marginTop: "6.5px",
    color: color,
  };
  const add = (rating) => {
    setRating(rating);
  };

  return (
    <div style={container}>
      <div style={star}>
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i}
            full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
            onRating={() => add(i + 1)}
            onEnter={() => setTempRating(i + 1)}
            onLeave={() => setTempRating(0)}
            color={color}
          />
        ))}
      </div>

      <p style={paragraph}>{tempRating || rating || ""}</p>
    </div>
  );
}

export default StarRating;
