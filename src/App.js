import React, { Component } from 'react';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import resumeData from './resumeData';
import ReactGA from 'react-ga'; // Import ReactGA

class App extends Component {
  componentDidMount() {
    ReactGA.initialize('G-2M9F5EQY24'); // Initialize ReactGA with your tracking ID
    ReactGA.pageview(window.location.pathname + window.location.search); // Track initial pageview
  }

  render() {
    return (
      <div className="App">
        <Header resumeData={resumeData}/>
        <About resumeData={resumeData}/>
        <Resume resumeData={resumeData}/>
        <Portfolio resumeData={resumeData}/>
        <ContactUs resumeData={resumeData}/>
        <Footer resumeData={resumeData}/>
      </div>
    );
  }
}

export default App;
