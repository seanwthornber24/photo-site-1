import './App.css';
import React from "react"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
      selectedElem: null
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if (!this.state.selected) {
      document.getElementById("left-div").classList.add("blur");
      for (let i of document.getElementById("right-div").children) {
        if (i.children[0] !== e.target) {
          i.classList.add("blur");
        }
      }
      e.target.parentElement.classList.add("slideOut")
      this.setState({
        selected: true,
        selectedElem: e.target
      })
    }
    else if (this.state.selected && e.target === this.state.selectedElem) {
      document.getElementById("left-div").classList.remove("blur");
      for (let i of document.getElementById("right-div").children) {
        if (i.children[0] !== e.target) {
          i.classList.remove("blur");
        }
      }
      e.target.parentElement.classList.remove("slideOut")
      this.setState({
        selected: false,
        selectedElem: null
      });
    }
  }

  render() {
    return (
      <div id="App">
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
          <ImgAndText id="top-img" image={require("./bmw-wheel.jpg")} handleClick={this.handleClick}
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in nisi arcu. Praesent tempor pharetra dolor in varius. Maecenas luctus in ligula ac ornare. Vestibulum bibendum mattis felis quis cursus. Maecenas egestas purus id ligula maximus ullamcorper. Nam feugiat placerat sapien non suscipit. Integer magna urna, eleifend eget egestas in, efficitur at quam. In at facilisis elit."
            textid="top-text"/>
          <ImgAndText image={require("./alex.jpg")} handleClick={this.handleClick}
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in nisi arcu. Praesent tempor pharetra dolor in varius. Maecenas luctus in ligula ac ornare. Vestibulum bibendum mattis felis quis cursus. Maecenas egestas purus id ligula maximus ullamcorper. Nam feugiat placerat sapien non suscipit. Integer magna urna, eleifend eget egestas in, efficitur at quam. In at facilisis elit."/>
          <ImgAndText image={require("./hills.jpg")} handleClick={this.handleClick}
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in nisi arcu. Praesent tempor pharetra dolor in varius. Maecenas luctus in ligula ac ornare. Vestibulum bibendum mattis felis quis cursus. Maecenas egestas purus id ligula maximus ullamcorper. Nam feugiat placerat sapien non suscipit. Integer magna urna, eleifend eget egestas in, efficitur at quam. In at facilisis elit."/>
          <ImgAndText image={require("./dion.jpg")} handleClick={this.handleClick}
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in nisi arcu. Praesent tempor pharetra dolor in varius. Maecenas luctus in ligula ac ornare. Vestibulum bibendum mattis felis quis cursus. Maecenas egestas purus id ligula maximus ullamcorper. Nam feugiat placerat sapien non suscipit. Integer magna urna, eleifend eget egestas in, efficitur at quam. In at facilisis elit."/>
          <ImgAndText image={require("./lads-on-hill.jpg")} handleClick={this.handleClick}
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in nisi arcu. Praesent tempor pharetra dolor in varius. Maecenas luctus in ligula ac ornare. Vestibulum bibendum mattis felis quis cursus. Maecenas egestas purus id ligula maximus ullamcorper. Nam feugiat placerat sapien non suscipit. Integer magna urna, eleifend eget egestas in, efficitur at quam. In at facilisis elit."/>
        </div>
        <div id="text-cover"></div>

      </div>
    );
  }
}

function ImgAndText(props) {
  return(
    <div className="img-and-text">
      <img id={props.id} src={props.image} onClick={props.handleClick}></img>
      <p id={props.textid}>
        {props.text}
      </p>
    </div>
  )
}

export default App;
