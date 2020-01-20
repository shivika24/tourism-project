import React,{Component} from 'react';
import { Link } from "react-router-dom";
import './displaytourist.css';
class Displayproduct extends Component
{
    constructor()
    {
        super();
        this.datat=this.datat.bind(this);
        this.del=this.del.bind(this);
    }
    datat(x)
    {
        this.props.ondatat(x);
    }
    del(x)
    {
        this.props.ondelete1(x);
    }
    render()
    {
        return (
            <div>
            <table class="table" style={{width:"100%"}}>
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Images Url</th>
                        <th scope="col">Price</th>
                        <th scope="col">Category</th>
                        <th/>
                    </tr>
                </thead>
                <tbody>

                {console.log(this.props.places._id)}
                {this.props.places.map((place)=>{return <tr>
                        <th style={{fontSize:"10px",width:"10%"}}>{place.name}</th>
                        <td style={{fontSize:"10px",width:"20%"}} id="infoid">{place.description}</td>
                        <td style={{fontSize:"10px",width:"20%"}} id="infoid">{place.image}</td>
                        <td style={{fontSize:"10px",width:"20%"}} id="infoid">{place.price}</td>
                        <td style={{fontSize:"10px",width:"20%"}} id="infoid">{place.category}</td>
                        <td>
                        <Link to={{
                            pathname: "/editproductform"
                            }} > 
                        <button onClick={() => this.datat(place)}>
                        Edit
                        </button>
                        </Link>
                        <button onClick={() => this.del(place)}>Delete</button></td>
                    </tr>
                })}
                </tbody>
            </table>
        </div>
        )
    }
}
export default Displayproduct;