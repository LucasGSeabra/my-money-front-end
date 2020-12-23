import React from 'react' 
import styled from 'styled-components'
import { Table, Button } from 'react-bootstrap'
import Input from '../Input'
import { Remove } from '@styled-icons/ionicons-outline'
import { arrayInsert, arrayRemove } from 'redux-form'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const RemoveIcon = styled(Remove)`
    width: 16px;
    height: 16px;  
    color: #fff
`

function BillingDetails(props){

    const detailsList = props.detailsList || []

    const title = props.type === 'credits' ? 'Créditos' : 'Débitos'

    function addItem(){
        props.arrayInsert('billingCycleForm', props.type, detailsList.length + 1, {})
    }
    return (
        <div>
            <h5>{title}</h5>
            <Table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Valor</th>
                        { props.type === 'debts' &&
                            <th>Status</th>
                        }
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                   { detailsList.map((item, index) => (
                       <tr key={index}>
                            <td><Input name={`${props.type}[${index}].name`} placeholder="Nome" /></td>
                            <td><Input name={`${props.type}[${index}].value`} placeholder="Valor" /></td>
                            { props.type === 'debts' &&
                                <td><Input name={`${props.type}[${index}].status`} placeholder="Status" /></td>
                            }
                            <td>
                                <Button variant="danger" onClick={() => removeItem(index)}><RemoveIcon/></Button>
                            </td>
                       </tr>
                   ))}                    
                </tbody>
                <tfoot>
                    <Button variant="success" onClick={() => addItem()}>Adicionar {title}</Button>
                </tfoot>
            </Table>
        </div>
    )
}

const mapDispatchToProps = dispatch => bindActionCreators({arrayInsert, arrayRemove}, dispatch)
export default connect(null, mapDispatchToProps)(BillingDetails)