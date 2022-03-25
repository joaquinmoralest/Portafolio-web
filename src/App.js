import profileImage from './DSC_1067.jpg';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Image from './components/Image/Image';
import Description from './components/Description/Description';
import Constact from './components/Contact/Contact';
import { Stack } from '@mui/material';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <section className='about-me' id='aboutMe'>
        <Image 
          src={profileImage}
          alt={'Foto de Joaquin Morales'}
        />
        <Description 
          elevation={4}
          title={'Sobre mi'}
          text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lorem diam, dignissim vitae consequat sit amet, tincidunt et risus. Nulla non urna elit. Fusce semper varius mauris ut posuere. Duis dolor massa, porta ac elementum vel, tincidunt at felis. Morbi aliquam, quam eget placerat convallis, orci risus euismod quam, eu facilisis diam augue ut velit. Mauris pharetra velit ut lacus vestibulum, ut tempus sapien semper. Nam nunc lorem, eleifend id lorem in, accumsan porta elit. Ut rhoncus orci ligula. Sed pharetra sed nisi sed placerat. Curabitur congue, orci at ornare ullamcorper, nibh lectus vulputate erat, ac dignissim sem ligula id lectus. Curabitur sed laoreet nisl. Nulla facilisi. Sed ornare justo nisl, pellentesque convallis mi rutrum sit amet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec suscipit ipsum ac pretium condimentum. Donec placerat tempus mi a auctor. Cras at interdum nisi. Curabitur rutrum, tellus aliquam consectetur elementum, quam elit tempor quam, id vestibulum urna mauris lacinia nisl. Nullam sagittis non odio ac feugiat. Phasellus a volutpat urna, vitae posuere magna. Quisque fermentum iaculis purus id mattis. Etiam et metus nec nunc porta rutrum. Sed lobortis elementum tortor at rutrum. Sed volutpat ante eget ligula tempor, rutrum lobortis nibh finibus.'}
        />
      </section>

      <section className='skills'>  
        <Stack direction="row" spacing={2}>
          <div>Item 1</div>
          <div>Item 2</div>
          <div>Item 3</div>
        </Stack>
      </section>

      <section className='Contacto'>
        <Constact 
          instagramUrl={'https://www.instagram.com/?hl=es-la'}
          linkedinUrl={'https://www.linkedin.com/in/joaquin-morales-trincado/'}
          whatsappUrl={'https://web.whatsapp.com/'}
          githubUrl={'https://github.com/joaquinmoralest'}
          emailUrl={'https://www.google.com/intl/es-419/gmail/about/'}
        />
      </section>
    </div>
  );
}

export default App;
