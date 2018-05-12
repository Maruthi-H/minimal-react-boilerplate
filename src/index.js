import React from "react";
import ReactDom from "react-dom";

const title="welcome to the first react-minimilist-app"

ReactDom.render(<div>{title}</div>, document.getElementById("app"));

module.hot.accept();