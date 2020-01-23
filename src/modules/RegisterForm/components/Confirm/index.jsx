import React from 'react';
import "./Confirm.scss";
import {Icon, Button } from 'antd';
import { Link } from 'react-router-dom';

export default class Confirm extends React.Component{
    render(){
        return(
            <div className="confirmBlock">
                <Icon type="info-circle" theme="twoTone"/> 
                <h3>Подтвердите свой аккаунт</h3>
                <p>
                    На вашу почту отправлено письмо с ссылкой на подтверждение
                </p>
                <Link to="/login"><Button size="large">Вернуться назад</Button></Link>
            </div>
        )
    }
}