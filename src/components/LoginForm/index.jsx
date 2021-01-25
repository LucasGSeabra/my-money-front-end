import React from 'react'
import styled from 'styled-components'
import { Form, Button } from 'react-bootstrap'

const FormContainer = styled(Form)`
    width: 30%;
    margin: 10% 35%;
    padding: 4%;
    border: solid;
    border-radius: 4%;
`
const LoginButton = styled(Button)`
    width: 100%;    
`

function LoginForm(props) {
    return (
        <FormContainer>
            <h3>Log in</h3>
            <Form.Group>
                <Form.Label>E-Mail</Form.Label>
                <Form.Control name="email" placeholder="Digite seu e-mail" />
            </Form.Group>
            <Form.Group>
                <Form.Label>Senha</Form.Label>
                <Form.Control type="password" name="senha" placeholder="Digite sua senha" />
            </Form.Group>
            <LoginButton variant="dark" type="submit">Sign In</LoginButton>
        </FormContainer>
    )
}

export default LoginForm