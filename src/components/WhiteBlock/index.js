import React from 'react';
import './WhiteBlock.scss';
import ClassNames from 'classnames';

export default class WhiteBlock extends React.Component{
    render(){
        return (
            <div className={ClassNames("whiteBlock",this.props.className)} {...this.props}>
                {this.props.children}
            </div>
        );
    }
}