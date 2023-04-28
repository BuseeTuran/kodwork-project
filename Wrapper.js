import React from "react";

import FavoritedProvider from "./context/FavoritedProvider";
import Router from "./Router";

const Wrapper = () => {
    return (
        <FavoritedProvider>
            <Router/>
        </FavoritedProvider>
    )
}

export default Wrapper