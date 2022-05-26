import './App.css';

function App() {
  return (
    <div className="App">
      <div id="backdrop">

      </div>

      <div id="left-div">
        <div id="text-div">
          <h1 id="name">SEAN</h1>
          <h1 id="name">THORNBER</h1>
          <h3 id="sub">Photographer from Manchester, UK.</h3>
          <img src={require("./signature.png")}></img>
        </div>
      </div>
      <div id="right-div">
        <img id="top-img" src={require("./bmw-wheel.jpg")}></img>
        <img src={require("./alex.jpg")}></img>
        <img src={require("./hills.jpg")}></img>
        <img src={require("./dion.jpg")}></img>
        <img id="bottom-img" src={require("./lads-on-hill.jpg")}></img>
      </div>
    </div>
  );
}

export default App;
