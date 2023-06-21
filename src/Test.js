import React, { useState } from "react";
import StarRating from "./StarRating";

function Test() {
  const [testRating, setTestRating] = useState(0);

  return (
    <>
      <StarRating
        maxRating={10}
        color="blue"
        onRate={(rating) => setTestRating(rating)}
      />
      <p>the movie was rated {testRating} star</p>
    </>
  );
}

export default Test;
