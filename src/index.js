import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App';
import reportWebVitals from "./reportWebVitals";
// import Pos from "./post-app/Pos";
// import POS from "./Pos--App/POS/Pos";
// import App1 from "./post-app/App1";
// import Posmain from "./Pos--App/App-main/Posmain";
import CafeApp from "./Pos--App/cafe-pos/CafeApp";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <CafeApp />
    {/* <Posmain /> */}
    {/* <App1 /> */}
    {/* <Calculator />
     */}
    {/* <App /> */}
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
