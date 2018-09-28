import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="my-2"><img src="https://fakeimg.pl/1600x900/?text=Slider" className="img-fluid"/></div>
          <div className="row">
            <div className="my-2 col-md-4">
              <img src="https://fakeimg.pl/1600x900/?text=Service1" className="img-fluid" />
              <p className="p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis eos consequuntur nihil maiores vero a sequi enim repellendus. Esse impedit laudantium veritatis eius sunt qui deleniti adipisci consectetur ipsam officia.</p>
            </div>
            <div className="my-2 col-md-4">
              <img src="https://fakeimg.pl/1600x900/?text=Service2" className="img-fluid" />
              <p className="p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis eos consequuntur nihil maiores vero a sequi enim repellendus. Esse impedit laudantium veritatis eius sunt qui deleniti adipisci consectetur ipsam officia.</p>
            </div>
            <div className="my-2 col-md-4">
              <img src="https://fakeimg.pl/1600x900/?text=Service3" className="img-fluid" />
              <p className="p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis eos consequuntur nihil maiores vero a sequi enim repellendus. Esse impedit laudantium veritatis eius sunt qui deleniti adipisci consectetur ipsam officia.</p>
            </div>
          </div>
          <div className="my-2"><img src="https://fakeimg.pl/1600x200/?text=Callout" className="img-fluid"/></div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Home;