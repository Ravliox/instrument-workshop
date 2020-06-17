import React from 'react';
import './RotatingSlider.scss';
import violin from '../assets/vmaro.png'
import vblack from '../assets/vblack.png'
import piano from '../assets/piano.png'
import guitar from '../assets/guitar.png'
import guitarb from '../assets/guitarb.png'
import flute from '../assets/flute.png'
import cello from '../assets/cello.png'

import Icon from '@mdi/react'
import { mdiChevronLeft } from '@mdi/js';
import { mdiChevronRight } from '@mdi/js';

import { useSwipeable, Swipeable } from 'react-swipeable'


export default class RotatingSlider extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            movement: false,
            resetting: false,
            startX: 0,
            dragReferencePointX: 0,
            radius: (window.innerWidth) / 2 + 400,
            // radius: 400,
            angleCheckpoints: [18, 90, 162, 234, 306],
            points: [
            {
                angle: 306,
                transform: '',
                checkPoint: 4,
                type: "guitar",
                img: guitar,
                altImg: guitarb,
                altImgSelected: false
            },
            {
                angle: 234,
                transform: '',
                checkPoint: 3,
                type: "cello",
                img: cello,
                altImg: null,
                altImgSelected: false
            },
            {
                angle: 162,
                transform: '',
                checkPoint: 2,
                type: "piano",
                img: piano,
                altImg: null,
                altImgSelected: false
            },
            {
                angle: 90,
                transform: '',
                checkPoint: 1,
                type: "violin",
                img: violin,
                altImg: vblack,
                altImgSelected: false
            },
            {
                angle: 18,
                transform: '',
                checkPoint: 0,
                type: "flute",
                img: flute,
                altImg: null,
                altImgSelected: false
            }
        ]
        }

        this.state.points.forEach(point => {
            this.setPosition(point);
        })
        console.log(this.state);
    }

    componentDidMount() {
        window.addEventListener('resize', () => {
            let points = [...this.state.points];

            let radius = (window.innerWidth) / 2 + 400;
            this.setState({
                radius
            })

            points.forEach(point => {
                this.setPosition(point);
            })
            this.setState({
                points
            })
        })
    }

    switchDirection(value) {
        this.setState({
            direction: value
        })
    }

    startDrag(event) {
        event.preventDefault();
        event.persist();
        if(!this.state.resetting && !this.props.displayTrigger) {
            this.setState({
                movement: true,
                dragReferencePointX: event.clientX,
                startX: event.clientX
            })
        }
    }

    computeAngles(event) {
        event.persist();
        if(this.state.movement && !this.state.resetting){
            let direction = event.clientX > this.state.dragReferencePointX ? -1 : 1;
            let difference = Math.abs(event.clientX - this.state.dragReferencePointX) / 20;
            let points = [...this.state.points];

            points.forEach(point => {
                point.angle += direction * difference;
                if(point.angle > 360) {
                    point.angle = point.angle - 360;
                } else if (point.angle < 0) {
                    point.angle = point.angle + 360;
                }
                this.setPosition(point);
            })

            this.setState({
                points: points,
                dragReferencePointX: event.clientX,
            })
        }
    }

    
    endDrag(event) {
        if(this.state.movement) {
            event.persist();
            this.setState({
                movement: false,
            })
            if(!this.state.resetting) {
                this.setNewCheckpoints(event);
                this.setState({
                    resetting: true
                })
                this.signalInstrumentChange();
                this.moveToCheckpoint();
            }
        }
    }

    moveToCheckpoint() {
        let points = [...this.state.points];
        
        let interval = setInterval(() => {
            let finished = false;
            let centerPoint = this.state.points.filter(point => point.checkPoint === 1)[0];
            let delta = this.calculateDelta(centerPoint, 90);
            console.log(delta);
            points.forEach(point => {
                let checkPointAngle = this.state.angleCheckpoints[point.checkPoint];
                let direction = point.angle < checkPointAngle ? 1 : -1;
                
                if(point.checkPoint === 0 && point.angle < 360 && point.angle > 300) {
                    point.angle = point.angle - 358;
                }

                if(point.checkPoint === 4 && point.angle > 0 && point.angle < 72) {
                    point.angle = 358 + point.angle;
                }
                if(delta === 0) {
                    point.angle = checkPointAngle;
                }

                if(Math.abs(point.angle - checkPointAngle) < 0.01) {
                    finished = true; 
                } else {
                    finished = false;
                    point.angle += direction * delta;
                    this.setPosition(point);
                }
            })

            if(finished) {
                clearInterval(interval);

                this.setState({
                    resetting: false
                })
            } else {
                this.setState({
                    points
                })
            }
        }, 10);
    }

    calculateDelta(point, checkPointAngle) {
        let t = point.angle < checkPointAngle ? point.angle / checkPointAngle * 2 : checkPointAngle / point.angle * 2;
        let delta = t * (2 - t);
        return delta > 0.001 && delta < 1 ? delta : 0;
    }
    
    setNewCheckpoints(event) {
        let points = [...this.state.points];
        let direction = event.clientX > this.state.startX ? 1 : -1;
        let difference = Math.abs(event.clientX - this.state.startX);

        if (difference > 150) {
            points.forEach(point => {
                let indexOfLeftCheckpoint = Math.floor(point.angle / 72);
                let indexOfRightCheckpoint = indexOfLeftCheckpoint === 4 ? 0 : indexOfLeftCheckpoint + 1;

                point.checkPoint = direction === -1 ? indexOfRightCheckpoint : indexOfLeftCheckpoint;
       
                if(indexOfLeftCheckpoint === 4 && point.checkPoint === 0) {
                    point.angle = point.angle - 360;
                }
            })

            this.setState({
                points
            })
        }   
    }

    setPosition(point) {
        let angleRadians = (point.angle / 180) * Math.PI;
        let xCoeficient = Math.round(this.state.radius * Math.cos(angleRadians));
        let yCoeficient = Math.round(this.state.radius * Math.sin(angleRadians) / 2) * -1;

        point.transform = `translateX(${xCoeficient}px) translateY(${yCoeficient}px)`;
    }

    slideRight() {
        if(!this.state.resetting && !this.props.displayTrigger) {
            let points = [...this.state.points];
            points.forEach(point => point.checkPoint = point.checkPoint === 0 ? 4 : point.checkPoint - 1);
            this.setState({
                points,
                resetting: true
            });
            this.signalInstrumentChange();
            this.moveToCheckpoint();
        }
    }

    slideLeft() {
        if(!this.state.resetting && !this.props.displayTrigger) {
            let points = [...this.state.points];
            points.forEach(point => point.checkPoint = point.checkPoint === 4 ? 0 : point.checkPoint + 1);
            this.setState({
                points,
                resetting: true
            });
            this.signalInstrumentChange();
            this.moveToCheckpoint();
        }
    }

    signalInstrumentChange() {
        let currentInstrument = this.state.points.find(point => point.checkPoint === 1);
        let currentIndex = this.state.points.indexOf(currentInstrument);
        this.props.slideHandler(currentIndex, currentInstrument.img);
    }

    flipAltImage(value) {
        let points = [...this.state.points];
        let currentPoint = points.find(point => point.checkPoint === 1);
        let oldValue = currentPoint.altImgSelected;
        currentPoint.altImgSelected = value;
        if(oldValue !== value) {
            let imgAux = currentPoint.img;
            currentPoint.img = currentPoint.altImg;
            currentPoint.altImg = imgAux;
        }
        this.setState({
            points
        })
    }

    render() {
        return (
            <div>
                <Swipeable onSwipedLeft={() => this.slideLeft()} onSwipedRight={() => this.slideRight()}>
                <div className = "point-container" style={{cursor: this.state.movement && !this.props.displayTrigger ? "grabbing" : "default"}} 
                onMouseUp={(e) => this.endDrag(e)} onMouseMove={(e) => this.computeAngles(e)}>
                    {this.state.points.map((point, index) =>
                    <div className = "point" key={index} style={{transform: point.transform}}>
                        { (!this.props.displayTrigger || (this.props.displayTrigger && point.checkPoint == 1)) &&
                        <img className={`${point.type} ${this.props.displayTrigger ? "translated" : ""}`} src={point.img} onMouseDown={(e) => this.startDrag(e)} onMouseLeave={(e) => this.endDrag(e)}
                        style={{cursor: this.props.displayTrigger ? "default" : (this.state.movement ? "grabbing" : "grab")}} />
                        }
                        {
                            point.altImg && this.props.displayTrigger &&
                            <div className={`alt-img ${point.type} ${this.props.displayTrigger ? "translated" : ""} ${this.props.animationFinished ? "" : "hidden"}`}>
                                <img src={point.altImg}></img>
                                <div className="expanded-button-row">
                                    <button onClick={() => this.flipAltImage(false)} className={`${point.altImgSelected ? "" : "selected"}`}></button>
                                    <button onClick={() => this.flipAltImage(true)} className={`${!point.altImgSelected ? "" : "selected"}`}></button>
                                </div>
                            </div>
                        }
                    </div>
                    )}
                    {!this.props.displayTrigger && <div className={`button-container ${this.props.opacityTrigger ? "hidden" : ""}`}>
                        <Icon path={mdiChevronLeft} onClick={(e) => this.slideLeft()} size={3} color="white"/>
                        <Icon path={mdiChevronRight} onClick={(e) => this.slideRight()} size={3} color="white"/>
                    </div>}
                </div>
                </Swipeable>
            </div>
        )
    }
} 