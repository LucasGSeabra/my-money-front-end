import React from 'react' 
import { Table } from 'react-bootstrap'
import Input from '../Input'

function BillingDetails(props){
    return (
        <div>
            <h5>{props.title}</h5>
            <Table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Valor</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <td><Input name="nome" placeholder="Nome" /></td>
                    <td><Input name="valor" placeholder="Valor" /></td>
                </tbody>
            </Table>
        </div>
    )
}

export default BillingDetails