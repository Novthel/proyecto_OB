import React from 'react';
import { Formik , Form , Field , ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { User } from '../../../models/user.Class'
import { ROLES } from '../../../models/roles.enum';


const registerSchema = Yup.object().shape(
        
    {
        username: Yup.string()
                .min(6, 'username too short')
                .max(12, 'username too long')
                .required('username is required'),
        email: Yup.string()
                .email('invalid email format')
                .required('email is required'),
        role: Yup.string().oneOf([ROLES.USER, ROLES.ADMIN], 'You must select a Role: User/ Admin')
                .required('role is required'),
        password: Yup.string()
                .min(8, 'password too short')
                .required('Password is required'),
        confirm: Yup.string()
                .when('password', {
                    is: value => value && value.length > 0 ? true : false,
                    then: Yup.string().oneOf(
                        [Yup.ref('password')], '!Password must match'
                    )
                }).required('You must confirm the password')
                
    }

)


const RegisterFormik = () => {

    let user = new User()

    const userData = {

        username : '',
        email: '',
        password: '',
        confirm: '',
        role: ROLES.USER
    }

    return (
        <div>
            <h4>Register</h4>
            <Formik
                initialValues = { userData }
                validationSchema = { registerSchema }
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    alert(JSON.stringify(values, null, 2));
                }}
            >

                {({ errors, touched, isSubmitting }) => (
                    <Form>
                        
                        <label htmlFor="username">username</label>
                        <Field id="username"  type="text" name="username" placeholder="Your username" />
                        <ErrorMessage name="username" component='div' />
    
                        <label htmlFor="email">Email</label>
                        <Field id="email"  type="email" name="email" placeholder="Your email" />
                        <ErrorMessage name="email" component='div' />
    
                        <label htmlFor="password">Password</label>
                        <Field id="password"  type="password" name="password" placeholder="Password" />
                        <ErrorMessage name="password" component='div' />

                        <label htmlFor="confirm">Password</label>
                        <Field id="confirm"  type="password" name="confirm" placeholder="Confirm Password" />
                        <ErrorMessage name="confirm" component='div' />

                        
                        <button type="submit">Register Account</button>
                        { isSubmitting ? (<p>Sending your credentials ...</p>) : null }
                    </Form>

                )}

            </Formik>
        </div>
    );
}

export default RegisterFormik;
