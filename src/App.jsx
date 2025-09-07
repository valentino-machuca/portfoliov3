import './App.css';
import Navbar from './Components/Navbar';
import ParallaxText from './Components/ParallaxText';
import Home from './Views/Home';
import Work from './Views/Work';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='views'>
        <Home/>
        <ParallaxText baseVelocity={3}>seamless interfaces</ParallaxText>
        <ParallaxText baseVelocity={-3}>full-stack creativity</ParallaxText>
        <Work/>
      </div>
    </div>
  );
}

export default App;
