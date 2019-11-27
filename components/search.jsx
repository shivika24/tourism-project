import React,{ Component } from 'react';
import Places from './places';
class Search extends Component
{
    constructor()
    {
        super();
        this.state={
            data:''
        }
        this.f1=this.f1.bind(this);
    }
    f1(e)
    {
        e.preventDefault();
        this.setState({data:e.target.value})
    }
    render()
    {
         let city=this.props.statespass.filter((event,index)=>{
             return (
                 event.name.toLowerCase().indexOf(this.state.data.toLowerCase())!==-1
             )
         })
         return (
             <div>
             <input type="text" id="ssearch" placeholder="Search by state name" name="Search" value={this.state.data} onChange={(e)=>this.f1(e)}/>
             <Places statespass={city}/>
             </div>
         )
        
    }
}
export default Search;