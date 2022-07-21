import { useEffect } from 'react'
import './Navbar.css'

const Navbar = ({ sticky }) => {
  useEffect(() => {
    window.onscroll = (() => stickyNav())

    const navbar = document.querySelector('nav')
    const sticky = navbar.offsetTop

    const stickyNav = () => {
      (window.pageYOffset >= sticky) 
        ? navbar.classList.add('sticky')
        : navbar.classList.remove('sticky')
    }
  }, [])

  return (
    <nav className='navbar'>
      <ul>
        <li><a href="#inicio">Inicio</a></li>
        <li><a href="#aboutMe">Sobre mi</a></li>
        <li><a href="#skills">Conocimientos</a></li>
        <li><a href="#projects">Proyectos</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>
    </nav>
  )
}

export default Navbar