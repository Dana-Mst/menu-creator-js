import React from 'react';
import { Formik, Form, Field, ErrorMessage,  useFormik } from 'formik';
import * as Yup from 'yup';
import { log } from 'console';
import { Link } from 'react-router-dom';


const validateRegisterForm = Yup.object().shape({
    firstname: Yup.string()
    .min(4, 'Too short!')
    .max(50, 'Too long!')
    .required('Required'),
    lastname: Yup.string()
    .min(4, 'Too short!')
    .max(50, 'Too long!')
    .required('Required'),
    email: Yup.string()
    .min(4, 'Too short!')
    .max(50, 'Too long!')
    .required('Required'),
    password: Yup.string()
    .min(8, 'Password is too short')
    .max(50, 'Password is too long')
    .required('Required')

})



//TODO ce folosesc pentru CSS
//TODO frameworks de CSS -> daca au commponente daca e usoara integrarea cu UI 
const onSubmitLoginForm = (values:any) => {
    console.log(values);
    
}


const displayRegisterForm = (errors: any, touched: any) => {
    return <Form> 
        <label htmlFor='firstname'>First Name</label>
        <Field name="firstname" />
        {touched.firstname && errors.firstname && <div>{errors.firstname}</div>}
        <label htmlFor="lastname">Last Name</label>
        <Field name="lastname" />
        {touched.lastname && errors.lastname && <div>{errors.lastname}</div>}
        <label htmlFor="email">Email</label>
        <Field name="email" label="Email"/>
        {touched.email && errors.email && <div>{errors.email}</div>}
      
        {/* //TODO validare de parola in yup si cum se pune fieldul de password ??? */}
        <label htmlFor="password">Password</label>
        <Field name="password" label="Password"/>
        {touched.password && errors.password && <div>{errors.password}</div>}
        <button type="submit">Register</button>
        </Form>;
    
}

export const Register = () => (
    <div>
        <h1>Register</h1>
        <Formik 
        initialValues={{firstname:'', lastname:'', email:'', password:''}} 
        validationSchema={validateRegisterForm}
        onSubmit={(values) => onSubmitLoginForm(values)}>

            {({errors, touched}) => displayRegisterForm(errors, touched)}

        </Formik>
        <p>Allready have an account?</p>
        <Link to="/login">Login</Link>

    </div>
)

//     String firstname;
// String lastname;
// String email;
// String password;