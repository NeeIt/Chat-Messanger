import React from 'react';
import { Form, Icon, Input, Checkbox } from 'antd';
import Button from 'components/Button';
import { Link } from 'react-router-dom';

export default class LoginForm extends React.Component{
    render(){
        return(
            <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
                <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="Логин" size="large"
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
                <Checkbox>Запомнить меня</Checkbox>
                <a className="login-form-forgot" href="">
                    Забыли пароль?
                </a>
                <Button type="primary" className="button--large block">
                    Войти в аккаунт
                </Button>
                Или <Link to="/register">Зарегестрируйтесь сейчас!</Link>
            </Form.Item>
        </Form>
        )
    }
}