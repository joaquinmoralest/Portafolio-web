import { Link } from "@mui/material";
import './Navbar.css';

function Navbar() {
    return(
        <div className="Navbar">
            <Link className="link-menu" href="#" underline="hover">
                Inicio
            </Link>
            <Link className="link-menu" href="#aboutMe" underline="hover">
                Sobre mi
            </Link>
            <Link className="link-menu" href="#" underline="hover">
                Skills
            </Link>
            <Link className="link-menu" href="#" underline="hover">
                Portafolio
            </Link>
            <Link className="link-menu" href="#" underline="hover">
                Contacto
            </Link>
        </div>
    )
}

export default Navbar;