import React, { FC, useState } from "react";
import "./App.scss";

import UserModule from "./components/UserModule";
import { Context } from "./context";
import { persons } from "./data/persons";

const App: FC = () => {
  const [data, setData] = useState(persons);

  return (
    <Context.Provider value={{ data, setData }}>
      <div className="App">
        <UserModule />
      </div>
    </Context.Provider>
  );
};

export default App;
