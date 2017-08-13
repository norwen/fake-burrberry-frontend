import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import "flexboxgrid2/dist/flexboxgrid.css";
import "normalize.css";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
