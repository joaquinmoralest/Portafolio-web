import { Container } from '@mui/material';
import hero from '../../JOAQUIN MORALES TR..png';
import './Hero.css';

function Hero() {
    return(
        <Container className='hero-container' maxWidth="xl">
            <img className='hero-img' src={hero} alt='Banner de Joaquin Morales, desarrollador'></img>
        </Container>
    )
}

export default Hero;