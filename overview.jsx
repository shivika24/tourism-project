import React,{ Component } from 'react';
import Nav1 from './nav1';

class Overview extends Component{
    render(){
        return(
        <div>
            <Nav1 />
            {console.log(this.props.location.state.datapass1)}
        </div>
        )
    }
}
export default Overview;
