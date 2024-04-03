import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export default class Footer extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <footer>
      <div className="row">
        <div className="twelve columns">
          <ul className="social-links">
            {
              resumeData.socialLinks && resumeData.socialLinks.map((item)=>{
                return(
                  <li key={item.name}>
                  <a href={item.url} target="_blank">
                  {item.name === 'whatsapp' ? ( // Check if it's WhatsApp
    <FontAwesomeIcon icon={faWhatsapp} />
  ) : (
    <i className={item.className}></i>
  )}</a>
                </li>
                )
              })
            }
          </ul>
          
        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
      </div>
    </footer>
    );
  }
}