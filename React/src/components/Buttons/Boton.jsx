import React from "react";
import { Link } from 'react-router-dom';

export default function Boton({}) {
    return (
        <Link to="../Sections/About.jsx">
        <button>About</button>
      </Link>
    );
  }