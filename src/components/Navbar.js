import React from 'react';
import './Navbar.scss'

export default class Navbar extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            home: false,
            about: false,
            contact: false
        }
    }

    render() {
        return (
            <div className="navbar">
                <div>
                    <svg className={this.props.instruments[this.props.currentIndex].class} xmlns="http://www.w3.org/2000/svg" width="67.995" height="42.148" viewBox="0 0 67.995 42.148"><defs></defs><g transform="translate(-4.447 -18)"><path className="a" d="M70.442,48.609H61.333V20L38.445,42.888,15.557,20V48.61l-9.109,0"/><path className="a" d="M66.064,59.26H52.02V44L38.669,57.351,25.318,44V59.259l-14.046,0" transform="translate(-0.224 -1.112)"/></g></svg>
                </div>
                <div className="navbar-menu">
                    <div className="link" onMouseEnter={() => this.setState({home: true})}
                                        onMouseLeave={() => this.setState({home: false})}>
                        <a href="https://www.google.com">Home</a>
                        <div className={`${this.state.home ? 'expanded' + " " + this.props.instruments[this.props.currentIndex].class : ''}`}></div>
                    </div>
                    <div className="link" onMouseEnter={() => this.setState({about: true})}
                                        onMouseLeave={() => this.setState({about: false})}>
                        <a href="https://www.google.com">About us</a>
                        <div className={`${this.state.about ? 'expanded' + " " + this.props.instruments[this.props.currentIndex].class : ''}`}></div>
                    </div>
                    <div className="link" onMouseEnter={() => this.setState({contact: true})}
                                        onMouseLeave={() => this.setState({contact: false})}>
                        <a href="https://www.google.com">Contact</a>
                        <div className={`${this.state.contact ? 'expanded' + " " + this.props.instruments[this.props.currentIndex].class : ''}`}></div>
                    </div>
                    <button className={`sign-up-button ${this.props.instruments[this.props.currentIndex].class}`}>Sign up</button>
                </div>
            </div>
        )
    }
}