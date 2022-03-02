import './App.css';
import Navbar from './components/Navbar';
import PageFive from './components/PageFive';
import PageFour from './components/PageFour';
import PageOne from './components/PageOne';
import PageThree from './components/PageThree';
import PageTwo from './components/PageTwo';
import Splashpage from './components/Splashpage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Splashpage />
      <PageOne />
      <PageTwo />
      <PageThree />
      <PageFour />
      <PageFive />
    </div>
  );
}

export default App;
