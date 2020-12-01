import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { reduxForm, Field } from 'redux-form'

function FormComponent() {
    return (
        <div>
            <Form>
                <Field name="name" component="input"/>
                <Field name="month" component="input"/>
                <Field name="year" component="input"/>
                <Button variant="primary" type="submit">Salvar</Button>
            </Form>
        </div>
    )
}

export default reduxForm({form: 'FormComponent'})(FormComponent)