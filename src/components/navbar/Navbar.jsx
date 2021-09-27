import logo from '../../assets/img/rym.png';
import letras from '../../assets/img/letras.png';
import './Navbar.styles.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-light bg-dark">
            <a className="navbar-brand logo-rick" href="#">
                <img src={logo} alt="Rick y Morty"/>
            </a>
            <a className="navbar-brand letras-rick" href="#">
                <img src={letras} alt="Rick y Morty"/>
            </a>
        </nav>
    );
}

export { Navbar };