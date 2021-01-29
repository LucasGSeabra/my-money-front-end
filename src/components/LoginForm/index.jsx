import React, { useState } from 'react'
import styled from 'styled-components'
import { Form, Button } from 'react-bootstrap'

const FormContainer = styled(Form)`
    width: 30%;
    margin: 10% 35%;
    padding: 2% 4%;
    border: solid;
    border-radius: 20px;
`
const ChangeContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
`
const ConfirmButton = styled(Button)`
    width: 100%;    
`
const ChangeButton = styled(Button)`
    padding: 0;
    margin-left: 2px;
`
const ChangeText = styled.p`
    margin: 0
`

function LoginForm(props) {
    const [changeFormToSignUp, setChangeFormToSignUp] = useState(false)
    const formTitle = changeFormToSignUp ? 'Cadastre-se' : 'Entrar'
    const confirmButtonText = changeFormToSignUp ? 'Cadastrar' : 'Entrar'
    const changeButtonText = changeFormToSignUp ? 'Entrar' : 'Cadastre-se'
    const changeTextContent = changeFormToSignUp ? 'Já é cadastrado?' : 'Não é cadastrado?'  

    return (
        <FormContainer onSubmit={(e) => handleSubmit(e)}>
            <h3>{formTitle}</h3>
            {changeFormToSignUp && 
                <Form.Group>
                    <Form.Label>Nome</Form.Label>
                    <Form.Control name="name" placeholder="Digite seu nome" />
                </Form.Group>
            }
            <Form.Group>
                <Form.Label>E-Mail</Form.Label>
                <Form.Control name="email" placeholder="Digite seu e-mail" />
            </Form.Group>
            <Form.Group>
                <Form.Label>Senha</Form.Label>
                <Form.Control type="password" name="password" placeholder="Digite sua senha" />
            </Form.Group>
            {changeFormToSignUp && 
                <Form.Group>
                    <Form.Label>Cofirmar Senha</Form.Label>
                    <Form.Control type="password" name="confirmPassword" placeholder="Confirme sua senha" />
                </Form.Group>
            }
            <ConfirmButton variant="dark" type="submit">{confirmButtonText}</ConfirmButton>
            <ChangeContainer>
                <ChangeText>{changeTextContent}</ChangeText>
                <ChangeButton 
                    variant="link"
                    onClick={() => setChangeFormToSignUp(!changeFormToSignUp)}
                >
                    {changeButtonText}
                </ChangeButton>
            </ChangeContainer>
        </FormContainer>
    )
}

export default LoginForm