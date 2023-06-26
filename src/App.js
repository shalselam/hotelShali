
import './App.css';
import FooterSection from './components/structures/FooterSection';
import HeaderSection from './components/structures/HeaderSection';
import Card from './components/common/Card';
import Hero from './components/structures/HeroSection';
import Statement from './components/structures/Statment';
import Menu from './components/structures/MenuSection';
import EventSection from './components/structures/EventSection';
import ContactSection from './components/structures/ContactSection';

function App() {
  return (
    <div className="card_container">


      <div className='bgimge'>
        <div className='bg-forground'>
          <HeaderSection />
          <Hero />
        </div>  </div>
      <Statement />
      <div> <Menu /></div>
      <EventSection />
      <div className='both-bg'>
        <div className='overlay-three'>
          <ContactSection />
        </div>
      </div>
      <FooterSection />


    </div>
  );
}

export default App;
