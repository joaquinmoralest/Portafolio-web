import { Container } from "@mui/material";
import Navbar from "../Navbar/Navbar";
import './Header.css';

function Header() {
    return(
        <Container className="container" maxWidth="xl">
            <Navbar />
        </Container>
    )
}

export default Header;