import "./App.css";
import Navbar from "./components/Navbar";
import PageOne from "./components/PageOne";
import PageTwo from "./components/PageTwo";
import Splashpage from "./components/Splashpage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Splashpage />
      <PageOne />
      <PageTwo />
    </div>
  );
}

export default App;
