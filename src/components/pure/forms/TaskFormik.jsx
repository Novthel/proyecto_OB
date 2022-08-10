import React from 'react'
import { Formik , Form , Field , ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { LEVELS } from '../../../models/levels.enum'


const taskSchema = Yup.object().shape(
    {
        name : Yup.string()
                .required('name is required'),
        description : Yup.string()
                .required('Description is required')
                .max(200, 'Description too long'),
        completed : Yup.bool()
                .required('Description is required'),
        level : Yup.string().oneOf([LEVELS.NORMAL,LEVELS.URGENT,LEVELS.BLOCKING], 'Select level of your task')     
                .required('level is required'),    
    }
)


export default function TaskFormik({ add }) {

    const newTask = {
        name :'',
        description : '',
        completed : false,
        level : LEVELS.NORMAL
    }

  return (
    <div>
        <Formik
                initialValues = { newTask }
                validationSchema = { taskSchema }
                onSubmit={ (values, actions ) => {
                    setTimeout(()=>{
                        add(values)
                        actions.resetForm({})
                    },500)    
                }}
            >

                {({ errors, touched, isSubmitting }) => (
                    <Form>
                        
                        <label htmlFor="name">Name</label>
                        <Field id="username"  type="text" name="name" placeholder="Your name" />
                        <ErrorMessage name="name" component='div' />

                        <label htmlFor="description">Description</label>
                        <Field id="description"  type="text" name="description" placeholder="Description" />
                        <ErrorMessage name="description" component='div' />
    
                        <Field as='select' id="select" name="select">
                            <option value={LEVELS.NORMAL}>Normal</option>
                            <option value={LEVELS.URGENT}>Urgent</option>
                            <option value={LEVELS.BLOCKING}>Blocking</option>
                        </Field>
                        <ErrorMessage name="select" component='div' />

                        
                        <button type="submit">Add Task</button>
                        { isSubmitting ? (<p>Sending your Task...</p>) : null }
                    </Form>

                )}

            </Formik>
    </div>
  )
}
