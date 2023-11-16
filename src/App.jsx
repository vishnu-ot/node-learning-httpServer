import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const getData = async () => {
    let data = await fetch("http://localhost:3000/");
    let result = await data.json();
    setUsers(result);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <table border="1" width="50%">
        <thead>
          <td>ID</td>
          <td>Name</td>
          <td>Email</td>
        </thead>
        <tbody>
          {users?.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default App;
