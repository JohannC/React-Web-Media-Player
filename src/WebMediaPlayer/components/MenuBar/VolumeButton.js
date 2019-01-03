import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Button.css';

class VolumeButton extends Component {

    handleMouseEnter = (e) => {
        e.stopPropagation();
        this.props.dispatch({ type: 'SHOW_VOLUME_SLIDER' });
    }

    render = () => {
        let icon;
        if(this.props.volume === 0){
            icon = "volume_off";
        } else if(this.props.volume < 0.5){
            icon = "volume_down";
        } else {
            icon = "volume_up";
        }
        return (
            <div className="wmp-tool-button material-icons light-grey-to-white md-26" onMouseEnter={this.handleMouseEnter}>
                {icon}
            </div>    
        );
    }
}

const mapStateToProps = (state) => {
    return {
        volume: state.volume,
        pastVolume: state.pastVolume
    };
};

export default connect(mapStateToProps)(VolumeButton);
