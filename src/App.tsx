import React, { FC } from "react";
import "./App.scss";

import UserModule from "./components/UserModule";

const App: FC = () => {
  return (
    <div className="App">
      <UserModule />
    </div>
  );
};

export default App;
