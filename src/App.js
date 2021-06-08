import "./App.css";
import whiskey from "./dog-pictures/whiskey.jpg";
import duke from "./dog-pictures/duke.jpg";
import perry from "./dog-pictures/perry.jpg";
import tubby from "./dog-pictures/tubby.jpg";
import NavBar from "./NavBar";
import DogList from "./DogList";
import DogDetails from "./DogDetails";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
function App(props) {
  console.log(props.dogs);
  const dogNames = props.dogs.map((dog) => dog.name);
  const listInfo = props.dogs.map((dog) => ({
    name: dog.name,
    src: dog.src,
  }));
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar names={dogNames} />
        <Switch>
          <Route exact path="/dogs">
            <DogList listInfo={listInfo} />
          </Route>
          <Route exact path="/dogs/:name">
            <DogDetails names={dogNames} />
          </Route>
          <Redirect to="/dogs" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
//----------------------------------------
export const dogs = [
  {
    name: "Whiskey",
    age: 5,
    src: whiskey,
    facts: [
      "Whiskey loves eating popcorn.",
      "Whiskey is a terrible guard dog.",
      "Whiskey wants to cuddle with you!",
    ],
  },
  {
    name: "Duke",
    age: 3,
    src: duke,
    facts: [
      "Duke believes that ball is life.",
      "Duke likes snow.",
      "Duke enjoys pawing other dogs.",
    ],
  },
  {
    name: "Perry",
    age: 4,
    src: perry,
    facts: [
      "Perry loves all humans.",
      "Perry demolishes all snacks.",
      "Perry hates the rain.",
    ],
  },
  {
    name: "Tubby",
    age: 4,
    src: tubby,
    facts: [
      "Tubby is really stupid.",
      "Tubby does not like walks.",
      "Angelina used to hate Tubby, but claims not to anymore.",
    ],
  },
];

App.defaultProps = { dogs };

export default App;
