import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <h3 className="lead">
              Feel free to contact for any further information
              </h3>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <h4>Nithin : 9986024343,  9113683980</h4>
                 <h4> Mother : 7892041457</h4>
              </div>
            </aside>
          </div>
        </section>
        );
  }
}