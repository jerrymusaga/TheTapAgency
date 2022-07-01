import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';

import Header from './screens/header/Header';
import About from './screens/about/About';
import Experience from './screens/experience/Experience';
import Services from './screens/services/Services';
// import Testimonials from './screens/testimonials/Testimonials';
import Contact from './screens/contact/Contact';
import Portfolio from './screens/portfolio/Portfolio';



function App() {
  return (
    <div>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
