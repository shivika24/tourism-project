import React,{ Component } from 'react';
import './gallery.css';
class Gallery extends Component
{
    constructor()
    {
        super();
        this.change=this.change.bind(this);
    }
    change(x)
    {
        document.getElementById("mainimg").src=x;
    }
    render()
    {
        return ( <div>
            <div className="row">
            <div className="col-3">
            <div className="container" style={{width: "18rem",height:"21rem"}}>
            <center><img className="image" src="https://www.99bestquoteswishes.com/wp-content/uploads/2015/12/protecting-your-reputation-About-Us1.jpg" alt="Card image cap"/></center>
            
            <div className="middle">
            <div className="text">{this.props.about}</div>
            </div>
           </div>
           </div>         


            <div className="col-6" style={{marginTop:"1vw",marginBottom:"1vw"}}>
            <center><img src={this.props.images[0]} id="mainimg" className="img-fluid"/></center>
            </div>

            <div className="col-3">
            <div className="container" style={{width: "18rem",height:"21rem"}}>
            <center><img className="image" src="https://carlisletheacarlisletheatre.org/images/history-channel-logo-transparent-5.jpg" alt="Card image cap"/></center>
                       
            <div className="middle">
            <div className="text">{this.props.history}</div>
            </div>
           </div>
           </div>
           </div>
  

            <div className="row">
            <div className="col-2">
            <img src={this.props.images[0]} id="img" className="img-thumbnail" onClick={() => this.change(this.props.images[0])}/>
            </div>
            <div className="col-2">
            <img src={this.props.images[1]} id="img" className="img-thumbnail"  onClick={() => this.change(this.props.images[1])}/>
            </div>
            <div className="col-2">
            <img src={this.props.images[2]} id="img" className="img-thumbnail" onClick={() => this.change(this.props.images[2])}/>
            </div>
            <div className="col-2">
            <img src={this.props.images[3]} id="img" className="img-thumbnail" onClick={() => this.change(this.props.images[3])}/>
            </div>
            <div className="col-2">
            <img src={this.props.images[4]} id="img" className="img-thumbnail" onClick={() => this.change(this.props.images[4])}/>
            </div>
            <div className="col-2">
            <img src={this.props.images[5]} id="img" className="img-thumbnail" onClick={() => this.change(this.props.images[5])}/>
            </div>
            </div>
            {console.log(this.props.images[0])}
            </div>
            
            )
    }
}
export default Gallery;