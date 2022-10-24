import { Link } from "react-router-dom";
import Footer from '../composants/Footer';
import Header from '../composants/Header';


function NoMatch() {

    return(
        <><Header /><div id="page-erreur">
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Link to={`/`}>Retourner sur la page d’accueil</Link>
        </div><Footer /></>
    )

}



export default NoMatch;
