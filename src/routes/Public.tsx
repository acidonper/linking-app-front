import React from "react";
import { Route, Redirect } from "react-router-dom";
import { Welcome } from "../ui/welcome/Welcome";

export const PublicRoutes: React.FunctionComponent<{}> = ({}) => {
    return (
        <>
            <Route path="/" exact>
                <Redirect to="/welcome" />
            </Route>
            <Route path="/welcome" component={Welcome} />
        </>
    );
};
