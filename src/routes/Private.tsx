import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuthenticated } from "../infraestructure/auth/login";
import { Home } from "../ui/home/Home";

export const PrivateRoutes: React.FunctionComponent<{}> = ({
    children,
    ...rest
}) => {
    return (
        <Route
            path="/home"
            {...rest}
            render={({ location }) =>
                isAuthenticated() ? (
                    <Home />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};
