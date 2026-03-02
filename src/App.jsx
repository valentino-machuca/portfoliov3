import './App.css';
import Navbar from './Components/Navbar';
import Terms from './Views/Terms/Terms';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='views'>
        {/* <Home/>
        <ParallaxText baseVelocity={2}>seamless interfaces</ParallaxText>
        <ParallaxText baseVelocity={-2}>fullstack creativity</ParallaxText>
        <Work/>
        <About/> */}
        <Terms/>
      </div>
    </div>
  );
}

export default App;
