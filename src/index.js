import React from "react";
import {render} from "react-dom";
import DevTools from "mobx-react-devtools";

import HomePage from "./pages/HomePage";

//-----------------------------------
render(
    <div>
        <DevTools/>
        <HomePage/>
    </div>
    ,
    document.getElementById("root")
);