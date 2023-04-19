import './App.css';
import Navbar from './Navbar';
import Brand from './Brand';
import About from './About';
import Cards from './Cards';
import Footer from './Footer';
// import Dummy from './Dummy';

function App() {
 return (
    <div className="App">
      <Navbar/>
      <Brand/>
      <About/>
      <Cards/>
      {/* <Dummy/> */}
      <Footer/>
      
    </div>
  );
}

export default App;

