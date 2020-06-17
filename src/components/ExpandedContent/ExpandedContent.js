import React from 'react';
import './ExpandedContent.scss'
import Icon from '@mdi/react'
import { mdiClose } from '@mdi/js';
import { mdiStar } from '@mdi/js';
import { mdiStarOutline } from '@mdi/js';
import { mdiPencil } from '@mdi/js';
import { mdiCartOutline } from '@mdi/js';
import { mdiHeartOutline } from '@mdi/js';

export default class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="expanded-content-wrapper">
            {
                this.props.expandedDisplay && 
                <button className={`close-button ${!this.props.animationFinished ? 'hidden' : ''}`} onClick={() => this.props.retract()}>
                    <Icon path={mdiClose} size={2} />
                </button>
            }
            {
                this.props.expandedDisplay && 
                <div className={`expanded-content ${!this.props.animationFinished ? 'hidden' : ''}`}>
                    <h2 className="expanded-content-title">{this.props.content.title}</h2>
                    <p className="expanded-content-description">{this.props.content.description}</p>
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
            {
                this.props.expandedDisplay && 
                <div className={`expanded-content-mobile ${!this.props.animationFinished ? 'hidden' : ''}`}>
                </div>
            }
            </div>
        )
    }
}