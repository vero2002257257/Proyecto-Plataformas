import React from 'react';
import { createRoot } from 'react-dom/client';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style/flexboxgrid.min.css";
import './style/index.css';
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./screens/About.jsx";
import Registrarse from "./screens/Registrarse";
import Landing from "./screens/Landing.jsx";
import Compra from "./screens/Compra.jsx";
import Crear from "./screens/Crear.jsx";
import Chat from "./screens/chat.jsx";

createRoot(document.getElementById('root')).render(
  <>
    <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Khula:wght@400;600;800&display=swap" rel="stylesheet" />
      </Helmet>
      <Router>
      <Routes>
        <Route exact path="" element={<Landing />} />
        <Route exact path="/About" element={<About />} />
        <Route exact path="/Registrarse" element={<Registrarse />} />
        <Route exact path="/Compra" element={<Compra />} />
        <Route exact path="/Crear" element={<Crear />} />
        <Route exact path="/chat" element={<Chat />} />

      </Routes>
    </Router>
  </>,
);
