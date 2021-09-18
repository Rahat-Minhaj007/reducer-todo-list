import React from "react";

const NoMatch = () => {
    var style = {
        backgroundColor: "black",

        textAlign: "center",
        color: "white",
    };
    return (
        <div style={style}>
            <h3>Sorry Page Not Found</h3>
            <h4>404 Error</h4>
        </div>
    );
};

export default NoMatch;