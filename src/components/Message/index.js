import React from 'react';
import './Message.scss';
import PropTypes from 'prop-types';
import {formatDistance,subDays,formatRelative } from 'date-fns' ;
import ruLocele from 'date-fns/locale/ru';

export default class Message extends React.Component {
    render() {
        return (
            <div className="message">
                <div className="message__avatar">
                    <img src={this.props.avatar} alt="user Avatar" />
                </div>
                <div className="message__content">
                    <div className="message__bubble">
                        {this.props.text}
                    </div>
                    <span className="message__date">
                        {formatDistance(this.props.date,new Date(),{ addSuffix: true,locale:ruLocele })}
                    </span>
                </div>
            </div>
        );
    }
}
Message.propTypes = {
    className: PropTypes.string,
    children: PropTypes.string
}