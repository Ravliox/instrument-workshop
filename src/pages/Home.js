import React from 'react'
import './Home.scss'
import d from './d';

import RotatingSlider from '../components/RotatingSlider'
import anime from 'animejs/lib/anime.es.js';
import Icon from '@mdi/react'
import { mdiClose } from '@mdi/js';
import { mdiStar } from '@mdi/js';
import { mdiStarOutline } from '@mdi/js';
import { mdiPencil } from '@mdi/js';
import { mdiCartOutline } from '@mdi/js';
import { mdiHeartOutline } from '@mdi/js';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            indexOfCurrentInstrument: 3,
            expandedOpacityTrigger: false,
            expandedDisplayTrigger: false,
            animationTrigger: false,
            animationFinishedTrigger: false,
            fillTitle: false
        }
    }

    componentDidMount() {
        anime({
            targets: '#anime_target',
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'easeInOutSine',
            duration: 6500,
            direction: 'alternate',
            loop: false
        });
        console.log(anime);
    }

    expand() {
        this.setState({
            expandedOpacityTrigger: true
        });
        setTimeout(() => {
            this.setState({
                expandedDisplayTrigger: true,            
                animationTrigger: true
            });
            setTimeout(() => {
                this.setState({
                    animationFinishedTrigger: true
                })
            }, 500)
        }, 200);
    }

    retract() {
        this.setState({expandedDisplayTrigger: false});
        setTimeout(() => {
            this.setState(
                {
                    expandedOpacityTrigger: false,
                    animationTrigger: false,
                    animationFinishedTrigger: false
                });
        }, 500)
    }

    render() {
        return (
        <div className={`home-page ${this.props.instruments[this.props.currentIndex].class}`}>
            <svg className="title" xmlns="http://www.w3.org/2000/svg" width="828.625" height="121.375" viewBox="0 0 828.625 121.375">
                <path id="anime_target" data-name="Path 7" className={`cls-1 ${this.state.fillTitle ? 'fill' : ''}`} d={d} transform="translate(0.5 88.5)"/>
            </svg>
            <h2 className="subtitle">Pour les passions des tous les jours.</h2>
            <div className="content">
                <div className={`description ${this.state.expandedDisplayTrigger ? 'expanded' : ""}`}>
                    { !this.state.expandedDisplayTrigger &&
                        <p className={`${this.state.expandedOpacityTrigger ? 'hidden' : ''}`}>{this.props.instruments[this.props.currentIndex].description}</p>
                    }
                    {
                        this.state.expandedDisplayTrigger && 
                        <button className={`close-button ${!this.state.animationFinishedTrigger ? 'hidden' : ''}`} onClick={() => this.retract()}>
                            <Icon path={mdiClose} size={2} />
                        </button>
                    }
                    {
                        this.state.expandedDisplayTrigger && 
                        <div className={`expanded-content ${!this.state.animationFinishedTrigger ? 'hidden' : ''}`}>
                            <h2 className="expanded-content-title">Infinity Violin</h2>
                            <p className="expanded-content-description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                            <div className="expanded-content-stars">
                                <Icon path={mdiStar} size={1} />
                                <Icon path={mdiStar} size={1} />
                                <Icon path={mdiStar} size={1} />
                                <Icon path={mdiStar} size={1} />
                                <Icon path={mdiStarOutline} size={1} />

                            </div>
                            <div className="expanded-content-options">
                                <Icon path={mdiPencil} size={1} />
                                <Icon path={mdiCartOutline} size={1} />
                                <Icon path={mdiHeartOutline} size={1} />
                            </div>
                        </div>
                    }
                </div>
                <div className={`find-more ${this.state.animationTrigger ? 'retracted' : ""}`}>
                    { !this.state.animationTrigger &&
                    <button className={`find-more-button ${this.state.expandedOpacityTrigger ? 'hidden' : ''}`} onClick={() => this.expand()}>
                        FIND MORE
                    </button>
                    }
                </div>
            </div>
            <RotatingSlider 
            slideHandler={this.props.slideHandler} 
            opacityTrigger={this.state.expandedOpacityTrigger}
            displayTrigger={this.state.expandedDisplayTrigger}
            animationFinished={this.state.animationFinishedTrigger}
            />
        </div>
        );
    }
}