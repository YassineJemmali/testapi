import axios from "axios";
import "./App.css";
import "./Components/UserFiche.css";
import { useEffect, useState } from "react";
import UsersFiche from "./Components/UsersFiche";
import MonMenu from "./Components/MonMenu";

function App() {
  const [utilisateurs, setUtilisateurs] = useState([]);

  console.log(utilisateurs);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((result) => {
      return setUtilisateurs(result.data);
    });
  }, []);

  // const dataUsers = axios.get("https://jsonplaceholder.typicode.com/users");

  // console.log(dataUsers);

  return (
    <div>
      <MonMenu />
      <div className="App carteUsers">
        {utilisateurs.map((el) => {
          return <UsersFiche userInformations={el} key={el.id} />;
        })}
      </div>
    </div>
  );
}

export default App;
