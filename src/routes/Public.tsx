import React from "react";
import { Route, Redirect } from "react-router-dom";
import { Welcome } from "../ui/welcome/Welcome";
import { Home } from "../ui/home/Home";

export const PublicRoutes: React.FunctionComponent<{}> = ({}) => {
    return (
        <>
            <Route path="/" exact>
                <Redirect to="/welcome" />
            </Route>
            <Route path="/welcome" component={Welcome} />
            <Route path="/home" component={Home} />
        </>
    );
};
