import React, {useState} from "react";
import {Button, Form, Icon, Input, message} from "antd";
import Http from "../../../utils/Http";
import style from './styles.module.scss';
import {TOKEN, USER_ID} from "../../../utils/constants";

function LoginForm(props) {
    const {getFieldDecorator} = props.form;
    const [loading, setLoading] = useState(false);

    const handleLogin = async (event) => {
        event.preventDefault();
        let values;
        try {
            values = await props.form.validateFields();
        } catch (e) {
            console.error(e);
            return;
        }
        setLoading(true);
        try {
            const {data} = await Http.post('/admins/login', {
                email: values.email,
                password: values.password
            });
            localStorage.setItem(TOKEN, data.token);
            localStorage.setItem(USER_ID, data._id);
            setLoading(false);
            props.loggedInSuccessfully()
        } catch (e) {
            message.error('Invalid Credentials');
            setLoading(false);
        }
    };


    return (
        <Form onSubmit={handleLogin} className={style['login-form']}>
            <h1>Admin Login</h1>
            <Form.Item>
                {getFieldDecorator('email', {
                    rules: [
                        {required: true, type: 'email', message: 'Please enter valid email'}
                    ],
                })(
                    <Input
                        prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                        placeholder="Username"
                    />,
                )}
            </Form.Item>
            <Form.Item>
                {getFieldDecorator('password', {
                    rules: [{required: true, message: 'Please input your Password!'}],
                })(
                    <Input
                        prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                        type="password"
                        placeholder="Password"
                    />,
                )}
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" className={style['login-form-button']} loading={loading}>
                    Log in
                </Button>
            </Form.Item>
        </Form>
    )
}

// LoginForm.propTypes = {
//     loggedInSuccessfully: React.propTypes.element.isRequired
// };

export default Form.create({name: 'admin_login'})(LoginForm);