import "../Style/Header.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


const Header = () => {
    const { user } = useSelector((state) => state.auth);
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
                {user && <a href="#">Log</a>}
            </div>
        </div> 
        </>
    )
}

export default Header;