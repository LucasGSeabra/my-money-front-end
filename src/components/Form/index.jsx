import React from 'react'
import styled from 'styled-components'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { reduxForm, Field } from 'redux-form'

const FormContainer = styled(Form)`
    width: 100%;
    height: 100%;
    padding 15px 0px 10px 15px ;
`

function FormComponent(props) {
    return (
        <div>
            <FormContainer onSubmit={(e) => props.handleSubmit(e)}>
                <Form.Group>
                    <Form.Row>
                        <Col lg={3} sm={12}>
                            <Form.Label>Nome</Form.Label>
                            <Field name="name" component={Form.Control}/>
                        </Col>
                        <Col lg={3} sm={12}>
                            <Form.Label>Mês</Form.Label>
                            <Field name="month" component={Form.Control}/>
                        </Col>
                        <Col lg={3} sm={12}>
                            <Form.Label>Ano</Form.Label>
                            <Field name="year" component={Form.Control}/>
                        </Col>  
                    </Form.Row>
                </Form.Group>
                <Button variant="primary" type="submit">Salvar</Button>
            </FormContainer>
        </div>
    )
}

export default reduxForm({form: 'FormComponent'})(FormComponent)