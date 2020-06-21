import React from 'react';
import "./Footer.css";
const Footer = (props) => {
  return (
    <div className = "main-footer">
      <div className="container">
       <div className="row">
          <div className="col">
           <h4>Technology Stack</h4>
             <ul className="list-unstyled">
              <li>123-415-1552</li>
               <li>Street-2,Moscow</li>
                <li>Russia</li>
             </ul>
             </div>
             <div className="col">
           <h4>Find Us</h4>
             <ul className="list-unstyled">
              <li > <a href="https://www.linkedin.com/" >Linked In</a></li>
               <li > <a href="https://www.facebook.com/" >Facebook</a></li>
               <li > <a href="https://twitter.com/" >Twitter</a></li>
             </ul>
             </div>
             <hr/>
             <div className="row">
                <p className="col-sm">
                   &copy;{new Date().getFullYear()} TECHNOLOGY STACK | All rights reserved | Terms of Service | Private Policy
                </p>
          </div>
          </div>
       </div>     
    </div>
   )
}

  export default Footer;