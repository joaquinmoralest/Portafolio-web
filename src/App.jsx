import './App.css';
import hero from './assets/img/carbon2.png'
import profile from './assets/img/DSC_1067.jpg'
import Navbar from './components/Navbar';
import Card from './components/Card';
import Contact from './components/Contact';
import Form from './components/Form';

function App() {
  return (
    <div>
      <section className='full-screen' id='inicio'>
        <div className='container-hero'>
          <img className='hero' src={hero} alt=""/>
        </div>
        <Navbar />
      </section>
      <section className='about-me' id='aboutMe'>
        <div className="container">
          <div className='profile-card'>
            <img src={profile} alt="" />
          </div>
          <div className='description'>
            <h2>¡Hola! Soy Joaquín</h2>
            <br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, vitae. Sunt veniam iste quidem temporibus atque illum, quas laboriosam. Error voluptatibus debitis corporis numquam reprehenderit assumenda autem et corrupti explicabo!</p>
          </div>
        </div>
      </section>
      <section className='section bg-secondary' id='skills'>
        <h2>Tecnologías</h2>
        <div className="container">
          <div className='column'>
            <div className='row'>
              <i className="devicon-html5-plain colored"></i>
              <i className="devicon-css3-plain colored"></i>
              <i className="devicon-javascript-plain colored"></i>
              <i className="devicon-typescript-plain colored"></i>
            </div>
            <div className='row'>
              <i className="devicon-react-original colored"></i>
              <i className="devicon-bootstrap-plain colored"></i>
              <i className="devicon-redux-plain colored"></i>
              <i className="devicon-git-plain colored"></i>
            </div>
            <div className='row'>
              <i className="devicon-vscode-plain colored"></i>
              <i className="devicon-ionic-original colored"></i>
              <i className="devicon-java-plain colored"></i>
              <i className="devicon-sass-plain colored"></i>
            </div>
            <div className='row'>
              <i className="devicon-tailwindcss-original-wordmark colored"></i>
              <i className="devicon-python-plain colored"></i>
              <i className="devicon-materialui-plain colored"></i>
              <i className="devicon-wordpress-plain"></i>
            </div>
          </div>
        </div>
      </section>
      <section className='section' id='projects'>
        <h2>Proyectos</h2>
        <div className='galery'>
          <Card 
            url={'https://trusting-heisenberg-37a0f2.netlify.app'}
            title='Calculadora web'
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, vitae. Sunt veniam iste quidem temporibus atque illum'
          />
          <Card 
            url={'https://pedantic-thompson-e0d2b4.netlify.app'}
            title='Pokedex'
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, vitae. Sunt veniam iste quidem temporibus atque illum'
          />
          <Card 
            url={'https://agitated-varahamihira-1eaebe.netlify.app'}
            title='To-do list'
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, vitae. Sunt veniam iste quidem temporibus atque illum'
          />
          <Card 
            url={'https://pensive-mccarthy-795633.netlify.app'}
            title='Diseño Glass'
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, vitae. Sunt veniam iste quidem temporibus atque illum'
          />
          <Card 
            url={'https://github.com/joaquinmoralest/clone-calculadora-ios'}
            title='Clon calculadora iOS'
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, vitae. Sunt veniam iste quidem temporibus atque illum'
          />
          <Card 
            url={'https://github.com/joaquinmoralest/counter-redux'}
            title='Contador'
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, vitae. Sunt veniam iste quidem temporibus atque illum'
          />
        </div>
      </section>
      <section className='section bg-secondary' id='contact'>
        <h2>Contacto</h2>
        <div className="container">
          <Form />
        </div>
        <div className='container gap-1 flex-direction-column'>
        <h3>Búscame tambien en...</h3>
          <Contact />
        </div>
      </section>
      <footer className='bg-secondary'>
        <p>Joaquín Morales - Todos los derechos reservados</p>
      </footer>
    </div>
  );
}

export default App;
