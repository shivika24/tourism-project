import React,{Component} from 'react';
import { Link } from "react-router-dom";
import Form from './addstate';

class First extends Component
{
    constructor() {
        super();
        this.state={
            statedata:[],
            myarr:[]
        }
        this.data1=this.data1.bind(this);
      }    
      data1(x)
      {
          this.props.ondata11(x);
      }
    async componentDidMount() {
        const iid="5e19929ab8bc354e7cebe88e";
        const url = `http://localhost:8081/state/${iid}`;
        const response = await fetch(url);
        const jsondata = await response.json();
        var stringdata = JSON.stringify(jsondata);
        this.setState({ statedata: jsondata});
        console.log(this.state.statedata)
    }
      render() {
        return (
          <div>          
          <Link
          to="/Tourismdataform"
          >
          <button>Add Information</button>
            </Link> 
            <Link to={{
                pathname: "/display",
                }} > 
            <button onClick={() => this.data1(this.state.statedata)}>View Information</button>
              </Link>         
          </div>
        );
      }
}

export default First;