import React from 'react'
import App from './App.jsx'
import './index.css'
// import { BrowserRouter } from 'react-router-dom'

// ReactDOM.createRoot(
//   <BrowserRouter>
//     <App/>
//   </BrowserRouter>
// )

// import {createRoot} from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';

// // ✅ correct ID passed
// const rootElement = document.getElementById('root');
// const root = createRoot(rootElement);

// root.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
// );

import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
);