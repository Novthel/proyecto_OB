import React from 'react';
import { Formik, Field, Form } from 'formik';
import { LEVELS } from '../../../models/levels.enum';


const TaskFormik = () => {
    return (
        <div>
            <Formik initialValues={{
            name: '',
            description: '',
            level: LEVELS.NORMAL,
            }}
            onSubmit={async (values) => {
                await new Promise((r) => setTimeout(r, 500));
                alert(JSON.stringify(values, null, 2));
            }}>
                <Form>
                    <label htmlFor="name">Name</label>
                    <Field id="name" name="name" placeholder="Add task" />

                    <label htmlFor="description">Last Name</label>
                    <Field id="description" name="description" placeholder="Add description" />

                    <label htmlFor="email">Email</label>
                    <Field
                    id="email"
                    name="email"
                    placeholder="jane@acme.com"
                    type="email"
                    />
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
            
        </div>
    );
}

export default TaskFormik;
