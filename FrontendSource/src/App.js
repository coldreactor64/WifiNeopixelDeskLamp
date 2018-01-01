import React, { Component } from "react";
import Slider from "rc-slider";
import { SketchPicker } from "react-color";
const TSlider = Slider.createSliderWithTooltip(Slider);

class App extends Component {
  state = {};

  componentWillMount() {
    fetch("/all")
      .then(data => data.json())
      .then(data => {
        this.setState({
          power: data.power,
          brightness: data.brightness * 1,
          color: data.solidColor
        });
      });
  }

  refresh() {
    fetch("/all")
      .then(data => data.json())
      .then(data => {
        this.setState({
          power: data.power,
          brightness: data.brightness * 1,
          color: data.solidColor
        });
      });
  }

  fakeBrightness(brightness) {
    this.setState({ brightness: brightness });
  }

  changeBrightness(brightness) {
    this.setState({ brightness: brightness });
    let fetchData = {
      method: "POST",
      headers: new Headers()
    };
    fetch("/brightness?value=" + brightness, fetchData).then(data => {});
  }

  changeColor(color) {
    this.setState({ color: color.rgb });
    let fetchData = {
      method: "POST",
      headers: new Headers()
    };
    fetch(
      `/solidColor?r=${color.rgb.r}&g=${color.rgb.g}&b=${color.rgb.b}`,
      fetchData
    ).then(data => {});
  }

  changePower(power) {
    this.setState({ power: power });
    let fetchData = {
      method: "POST",
      headers: new Headers()
    };
    fetch("/power?value=" + power, fetchData).then(data => {});
  }

  render() {
    return (
      <div className="App">
        <div className="heading">
          <h1>Jeremy's Desk Lamp</h1>
        </div>
        <div className="controls">
          <div className="container">
            <div className="inline">
              <button className="button" onClick={this.refresh.bind(this)}>
                Refresh
              </button>
              <h3>Status</h3>
              <div className="detail">On</div>
              <h3 className="bottomMargin">Power</h3>
              <div className="selector">
                <div
                  className={`selectLeft ${
                    this.state.power ? "activeSelect" : ""
                  }`}
                  onClick={() => {
                    this.changePower.bind(this)(1);
                  }}
                >
                  On
                </div>
                <div
                  className={`selectRight ${
                    !this.state.power ? "activeSelect" : ""
                  }`}
                  onClick={() => {
                    this.changePower.bind(this)(0);
                  }}
                >
                  Off
                </div>
              </div>
            </div>
            <div className="inline">
              <h3 className="bottomMargin noTop">Color</h3>
              <SketchPicker
                color={this.state.color}
                onChangeComplete={this.changeColor.bind(this)}
              />
            </div>
          </div>
          <h3 className="bottomMargin">Brightness</h3>
          <TSlider
            max={255}
            value={this.state.brightness}
            onChange={this.fakeBrightness.bind(this)}
            onAfterChange={this.changeBrightness.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default App;
