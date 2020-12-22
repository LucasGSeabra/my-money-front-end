import React from 'react'
import styled from 'styled-components'
import { Form, Button, Col } from 'react-bootstrap'

const FormContainer = styled(Form)`
    width: 100%;
    height: 100%;
`

    
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
                            <Form.Label>Nome</Form.Label>
                        </Col>
                            <Form.Label>Mês</Form.Label>
                        </Col>
                            <Form.Label>Ano</Form.Label>
                        </Col>
                    </Form.Row>
                </Form.Group>
                <Button variant={variant} type="submit">{ props.buttonTitle }</Button>
            </FormContainer>
        </div>
    )
}

