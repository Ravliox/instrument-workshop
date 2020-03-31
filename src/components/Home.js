import React from 'react'
import './Home.scss'

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            instruments: [
                {
                    name: "violin",
                    description: "Our violins are made out of the highest quality wood available. They are the result of the passion, the sweat and the hundreds of work put in by our artisans and would put a tear in Mozart's eye."
                }
            ]
        }
    }

    render() {
        return (
        <div className="home-page">
            <h1 className="title">Oakheart Music Workshop</h1> 
            <div className="content">
                <p className="description">
                    {this.state.instruments[0].description}
                </p>
            </div>
        </div>
        );
    }
}