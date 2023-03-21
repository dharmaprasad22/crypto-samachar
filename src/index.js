import React from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./App";
import CryptoContext from "./CryptoContext";
import 'react-alice-carousel/lib/alice-carousel.css';

const root = document.getElementById("root");
render(
    <CryptoContext>
    <App />
    </CryptoContext>
    , root);

