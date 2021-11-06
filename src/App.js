import "./Styled Components/App.css";
import Button from "./Components/Button";
import Search from "./Components/Search"

function App() {
  return (
    <div className="App">
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
