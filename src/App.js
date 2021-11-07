import "./Styled Components/App.css";
import Button from "./Components/Button";
import Search from "./Components/Search";
import Navbar from "./Components/Navbar";
import Languages from "./Components/Languages";
import Footer from "./Components/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="body">
        <div className="wrapper">
          <div className="search_container">
            <Search />
          </div>
          <div className="btn">
            <Button text="Google Search" />
            <Button text="I'm feeling lucky" />
          </div>
        </div>
      </div>
      <div className="languages">
        <div className="bodyLanguages">
          <p>Google offered in: </p>
          <Languages language="Hausa" />
          <Languages language="Igbo" />
          <Languages language="Ede Yoruba" />
          <Languages language="Nigerian Pidgin" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
