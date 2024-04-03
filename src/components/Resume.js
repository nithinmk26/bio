import React, { Component } from 'react';
export default  class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">

         <div className="row education">

            <div className="three columns header-col">
               <h1><span>Education</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.education && resumeData.education.map((item)=>{
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.UniversityName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em></p>
                          <p>
                          {item.Achievements}
                          </p>
                       </div>
                    </div>
                  )
                })
              }
            </div>
         </div>
        <div className="row work">
            <div className="three columns header-col">
               <h1><span>Work</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.work && resumeData.work.map((item) => {
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.CompanyName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.MonthOfLeaving} {item.YearOfLeaving}</em></p>
                          <p>
                          {item.Achievements}
                          </p>
                       </div>

                    </div>

                  )
                })
              }
            </div> 
         </div> 

         <div class="row skill">
  <div class="table-responsive">
    <table class="three columns header-col">
      <tr>
        <td><h4><span>Father</span></h4></td>
        <td><h4>{resumeData.fatherName}</h4></td>
      </tr>
      <tr>
        <td><h4><span>Mother</span></h4></td>
        <td><h4>{resumeData.motherName}</h4></td>
      </tr>
      <tr>
        <td><h4><span>Sibling</span></h4></td>
        <td><h4>{resumeData.sibling}</h4></td>
      </tr>
      <tr>
        <td><h4><span>Sister In Law</span></h4></td>
        <td><h4>{resumeData.sisterInLaw}</h4></td>
      </tr>
      <tr>
        <td><h4><span>DOB</span></h4></td>
        <td><h4>{resumeData.dob}</h4></td>
      </tr>
      <tr>
        <td><h4><span>Caste</span></h4></td>
        <td><h4>{resumeData.caste}</h4></td> 
      </tr> 
      <tr>
        <td><h4><span>Rashi</span></h4></td>
        <td><h4>{resumeData.rashi}</h4></td>
      </tr>
      <tr>
        <td><h4><span>Nakshatra</span></h4></td>
        <td><h4>{resumeData.nakshatra}</h4></td>
      </tr>
      <tr>
        <td><h4><span>Place of Birth</span></h4></td>
        <td><h4>{resumeData.birthPlace}</h4></td>
      </tr>
      <tr>
        <td><h4><span>Time of Birth</span></h4></td>
        <td><h4>{resumeData.timeofbirth}</h4></td>
      </tr>
    </table>
  </div>
</div>


      </section>
    );
  }
}