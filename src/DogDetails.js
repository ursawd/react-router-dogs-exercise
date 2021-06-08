import React from "react";
import { useParams, Redirect } from "react-router-dom";
import { dogs } from "./App";

const DogDetails = (props) => {
  const { name } = useParams();
  const validName = props.names.includes(name);
  const dog = dogs.find((dog) => dog.name === name);
  console.log(dog);
  if (validName) {
    return (
      <div>
        <img src={dog.src} alt={name} />
        <h1>{name}</h1>
        <ul>
          <p>{dog.age} years old</p>
          {dog.facts.map((fact) => {
            return <li>{fact}</li>;
          })}
        </ul>
      </div>
    );
  } else {
    return <Redirect to="/dogs" />;
  }
};
export default DogDetails;
