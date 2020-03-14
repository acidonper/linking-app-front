import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { Welcome } from "./ui/welcome/Welcome";
import { Base } from "./ui/base/Base";

function App() {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/welcome" component={Welcome} />
                </Switch>
                <Switch>
                    <Route path="/base" component={Base} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
