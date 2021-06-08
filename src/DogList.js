import React from "react";
import { Link } from "react-router-dom";
import "./DogList.css";

const DogList = (props) => {
  const jsx = props.listInfo.map((dog, i) => {
    return (
      <div key={i} className="Dog">
        {/* produces onClick like behavior to image */}
        <Link to={`/dogs/${dog.name}`}>
          <img src={dog.src} alt={dog.name} />
        </Link>
        <Link to={`/dogs/${dog.name}`}>{dog.name}</Link>
      </div>
    );
  });
  return (
    <div className="DogList">
      <h1>HELLOZ. WE HAVE DOGZ. CLICK ON THEM FOR MORE INFO</h1>
      <div className="DogList-item">{jsx}</div>
    </div>
  );
};
export default DogList;
