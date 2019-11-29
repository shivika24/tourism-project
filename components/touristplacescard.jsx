import React,{ Component } from 'react';
import Disp from './modaldisp';
import './touristplacescard.css';
class Touristplacescard extends Component
{
    render()
    {
        return (
            <div>
            <div className="row">
            {this.props.arr.map(i=> {
                return <div className="card" id="c123" style={{width: "18rem"}}>
            <img className="card-img-top" src={i.images} alt="Card image cap"/>
            <div className="card-body">
            <h5 className="card-title">{i.name}</h5>
            <Disp info={i.info} name={i.name} image={i.images}/>
            
            </div>
            </div>
                }
                )}

                <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                  <div class="modal-content" id="mymodal">
                    <div class="modal-header">
                      <h5 class="modal-title" id="i2" className="heading"></h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                    <div className="row">
                    <div className="col-md-5">
                    <img id="i1" className="images"/>
                    </div>
                    <div className="col-md-7">
                    <p id="i3" className="para"></p>
                    </div>
                    </div>

                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                      <button type="button" class="btn btn-primary">Save changes</button>
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

