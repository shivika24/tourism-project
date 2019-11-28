import React,{ Component } from 'react';
import {Link} from 'react-router-dom';
import './displayproducts.css';
import 'hover.css/css/hover-min.css';
import { thisExpression } from '@babel/types';
class Displayproducts extends Component
{
    state={
        temp1:[],
        ne:[]
    }
    /*componentWillMount()
    {
        this.setState({
            temp1:this.props.location.state.products,
            ne:this.props.location.state.products
        })
    }*/
    constructor()
    {
        super();
        this.adddata=this.adddata.bind(this);
        this.myfunc=this.myfunc.bind(this);
        this.check=this.check.bind(this);
        this.state={
            elem:'',
            temp:[]
        }
        
    }
    check(e,elem1)
    {
        e.preventDefault();
        this.setState({elem:elem1});
        console.log(this.state.elem)

        /*let ne=this.state.temp1;
        console.log(elem)
        ne=ne.filter((i)=>{return i.category!=elem});
        console.log(this.state.ne)
        this.setState({ne:ne})*/

        /*this.setState({temp1:arr})      
       const temp2=arr.filter((cat)=>{return cat.category!=elem})
        this.setState({temp1:this.state.temp1})
        console.log(temp2)
        this.myfunc(temp2);*/ 
    }
   myfunc(val)
    {
        for(let i=0;i<val.length;i=i+2)
        {
            if((i+1)<val.length&&i<val.length)
            {
            this.state.temp.push( <div>
                <div className="row">
            <div className="col-md-6 padding-0">
            <img id="product1" src={val[i].image}/> 
            <button class="probutt" onClick={(e)=>this.adddata(e,val[i].description,i,val[i].name)}>{val[i].name}</button> 
            </div>
            <div className="col-md-6 padding-0">            
            <img id="product1" src={val[i+1].image}/> 
            <button class="probutt" onClick={(e)=>this.adddata(e,val[i+1].description,i,val[i+1].name)}>{val[i+1].name}</button> 
            </div>
            </div>
            <div className="proddiv" id={i} style={{display:"none"}}></div>
            </div>);            
            }
            else
            {
                this.state.temp.push( <div>
                    <div className="row">
                <div className="col-md-6 padding-0">
                <img id="product1" src={val[i].image}/> 
                <a><button class="probutt" onClick={(e)=>this.adddata(e,val[i].description,i,val[i].name)}>{val[i].name}</button></a> 
                </div>
                </div>
                <div className="proddiv" id={i} style={{display:"none"}}></div>
                </div>);                
            }
        }
        return this.state.temp;
    }
    adddata(e,val,i,n)
    {
        var x=document.getElementById(""+i);
        if (x.style.display === "none") {
            x.innerHTML="<center><b>"+n+"</b></center>"+val;
            x.style.display = "block";
          } else {
            x.style.display = "none";
          }
    }
    render()
    {
        let city=this.props.location.state.products.filter((event,index)=>{
            return (
                event.category!==this.state.elem
            )
        })
        return (
           <div>
           <form>
           <label class="radio-inline">
             <input type="radio" name="r1" onChange={(e)=>{return this.check(e,"Clothing & Accessories")}}/>Clothing & Accessories
           </label>
           <label class="radio-inline">
             <input type="radio" name="r1" onChange={(e)=>{return this.check(e,"Jewellery")}}/>Jewellery
           </label>
           <label class="radio-inline">
             <input type="radio" name="r1"  onChange={(e)=>{return this.check(e,"Grocery")}}/>Grocery
           </label>
           <label class="radio-inline">
             <input type="radio" name="r1"  onChange={(e)=>{return this.check(e,"Home-Decor")}}/>Home-Decor
           </label>
         </form>
        
             {this.myfunc(city)})}
           </div>
            
        )
    }
}
export default Displayproducts;
/*
      <div className="row">
            
            {this.props.location.state.products.map((i)=>{
                return <div className="col-6 padding-0">
                 <img id="product1" src={i.image}/>     
                <button class="probutt" onClick={(e)=>this.adddata(e,i.description)}>{i.name}</button> 
                <center><div classname="col-12" id="newww" style={{display:"none"}}></div></center>
                </div> 
            })}             
            </div>   
*/