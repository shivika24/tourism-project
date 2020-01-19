import React, { Component } from "react";
import Smallnav from "./smallnav";
class Besttime extends Component {
  state = {
    data: null,
    datacomes: this.props.location.state.statedatapass,
    mapdata: null
  };
  async componentDidMount() {
    const url = "http://localhost:4000/loc";
    const response = await fetch(url);
    const jsondata = await response.json();
    this.setState({ data: jsondata });

    for (var i = 0; i < this.state.data.length; i++) {
      if (this.state.data[i].state == this.state.datacomes.name) {
        var lat = this.state.data[i].lat;
        var long = this.state.data[i].long;
        this.functionweather(lat, long);
        break;
      }
    }
  }
  async functionweather(a, b) {
    const url =
      "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/c4c85d231b9981e2cfee8e119c2e8352/" +
      a +
      "," +
      b;
    const response = await fetch(url);
    const jsondata = await response.json();
    this.setState({ mapdata: jsondata, loading: true });
    console.log(this.state.mapdata);
  }
  render() {
    return (
      <div>
        <Smallnav navstatedata={this.props.location.state.statedatapass} />

        {this.state.loding || !this.state.mapdata ? (
          <div>{console.log("loding")}</div>
        ) : (
          <div>
            <div>{console.log(this.state.datacomes)}</div>
            <div id="besttime">

             <div className="row">
               <div className="col-md-4 col-12">
                 <div>
                  <center>
                 <img
                    src={"images/weather/PNG/"+this.state.mapdata.currently.icon+".png"}
                    className="card-img-top"
                    alt={this.state.mapdata.currently.icon}
                    style={{width:"70%"}}
                  />
                  <p>{this.state.mapdata.currently.summary}</p>
                  <h3>{this.state.mapdata.currently.temperature}°F</h3>
                  <p>{this.state.mapdata.currently.windSpeed}</p>
                  <p>{this.state.mapdata.currently.humidity}</p>
                  <p>{this.state.mapdata.currently.pressure}</p>
                  </center>
                 </div>
               </div>



               <div className="col-md-2 col-12">
                 <div>
                  <center>
                    <h4>Tomorrow</h4>
                 <img
                    src={"images/weather/PNG/"+this.state.mapdata.daily.data[0].icon+".png"}
                    className="card-img-top"
                    alt={this.state.mapdata.daily.data[0].icon}
                    style={{width:"90%"}}
                  />
                  <p>{this.state.mapdata.daily.data[0].summary}</p>
                  <h3>{this.state.mapdata.daily.data[0].temperatureLow}°F</h3>
                  <p>windSpeed : {this.state.mapdata.daily.data[0].windSpeed}</p>
                  <p>humidity : {this.state.mapdata.daily.data[0].humidity}</p>
                  <p>pressure : {this.state.mapdata.daily.data[0].pressure}</p>
                  </center>
                 </div>
               </div>



               <div className="col-md-2 col-12">
                 <div>
                  <center>
                  <h4>Day after tomorrow </h4>
                 <img
                    src={"images/weather/PNG/"+this.state.mapdata.daily.data[1].icon+".png"}
                    className="card-img-top"
                    alt={this.state.mapdata.daily.data[1].icon}
                    style={{width:"90%"}}
                  />
                  <p>{this.state.mapdata.daily.data[1].summary}</p>
                  <h3>{this.state.mapdata.daily.data[1].temperatureLow}°F</h3>
                  <p>{this.state.mapdata.daily.data[1].windSpeed}</p>
                  <p>{this.state.mapdata.daily.data[1].humidity}</p>
                  <p>{this.state.mapdata.daily.data[1].pressure}</p>
                  </center>
                 </div>
               </div>


               <div className="col-md-2 col-12">
                 <div>
                  <center>
                  <h4>Day after 2 days </h4>
                 <img
                    src={"images/weather/PNG/"+this.state.mapdata.daily.data[2].icon+".png"}
                    className="card-img-top"
                    alt={this.state.mapdata.daily.data[2].icon}
                    style={{width:"90%"}}
                  />
                  <p>{this.state.mapdata.daily.data[2].summary}</p>
                  <h3>{this.state.mapdata.daily.data[2].temperatureLow}°F</h3>
                  <p>{this.state.mapdata.daily.data[2].windSpeed}</p>
                  <p>{this.state.mapdata.daily.data[2].humidity}</p>
                  <p>{this.state.mapdata.daily.data[2].pressure}</p>
                  </center>
                 </div>
               </div>



             </div>
             </div>
            </div>
        )}
      </div>
    );
  }
}
export default Besttime;
