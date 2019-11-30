import React,{ Component } from 'react';
import {Link} from 'react-router-dom';
class Nav1 extends Component
{
  state={
    datapass1:'',
    datapass2:''
  }
    render()
    {
        return (
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <Link class="nav-link" to={{
                  pathname: "/overview",
                  state: {
                  datapass1: this.props.datanav
                  }
                  }}>Overview <span class="sr-only">(current)</span></Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to={{
                  pathname: "/state2",
                  state: {
                  datapass2: this.props.datanav
                  }
                  }}>Places To Visit</Link>
              </li>
            </ul>
          </div>
        </nav>
        )
    }
}
export default Nav1;
