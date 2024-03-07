import './App.css';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import Work from './components/Work';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact'
function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Work />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
