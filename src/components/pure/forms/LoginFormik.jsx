import React from 'react'
import { Formik , Form , Field , ErrorMessage } from 'formik'
import * as Yup from 'yup'


const loginSchema = Yup.object().shape(

    {
        email: Yup.string()
                .email('Invalid email format')
                .required('email is required'),
        password: Yup.string()
                .required('Password is required')
    }
)



export default function LoginFormik() {

    const initialCredentials = {
            email:'',
            password:''
        }

    return (
        <div>
            <h4>Login</h4>
            <Formik 
                // ** Initial values  that the from will take **
                initialValues = { initialCredentials }
                // ** Yup validation Schema **
                validationSchema = { loginSchema }
                // ** onSubmit event **
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    alert(JSON.stringify(values, null, 2));
                }}
                >

                {({ errors, touched, isSubmitting }) => (
                    <Form>
                        <label htmlFor="email">Email</label>
                        <Field id="email"  type="email" name="email" placeholder="introduzca email" />
                        <ErrorMessage name="email" component='div' />
    
                        <label htmlFor="password">Password</label>
                        <Field id="password"  type="password" name="password" placeholder="Password" />
                        <ErrorMessage name="password" component='div' />
                        
                        <button type="submit">Submit</button>
                        { isSubmitting ? (<p>Login your credentials ...</p>) : null }
                    </Form>

                )}
                
            </Formik>
    
        </div>
    )
}
