import React, { Component } from "react";
import '../registerationform.css';
import 'hover.css/css/hover-min.css';

class Registrationform extends Component {
  render() {
    return (
      <div id="formpackage">
        <div id="Registrationform">
          <div className="container1">
            <center>
              <h1>Registration</h1>
            </center>
            <form action="/action_page.php">
              <div className="row">
                <div className="col-25">
                  <label >Name</label>
                </div>
                <div className="col-75">
                  <input
                    type="text"
                    id="fname"
                    name="firstname"
                    placeholder="Name"
                    className="sinput"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-25">
                  <label>Contact number</label>
                </div>
                <div className="col-75">
                  <input
                    type="text"
                    id="lname"
                    name=""
                    placeholder="Contact number"
                    className="sinput"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-25">
                  <label >Email Address</label>
                </div>
                <div className="col-75">
                  <input
                    type="Email"
                    id="lname"
                    name=""
                    placeholder="Email Address"
                    className="sinput"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-25">
                  <label>Address</label>
                </div>
                <div className="col-75">
                  <div className="row-75">
                    <input
                      className="col-25"
                      className="sinput"
                      type="text"
                      defaultValue=""
                      placeholder="Street"
                      name=""
                      style={{width:"25%" ,marginLeft:"5px"}}
                    />
                    <input
                      className="col-25"
                      type="text"
                      defaultValue=""
                      placeholder="City"
                      className="sinput"
                      name=""
                      style={{width:"25%", marginLeft:"5px"}}
                    />
                    <input
                      className="col-25"
                      type="text"
                      defaultValue=""
                      placeholder="pin code"
                      name=""
                      className="sinput"
                      style={{width:"25%", marginLeft:"5px"}}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-25">
                  <label >Full Address</label>
                </div>
                <div className="col-75">
                  <input
                    type="text"
                    id="subject"
                    name=""
                    placeholder="Full Address"
                    className="sinput"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-25">
                  <label >Password</label>
                </div>
                <div className="col-75">
                  <input
                    type="password"
                    id="pass"
                    name=""
                    placeholder="Password"
                    className="sinput"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-25">
                  <label >Re-Enter Password</label>
                </div>
                <div className="col-75">
                  <input
                    type="password"
                    id="pass1"
                    name=""
                    placeholder="Re-Enter Password"
                    className="sinput"
                  />
                </div>
              </div>

              <div className="row">
                
                  <button defaultValue="Submit" className="hvr-shutter-out-vertical" id="ssubmit" style={{width:"79vw"}}>Submit</button>
                
              </div>
            </form>
            <center>
              <p>Powered by Indian tourisum</p>
            </center>
          </div>
        </div>
      </div>
    );
  }
}
export default Registrationform;