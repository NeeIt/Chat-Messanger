import React from 'react';
import { Form, Icon, Input, Checkbox } from 'antd';
import Button from 'components/Button';
import { Link } from 'react-router-dom';
import Confirm from './Confirm/';

export default class RegisterForm extends React.Component{
    constructor(props){
        super(props);
        this.state = { success: false };
    }
    render(){
        return (
            (!this.state.success)?
            <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
                <Input
                    prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="Email" size="large"
                />
            </Form.Item>
            <Form.Item>
                <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="password"
                    placeholder="Ваше имя" size="large"
                />
            </Form.Item>
            <Form.Item>
                <Input
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="password"
                    placeholder="Пароль" size="large"
                />
            </Form.Item>
            <Form.Item>
                <Input
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="password"
                    placeholder="Повторите пароль" size="large"
                />
            </Form.Item>
            <Form.Item>
                <Checkbox>Я принимаю <a href="#">условия</a> соглашения</Checkbox>
                <Button type="primary" className="button--large block">
                    ЗАРЕГЕСТРИРОВАТЬСЯ
                </Button>
                </Form.Item>
            <Form.Item>
                <Link to="/login"> 
                <Button className="block">
                    У меня уже есть аккаунт
                </Button></Link>
            </Form.Item>
        </Form> : 
        <Confirm></Confirm>
        );
    }
}