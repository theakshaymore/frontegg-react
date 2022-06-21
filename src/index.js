import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { FronteggProvider } from "@frontegg/react";

const contextOptions = {
  baseUrl: "https://app-vy70tcs4b00y.frontegg.com",
  clientId: "2c9d9bd1-e3ff-498d-bf2a-cfab0349c403",
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <FronteggProvider contextOptions={contextOptions} hostedLoginBox={true}>
    <App />
  </FronteggProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
