import React, { Component } from "react";
import '../stylesheet.css';
import {Link} from 'react-router-dom';
import i1 from '.././states icons/andaman nicobar.jpg';
class Places extends Component
{
  state={
    datastate:''
  }
   render() {
    // console.log(JSON.parse(this.props.statespass)[0]);
    return (
      <div>
        <div className="font-small mdb-color lighten-3 pt-4" id="page">
          <div className="container">
            <div className="row" >
              <div className="col-lg-2 col-md-12 mb-4">
                <div className="view overlay z-depth-1-half"> 
                <Link to={{
                            pathname: "/statedisplay",
                            state: {
                              datapass: this.props.statespass[0]
                            }
                          }} >
                  <img
                    src={i1}
                    className="img-fluid"
                    alt=""
                  />
                 </Link>
                    <div className="mask rgba-white-light"></div>
                </div>
              </div>

              <div className="col-lg-2 col-md-6 mb-4">
                <div className="view overlay z-depth-1-half">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(78).jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <a href="">
                    <div className="mask rgba-white-light"></div>
                  </a>
                </div>
              </div>

              <div className="col-lg-2 col-md-6 mb-4">
                <div className="view overlay z-depth-1-half">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(79).jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <a href="">
                    <div className="mask rgba-white-light"></div>
                  </a>
                </div>
              </div>

              <div className="col-lg-2 col-md-12 mb-4">
                <div className="view overlay z-depth-1-half">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(81).jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <a href="">
                    <div className="mask rgba-white-light"></div>
                  </a>
                </div>
              </div>

              <div className="col-lg-2 col-md-6 mb-4">
                <div className="view overlay z-depth-1-half">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(82).jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <a href="">
                    <div className="mask rgba-white-light"></div>
                  </a>
                </div>
              </div>

              <div className="col-lg-2 col-md-6 mb-4">
                <div className="view overlay z-depth-1-half">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(84).jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <a href="">
                    <div className="mask rgba-white-light"></div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Places;