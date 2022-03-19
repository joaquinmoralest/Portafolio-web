import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Image from './components/Image/Image';
import profileImage from './DSC_1067.jpg';
import './App.css';
import Description from './components/Description/Description';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <section className='about-me'>
        <Image 
          src={profileImage}
          alt={'Foto de Joaquin Morales'}
        />
        <Description 
          elevation={4}
          title={'Sobre mi'}
          text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lorem diam, dignissim vitae consequat sit amet, tincidunt et risus. Nulla non urna elit. Fusce semper varius mauris ut posuere. Duis dolor massa, porta ac elementum vel, tincidunt at felis. Morbi aliquam, quam eget placerat convallis, orci risus euismod quam, eu facilisis diam augue ut velit. Mauris pharetra velit ut lacus vestibulum, ut tempus sapien semper. Nam nunc lorem, eleifend id lorem in, accumsan porta elit. Ut rhoncus orci ligula. Sed pharetra sed nisi sed placerat. Curabitur congue, orci at ornare ullamcorper, nibh lectus vulputate erat, ac dignissim sem ligula id lectus. Curabitur sed laoreet nisl.'}
        />
      </section>
    </div>
  );
}

export default App;
