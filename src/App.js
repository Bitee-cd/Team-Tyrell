import "./Styled Components/App.css";
import Button from "./Components/Button";
import Search from "./Components/Search"
import Navbar from "./Components/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="body">
        <div className='search_container'>
          <Search />
        </div>

        <div className="btn">
          <Button text="Google Search" />
          <Button text="I'm feeling lucky" />
        </div>
      </div>
    </div>
  );
}

export default App;
