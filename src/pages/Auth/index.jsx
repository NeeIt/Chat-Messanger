import React from 'react';
import './Auth.scss';
import ClassNames from 'classnames';
import WhiteBlock from 'components/WhiteBlock';
import { RegisterForm, LoginForm } from 'modules';
import { Route } from 'react-router-dom';

class Auth extends React.Component {

    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };
    render() {
        return (
            <section className="auth">
                <div className="auth__top">
                    <h2>
                        <Route excact path="/login" render={() => "Вход в аккаунт"} />
                        <Route excact path="/register" render={() => "Регистрация"} />
                    </h2>
                    <p>
                    <Route excact path="/login" render={()=>"Пожалуйста, войтиде в аккаунт"} />
                    <Route excact path="/register" render={()=>"Вам необходимо зарегестрироваться"} />  
                    </p>
                </div>
                <WhiteBlock>
                    <Route excact path="/login" component={LoginForm} />
                    <Route excact path="/register" component={RegisterForm} />
                </WhiteBlock>
            </section>
        );
    }
}
export default Auth;