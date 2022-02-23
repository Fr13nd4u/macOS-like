import React, { FC } from "react";
import "./App.scss";

import UserModule from "./components/UserModule";
import { Context } from "./context";
import { persons } from "./data/persons";

const App: FC = () => {
  return (
    <Context.Provider value={persons}>
      <div className="App">
        <UserModule />
      </div>
    </Context.Provider>
  );
};

export default App;
