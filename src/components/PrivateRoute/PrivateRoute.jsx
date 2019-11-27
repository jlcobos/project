import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { Context } from "../../context/context";

function PrivateRoute({component: RouteComponent, ...rest}) {
    const { isLoggedIn } = useContext(Context);
    return (
        <Route
            {...rest}
            render={routeProps => {
                return isLoggedIn ? <RouteComponent {...routeProps} /> : <Redirect to={"/login"} />
            }}
        />
    )
}

export default PrivateRoute;