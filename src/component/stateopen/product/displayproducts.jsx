import React, { Component } from "react";
import Smallnav from ".././smallnav";
import "./displayproducts.css";

class Displayproducts extends Component {
  state = {
    temp1: [],
    ne: []
  };

  constructor() {
    super();
    this.adddata = this.adddata.bind(this);
    this.myfunc = this.myfunc.bind(this);
    this.check = this.check.bind(this);
    this.state = {
      elem: "",
      temp: []
    };
  }

  check(e, elem1) {
    e.preventDefault();
    this.setState({ elem: elem1 });
    console.log(this.state.elem);
  }

  myfunc(val) {
    console.log(val);
    for (let i = 0; i < val.length; i = i + 2) {
      if (i + 1 < val.length && i < val.length) {
        this.state.temp.push(
          <div>
            <div className="row" style={{ margin: 0 }} key={i}>
              <div className="col-md-6 padding-0">
                <div
                  className="stylhovediv"
                  style={{ backgroundImage: "url(" + val[i].image + ")" }}
                >
                  <div
                    className="insidedivhover"
                    id="product1"
                    src={val[i].image}
                  >
                    <button
                      className="probutt"
                      onClick={e =>
                        this.adddata(e, val[i].description, i, val[i].name)
                      }
                    >
                      {val[i].name}
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-md-6 padding-0">
                <div
                  className="stylhovediv"
                  style={{ backgroundImage: "url(" + val[i + 1].image + ")" }}
                >
                  <div
                    className="insidedivhover"
                    id="product1"
                    src={val[i + 1].image}
                  >
                    <button
                      className="probutt"
                      onClick={e =>
                        this.adddata(
                          e,
                          val[i + 1].description,
                          i,
                          val[i + 1].name
                        )
                      }
                    >
                      {val[i + 1].name}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="proddiv"
              id={i}
              style={{
                display: "none",
                fontSize: "15px",
                padding: 20,
                margin: 0
              }}
            ></div>
          </div>
        );
      } else {
        this.state.temp.push(
          <div>
            <div className="row" style={{ margin: 0 }} key={i}>
              <div className="col-md-6 padding-0">
                <div
                  className="stylhovediv"
                  style={{ backgroundImage: "url(" + val[i].image + ")" }}
                >
                  <div
                    className="insidedivhover"
                    id="product1"
                    src={val[i].image}
                  >
                    <button
                      className="probutt"
                      onClick={e =>
                        this.adddata(e, val[i].description, i, val[i].name)
                      }
                    >
                      {val[i].name}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="proddiv"
              id={i}
              style={{ display: "none", fontSize: "15px", padding: 20 }}
            ></div>
          </div>
        );
      }
    }
    return this.state.temp;
  }
  adddata(e, val, i, n) {
    var x = document.getElementById("" + i);
    if (x.style.display === "none") {
      x.innerHTML = "<center><b>" + n + "</b></center>" + val;
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-12">
            <Smallnav navstatedata={this.props.location.state.statedatapass} />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            {this.myfunc(this.props.location.state.statedatapass.products)}
          </div>
        </div>
      </div>
    );
  }
}
export default Displayproducts;
