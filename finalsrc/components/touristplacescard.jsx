import React,{ Component } from 'react';
import {Link} from 'react-router-dom';
import Disp from './modaldisp';
import 'bootstrap/dist/css/bootstrap.css';
import './touristplacescard.css';
import 'hover.css/css/hover-min.css';
class Touristplacescard extends Component
{
    render()
    {
        return (
            <div>
            <div className="row" style={{margin:10 , padding:"10px"}}>
            {this.props.arr.map(i=> {
                return <div className="card col-lg-3 col-md-4 col-12"  id="c123">
            <img className="card-img-top" src={i.images} alt="Card image cap" id="cimg"/>
          
            <div className="card-body">
            <p className="card-title" id="titlecard">{i.name}</p>
            <Disp info={i.info} name={i.name} image={i.images} location={i.location}/>
            </div>
            </div>
                }
                )} 
                <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                  <div className="modal-content" id="mymodalss">
                    <div className="modal-header">
                      <h5 className="modal-title" id="i2" className="headingss"></h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                    <div className="row">
                    <div className="col-md-5">
                    <img id="i1" className="ccimages"/>
                    </div>
                    <div className="col-md-7">
                    <p id="i3" className="para"></p>
                    </div>
                    </div>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="hvr-bounce-to-right btn btn-secondary" data-dismiss="modal">Close</button>
                      <button type="button" className="hvr-bounce-to-right btn btn-secondary"><a className="aloc" id="i4">location</a></button>
                    </div>
                  </div>
                </div>
              </div>

                </div>
            </div>
        )
    }
}
export default Touristplacescard;

