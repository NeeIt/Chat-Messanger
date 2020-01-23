import React from 'react';
import { Button as BaseButton } from 'antd';
import './Button.scss';
import PropTypes from 'prop-types';
import ClassNames from 'classnames'
export default class Button extends React.Component {
    render() {
        return (
            <BaseButton
            {...this.props}
                className={ClassNames("button", this.props.className)}>
                    {this.props.children}
                </BaseButton>
        );
    }
}
Button.propTypes = {
    className: PropTypes.string
}