import React,{ Component } from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
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
            <a href="#" className="btn btn-primary">See More</a>
            </div>
            </div>
                }
                )}
                </div>
            </div>
        )
    }
}
export default Touristplacescard;