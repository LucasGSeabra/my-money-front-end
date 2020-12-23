import React from 'react'
import styled from 'styled-components'
import { Form, Button, Col } from 'react-bootstrap'
import { reduxForm, formValueSelector } from 'redux-form'
import Input from '../Input'
import BillingDetails from '../BillingDetails'
import { bindActionCreators} from 'redux'
import { connect } from 'react-redux'

const FormContainer = styled(Form)`
    width: 100%;
    height: 100%;
    padding 15px 15px 10px 15px ;
`

function BillingCycleForm(props) {
    
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
                        <Col lg={4} sm={12}>
                            <Form.Label>Nome</Form.Label>
                            <Input name="name" readOnly={props.readOnly} />
                        </Col>
                        <Col lg={4} sm={12}>
                            <Form.Label>Mês</Form.Label>
                            <Input name="month" readOnly={props.readOnly} />
                        </Col>
                        <Col lg={4} sm={12}>
                            <Form.Label>Ano</Form.Label>
                            <Input name="year" readOnly={props.readOnly} />
                        </Col>  
                    </Form.Row>
                    <Form.Row>
                        <Col lg={6} sm={12}>
                            <BillingDetails detailsList={props.credits} type="credits" />
                        </Col>
                        <Col lg={6} sm={12}>
                            <BillingDetails detailsList={props.debts} type="debts" />
                        </Col>
                    </Form.Row>
                </Form.Group>
                <Button variant={variant} type="submit">{ props.buttonTitle }</Button>
            </FormContainer>
        </div>
    )
}

BillingCycleForm = reduxForm({form: 'billingCycleForm', destroyOnUnmount: false })(BillingCycleForm)
const selector = formValueSelector('billingCycleForm')
const mapStateToProps = state => ({credits: selector(state, 'credits'), debts: selector(state, 'debts')})
export default connect(mapStateToProps)(BillingCycleForm)