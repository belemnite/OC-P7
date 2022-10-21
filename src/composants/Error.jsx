import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default Error

function Error() {
    return(
        <><Header /><div>
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Link to={`/`}>Retourner sur la page d’accueil</Link>
        </div><Footer /></>
    )
}
