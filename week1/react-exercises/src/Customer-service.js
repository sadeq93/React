import React from "react";
const Guarantee = ({ imgSrc, title, description }) => {
  return (
    <div>
      <img src={imgSrc} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};
export default Guarantee;
