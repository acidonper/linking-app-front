import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { PrivateRoutes } from "./routes/Private";
import { PublicRoutes } from "./routes/Public";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <PublicRoutes />
                <PrivateRoutes />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
