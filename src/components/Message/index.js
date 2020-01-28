import React from 'react';
import './Message.scss';
import PropTypes from 'prop-types';
import {formatDistance,subDays,formatRelative } from 'date-fns' ;
import ruLocele from 'date-fns/locale/ru';
import classNames from 'classnames';
import NotCheckedIco from 'assets/icos/tick.svg';
import CheckedIco from 'assets/icos/double_tick.png'; 

export default class Message extends React.Component {
    render() {
        return (
            <div className={classNames("message",(this.props.isMe)?'me':'notMe')}>
                <div className="message__avatar">
                    <img src={this.props.avatar} alt="user Avatar" />
                </div>
                <div className="message__content">
                    <div className="message__bubble">
                        {this.props.text}
                    </div>
                    {this.props.attachments && this.props.attachments.imgs?
                    <div className="message__attachmentImgsContainer">
                    {
                    this.props.attachments.imgs.map(
                        (img,id)=>
                        <div className="message__attachmentImg" id={id}>
                            <img src={img.src} alt={"attachment image #"+id} />
                        </div>)
                    }
                    </div>
                        
                        :false}
                
                    <span className="message__date">
                        {formatDistance(this.props.date,new Date(),{ addSuffix: true,locale:ruLocele })}
                    </span>
                </div>
                <div className="message__checked">
                   <img src={(this.props.isReaded)?CheckedIco:NotCheckedIco} alt={(this.props.isReaded)?"Прочтено":"Не прочтено"}/>
                </div>
            </div>
        );
    }
}
Message.propTypes = {
    className: PropTypes.string,
    children: PropTypes.string
}