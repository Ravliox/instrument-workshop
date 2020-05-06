import React from 'react';
import './Navbar.scss'
import logo from './assets/logo.svg'

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
                <img src={logo} />
                <div className="navbar-menu">
                    <div className="link" onMouseEnter={() => this.setState({home: true})}
                                        onMouseLeave={() => this.setState({home: false})}>
                        <a href="https://www.google.com">Home</a>
                        <div className={`${this.state.home ? 'expanded' : ''}`}></div>
                    </div>
                    <div className="link" onMouseEnter={() => this.setState({about: true})}
                                        onMouseLeave={() => this.setState({about: false})}>
                        <a href="https://www.google.com">About us</a>
                        <div className={`${this.state.about ? 'expanded' : ''}`}></div>
                    </div>
                    <div className="link" onMouseEnter={() => this.setState({contact: true})}
                                        onMouseLeave={() => this.setState({contact: false})}>
                        <a href="https://www.google.com">Contact</a>
                        <div className={`${this.state.contact ? 'expanded' : ''}`}></div>
                    </div>
                </div>
            </div>
        )
    }
}