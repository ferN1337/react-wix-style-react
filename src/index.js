import React from "react";
import ReactDOM from "react-dom";

// import all relevant components from this file
import { Text, Button } from "./wix-style-react";

const App = () => (
  <div>
    <Text appearance="H1">Hello!</Text>
    <Button>Click here</Button>
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
