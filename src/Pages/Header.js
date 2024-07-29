import "../Style/Header.scss";
import { Link } from "react-router-dom";


const Header = () => {
    return(
        <>
        <div className="header">
            <div className="logo">
                Agritracka
            </div>
            <div className="navbar">
                <a className="active" href="#"><Link to="/"> Home </Link></a>
                <a href="#">About</a>
                <a href="#">Contact </a>
                <a className="main-nav" href="#"><Link to="/tracker" >Track Farm </Link></a>
            </div>
        </div> 
        </>
    )
}

export default Header;