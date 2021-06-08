import React from "react";
import { Link } from "react-router-dom";

const DogList = (props) => {
  const jsx = props.listInfo.map((dog, i) => {
    return (
      <div key={i}>
        <img src={dog.src} alt={dog.name} />
        <Link to={`/dogs/${dog.name}`}>{dog.name}</Link>
      </div>
    );
  });
  console.log(jsx);
  return (
    <div>
      <h1>DogList</h1>
      <p>paragraph</p>
      {jsx}
    </div>
  );
};
export default DogList;
