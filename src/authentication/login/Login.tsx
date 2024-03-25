import React from 'react';
import { Formik, Form, Field, ErrorMessage,  useFormik } from 'formik';
import * as Yup from 'yup';
import { log } from 'console';
import { Link } from 'react-router-dom';


const validateLoginForm = Yup.object().shape({
    email: Yup.string()
    .min(4, 'Too short!')
    .max(50, 'Too long!')
    .required('Required'),
    password: Yup.string()
    .min(8, 'Password is too short')
    .max(50, 'Password is too long')
    .required('Required')

})


//TODO validare de parola in yup si cum se pune fieldul de password ???
//TODO ce folosesc pentru CSS
//TODO frameworks de CSS -> daca au commponente daca e usoara integrarea cu UI 
const onSubmitLoginForm = (values:any) => {
    console.log(values);
    
}


const displayLoginForm = (errors: any, touched: any) => {
    return <Form> 
        <label htmlFor='email'>Email</label>
        <Field type="email" name="email"/>
        {touched.email && errors.email && <div>{errors.email}</div>}
        <label htmlFor="password">Password</label>
        <Field name="password"/>
        {touched.password && errors.password && <div>{errors.password}</div>}
        <button type="submit">Login</button>
        </Form>;
    
}

export const Login = () => (
    <div>
        <h1>Login</h1>
        <Formik 
        initialValues={{email:'', password:''}} 
        validationSchema={validateLoginForm}
        onSubmit={(values) => onSubmitLoginForm(values)}>

            {({errors, touched}) => displayLoginForm(errors, touched)}

        </Formik>
        <p>Don't have an account?</p>
        <Link to="/register">Register</Link>
    </div>
)


// private String email;
// private String password;
