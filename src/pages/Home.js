import React from 'react'
import './Home.scss'

import RotatingSlider from '../components/RotatingSlider'

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            instruments: [
                {
                    name: "violin",
                    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr."
                }
            ]
        }
    }

    render() {
        return (
        <div className="home-page">
            <h1 className="title">Maison de la Musique</h1> 
            <h2 className="subtitle">Pour les passions des tous les jours.</h2>
            <div className="content">
                <div className="description">
                    <p>{this.state.instruments[0].description}</p>
                </div>
                <div className="find-more">
                    <button className="find-more-button">
                        FIND MORE
                    </button>
                </div>
            </div>
            <RotatingSlider />
        </div>
        );
    }
}