import React, { useState } from "react";
import Header from "./Header";
import LoadingSpinner from "./LoadingSpinner";
import Userscard from "./Userscard";
import "../style.css";

function App() {
  const [usersData, setUsersData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleUsers = () => {
    setIsLoading(true);
    fetch("https://reqres.in/api/users?page=1")
      .then((res) => res.json())
      .then((value) => {
        setUsersData(value.data);
        setIsLoading(false);
      });
  };
  return (
    <>
      <div className="header">
        <Header handleUsers={handleUsers} />
      </div>
      {isLoading ? <LoadingSpinner /> : <Userscard usersData={usersData} />}
    </>
  );
}

export default App;
