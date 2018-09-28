import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

class About extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="my-2"><img src="https://fakeimg.pl/1600x900/?text=Map" className="img-fluid"/></div>
          <div className="row my-2">
            <div className="col-md-6"><img src="https://fakeimg.pl/1600x900/?text=Address" className="img-fluid"/></div>
            <div className="col-md-6"><img src="https://fakeimg.pl/1600x900/?text=Contact Form" className="img-fluid"/></div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default About;