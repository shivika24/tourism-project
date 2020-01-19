import React,{Component} from 'react';
import { Link } from "react-router-dom";

class Displaydata extends Component
{
    constructor()
    {
        super();
        this.data=this.data.bind(this);
        this.editn=this.editn.bind(this);
    }
    data(place,id)
    {
    this.props.ondata(place,id);
    }
    editn(x,y,z)
    {
    this.props.oneditn(x,y,z);
    }
    render()
    {
        return (
            <div>
            {console.log(this.props.data._id)}
            <table class="table">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col"><b>Category</b></th>
                        <th scope="col">Fiels Filled</th>
                        <th/>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><b>Name</b></td>
                        <td>{this.props.data.name}</td>
                        <td>
                        <Link
                        to="/add"
                        >
                        <button onClick={() => this.editn("name",this.props.data.name,this.props.data._id)}>Edit</button>
                        </Link>
                        </td>
                        </tr>
                    <tr>
                        <td><b>Capital</b></td>
                        <td>{this.props.data.capital}</td>
                        <td>
                        <Link
                        to="/add"
                        >
                        <button onClick={() => this.editn("capital",this.props.data.capital,this.props.data._id)}>Edit</button>
                        </Link>
                        </td>
                    </tr>
                    <tr>
                        <td><b>About</b></td>
                        <td>{this.props.data.about}</td>
                        <td>
                        <Link
                        to="/add"
                        >
                        <button onClick={() => this.editn("about",this.props.data.about,this.props.data._id)}>Edit</button>
                        </Link>
                        </td>
                    </tr>
                    <tr>
                        <td><b>Climate</b></td>
                        <td>{this.props.data.climate}</td>
                        <td>
                        <Link
                        to="/add"
                        >
                        <button onClick={() => this.editn("climate",this.props.data.climate,this.props.data._id)}>Edit</button>
                        </Link>
                        </td>
                    </tr>
                    <tr>
                        <td><b>History</b></td>
                        <td>{this.props.data.history}</td>
                        <td>
                        <Link
                        to="/add"
                        >
                        <button onClick={() => this.editn("history",this.props.data.history,this.props.data._id)}>Edit</button>
                        </Link>
                        </td>
                    </tr>
                    <tr>
                        <td><b>Best Time To Visit</b></td>
                        <td>{this.props.data.time}</td>
                        <td>
                        <Link
                        to="/add"
                        >
                        <button onClick={() => this.editn("time",this.props.data.time,this.props.data._id)}>Edit</button>
                        </Link>
                        </td>
                    </tr>
                    <tr>
                        <td><b>Food</b></td>
                        <td>{this.props.data.food}</td>
                        <td>
                        <Link
                        to="/add"
                        >
                        <button onClick={() => this.editn("food",this.props.data.food,this.props.data._id)}>Edit</button>
                        </Link>
                        </td>
                    </tr>
                </tbody>
            </table>
            <center><Link to={{
                pathname: "/displayplaces",
                }} > 
            <button onClick={() => this.data(this.props.data.tourist,this.props.data._id)}>Tourist Places</button>
            </Link></center>
            <center><Link to={{
                pathname: "/displayproduct",
                }} >
            <button onClick={() => this.data(this.props.data.products,this.props.data._id)}>Products</button>
            </Link></center>
        </div>
        )
    }
}
export default Displaydata;