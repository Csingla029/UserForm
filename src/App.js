import React, { useState } from "react";

import UserInput from "./Components/User/UserInput"
import UserList from "./Components/User/UserList";
const App = () => {
  const [userList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList)=>{
      return [...prevUsersList, {id:Math.random().toString(),name: uName, age: uAge}];

    });
  };

  return(
    <div>
      <UserInput onAddUser={addUserHandler}></UserInput>
      {userList.length !==0 && <UserList users={userList}></UserList>}
    </div>
  );
};
export default App;