import React, {Component} from 'react';
import logo from './image/abc_logo.svg';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
// import background from './image/slide_one.jpg';
import './App.css';

import Industries from './components/Industries'
import Services from './components/Services'
import About from './components/About'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      pages: []
    }
  }

  /*This will help us to collect menu data from 'pages'*/
  componentDidMount() {
    fetch("https://f.v1.n0.cdn.getcloudapp.com/items/3e1W2F0W1s2U2d3R2Z46/content.json", {mode: 'cors'})
    .then(res => res.json())
    .then(data => this.setState({
      pages: data.pages
    }))
  }
  
  
  render() {
    // debugger
    

    //In the return displays the link for 'Industries', 'Services', 'About Us', Logo, and 'Contact Us'
    return (
      <>
       <Router>
          <div>
            
            {/* This will disply the 'abc' logo*/}
            <img className='abc' src={logo} alt='' />

            {/* This will disply the Industries link*/}
            <Route path="/industries" component={Industries} />
            <Link to="/industries" className='industries' >
              <p className='navMenu1' >{this.state.pages.length > 0 ? this.state.pages[0].title : null}</p>
            </Link>

            {/* This will disply the Services link*/}
            <Route path="/services" component={Services} />
            <Link to="/services" className='services'>
              <p className='navMenu2' >{this.state.pages.length > 0 ? this.state.pages[1].title : null}</p>
            </Link>

            {/* This will disply the About link*/}
            <Route path="/about" component={About} />
            <Link to="/about" className='about'>
              <p className='navMenu3' >{this.state.pages.length > 0 ? this.state.pages[2].title : null}</p>
            </Link>

            {/* This will disply the Contact Button*/}
            <p className='contact'>Contact Us</p>
          </div>
        </Router>
      </>
    );
  }
}



export default App;