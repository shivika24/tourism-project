import React,{Component} from 'react';

class Footer extends Component{
    render(){
        return(
            
<div>
<footer className="page-footer font-small stylish-color-dark pt-4">
<div className="container text-center text-md-left">
<div className="row">

<div className="col-md-6 mx-auto">

  <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Footer Content</h5>
  <p className="col-lg-9 col-md-12 ">“Whenever you go on a trip to visit in India or distant places, remember that they are all someone's home and backyard.”</p>

</div>


<div className="col-md-3 mx-auto">
<h5 className="font-weight-bold text-uppercase mt-3 mb-4">Support</h5>
 
  <ul className="list-unstyled">
    <li>
      <a href="#!">Contact</a>
    </li>
    <li>
      <a href="#!">Legal</a>
    </li>
    <li>
      <a href="#!">Privacy Policy</a>
    </li>
    <li>
      <a href="#!">Terms of Use</a>
    </li>
  </ul>
  
  </div>
  <div className="col-md-3 mx-auto">

        <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Company</h5>
        
        <ul className="list-unstyled">
          <li>
            <a href="#!">About Us</a>
          </li>
          <li>
            <a href="#!">Careers</a>
          </li>
          <li>
            <a href="#!">Contacts</a>
          </li>
          <li>
            <a href="#!">Register</a>
          </li>
        </ul>

      </div>
      
      <hr/>
      
</div>
<br></br>
<ul className="list-unstyled list-inline text-center">
    <li className="list-inline-item">
      <a className="btn-floating btn-fb mx-1">
        <i className="fab fa-facebook-f"> </i>
      </a>
    </li>
    <li className="list-inline-item">
      <a className="btn-floating btn-tw mx-1">
        <i className="fab fa-twitter"> </i>
      </a>
    </li>
    <li className="list-inline-item">
      <a className="btn-floating btn-gplus mx-1">
        <i className="fab fa-google-plus-g"> </i>
      </a>
    </li>
    <li className="list-inline-item">
      <a className="btn-floating btn-li mx-1">
        <i className="fab fa-linkedin-in"> </i>
      </a>
    </li>
    <li className="list-inline-item">
      <a className="btn-floating btn-dribbble mx-1">
        <i className="fab fa-dribbble"> </i>
      </a>
    </li>
  </ul>

</div>
<div className="footer-copyright text-center py-3">
    <a href=""> © 20019–2020  GetYourGuide ♥ Made in India.</a>
    
  </div>
  <center> <small>Contents on this website is published, managed and maintained by Tourism Department.</small></center>
 
</footer>
</div>

        )
    }
}
export default Footer;