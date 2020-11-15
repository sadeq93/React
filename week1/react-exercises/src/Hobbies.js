import React from "react";

const HobbyList = () => {
  const hobbies = [
    "Surfing",
    "Rock climbing",
    "Mountain biking",
    "Breakdancing",
  ];
  return (
    <div>
      <ul>
        {hobbies.map((hobby, id) => (
          <Hobbies hobbyName={hobby} key={id} />
        ))}
        {/*this is dummy "KEY" cause I took it from the index but I just simulate the reality id as a unique identifier. */}
      </ul>
    </div>
  );
};
const Hobbies = ({ hobbyName }) => <li>{hobbyName}</li>;
export default HobbyList;
