import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { PrivateRoutes } from "./routes/Private";
import { Welcome } from "./ui/welcome/Welcome";
import { Home } from "./ui/home/Home";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/welcome" />
        </Route>
        <Route path="/welcome" component={Welcome} />{" "}
        <PrivateRoutes path="/home">
          <Home />
        </PrivateRoutes>
        <Route path="*">
          <h1>ERROR! Page Not Found!</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
