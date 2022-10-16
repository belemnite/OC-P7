import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default Error

function Error() {
    return(
        <><Header /><div>
            <p>404</p>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <p>Retourner sur la page d’accueil</p>
        </div><Footer /></>
    )
}
