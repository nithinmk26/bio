import React, { Component } from "react";
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
              <h4>
                <p className="address">
                  <span>
                    {resumeData.name} s/o {resumeData.fatherName}
                  </span>
                  <br />
                  <span>{resumeData.address}</span>
                  <br />
                </p>
              </h4>
              <h4><a href="https://maps.app.goo.gl/Dnh1UqDs2tUibrjz8"> View on google Maps </a></h4>
              <br/>
              <h4><a href="https://maps.apple.com/?auid=9214258847491162934&ll=13.591410,75.975902&lsp=7618&q=Dropped%20Pin&t=m"> View on apple Maps </a></h4>
              <br/>
              <h4>Nithin : 9986024343, 9113683980</h4>
              <h4> Mother : 7892041457</h4>
              <h4> Father : 9036092901</h4>
            </div>
          </aside>
        </div>
      </section>
    );
  }
}
