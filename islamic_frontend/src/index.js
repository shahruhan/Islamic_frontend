import React from "react";
import ReactDOM from "react-dom/client";
import '../node_modules/animate.css/animate.css';
import '../node_modules/animate.css/source/fading_entrances/fadeInUp.css';
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>
);