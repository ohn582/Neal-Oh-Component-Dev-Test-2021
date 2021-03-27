import Marquee from "react-smooth-marquee";
import React from 'react';
import background from '../image/slide_one.jpg';
import '../App.css';


class Industries extends React.Component {

    constructor(props){
        super(props);
        this.state = {
          pages: []
        }
    }

    /*This will help us to collect 'industries' data from 'pages'*/
    componentDidMount() {
        fetch("https://f.v1.n0.cdn.getcloudapp.com/items/3e1W2F0W1s2U2d3R2Z46/content.json", {mode: 'cors'})
        .then(res => res.json())
        .then(data => this.setState({
          pages: data.pages
        }))
    }

    render() {
        // debugger
        return (
            <div className='test1'>
                <Marquee velocity={.15}>{/*Used to animate the background, headline, subhead, and cta*/}
                {/*velocity in the Marquee tag is used to change speed*/}
                    <div className='display'>
                        <h1 className='head1' >{this.state.pages.length > 0 ? this.state.pages[0].blocks[0].headline : null}</h1>
                        <p className='head2' >{this.state.pages.length > 0 ? this.state.pages[0].blocks[0].subhead : null}</p>
                        <p className='head3' >{this.state.pages.length > 0 ? this.state.pages[0].blocks[0].cta : null}</p>
                        <p className='LT' >LET'S TALK.</p><span>&#10230;</span> {/*'&#10230' will display an arrow icon*/}
                        <p className='action' />
                        <img className='imgBg' src={background} alt='' />
                    </div>
                </Marquee>
            </div>
        );
    }
}

export default Industries;