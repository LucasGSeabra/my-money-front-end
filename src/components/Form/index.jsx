import React from 'react'
import styled from 'styled-components'
import { Form, Button, Col } from 'react-bootstrap'
import { reduxForm, Field } from 'redux-form'

const FormContainer = styled(Form)`
    width: 100%;
    height: 100%;
    padding 15px 0px 10px 15px ;
`

const ReduxFormControl = ({input, meta, ...props}) => {
    return <Form.Control {...props} {...input} />
};

function FormComponent(props) {
    
    const variant = props.buttonTitle === 'Cadastrar'
        ? 'primary'
        : props.buttonTitle === 'Editar'
        ? 'warning'
        : 'danger'  

    return (
        <div>
            <FormContainer onSubmit={(e) => props.handleSubmit(e)}>
                <Form.Group>
                    <Form.Row>
                        <Col lg={3} sm={12}>
                            <Form.Label>Nome</Form.Label>
                            <Field name="name" component={ReduxFormControl} readOnly={props.readOnly} />
                        </Col>
                        <Col lg={3} sm={12}>
                            <Form.Label>Mês</Form.Label>
                            <Field name="month" component={ReduxFormControl} readOnly={props.readOnly} />
                        </Col>
                        <Col lg={3} sm={12}>
                            <Form.Label>Ano</Form.Label>
                            <Field name="year" component={ReduxFormControl} readOnly={props.readOnly} />
                        </Col>  
                    </Form.Row>
                </Form.Group>
                <Button variant={variant} type="submit">{ props.buttonTitle }</Button>
            </FormContainer>
        </div>
    )
}

export default reduxForm({form: 'billingCycleForm', destroyOnUnmount: false })(FormComponent)