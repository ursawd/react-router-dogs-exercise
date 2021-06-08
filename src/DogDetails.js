import React from "react";
import { useParams, Redirect, Link } from "react-router-dom";
import { dogs } from "./App";
import "./DogDetails.css";

const DogDetails = (props) => {
  const { name } = useParams();
  const validName = props.names.includes(name);
  const dog = dogs.find((dog) => dog.name === name);
  if (validName) {
    return (
      <div className="DogDetails">
        <img src={dog.src} alt={name} />
        <Link to="/dogs">back</Link>
        <h1>{name}</h1>

        <p>{dog.age} years old</p>
        <h3>Facts</h3>
        <div className="DogDetails-facts">
          <ul>
            {dog.facts.map((fact, i) => {
              return <li key={i}>{fact}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  } else {
    return <Redirect to="/dogs" />;
  }
};
export default DogDetails;
