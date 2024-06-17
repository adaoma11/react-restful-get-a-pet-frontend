import { Link } from "react-router-dom";
import { useContext } from "react";
import styles from "./Navbar.module.css";
import Logo from "../../assets/img/logo.png";

// contexts
import { Context } from "../../context/UserContext";

function Navbar() {
    const { authenticated, logout } = useContext(Context);
    return (
        <nav className={styles.navbar}>
            <div className={styles.navbar_logo}>
                <img src={Logo} alt="Logo Get a Pet" />
                <h2>Get a Pet</h2>
            </div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>

                {authenticated ? (
                    <>
                        <li onClick={logout}>Logout</li>
                    </>
                ) : (
                    <>
                        <li>
                            <Link to="/login">Entrar</Link>
                        </li>
                        <li>
                            <Link to="/register">Cadastrar</Link>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    );
}

export default Navbar;
