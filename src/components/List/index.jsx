import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Table, Button } from 'react-bootstrap'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getList, initializeForm } from '../../pages/BillingCycle/billingCycleActions'
import { Pencil, TrashBin } from '@styled-icons/ionicons-outline'

const PencilIcon = styled(Pencil)`
    width: 16px;
    height: 16px;  
    color: #fff
`

const TrashIcon = styled(TrashBin)`
    width: 16px;
    height: 16px;  
    color: #fff
`
const ListButton = styled(Button)`
    margin-right: 5px;
`

function List(props) {

    const list = props.list || []

    function editBillingCycle(billingCycle, tab) {
        props.changeTab(tab)
        props.initializeForm(billingCycle)     
    }

    useEffect(() => {
        props.getList()
    }, []) 

    return(
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Mês</th>
                        <th>Ano</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    { list.map(bc => (
                        <tr key={bc._id}>
                            <td>{bc.name}</td>
                            <td>{bc.month}</td>
                            <td>{bc.year}</td>
                            <td><ListButton variant="warning" onClick={() => editBillingCycle(bc, 3)}>
                                <PencilIcon></PencilIcon>
                                </ListButton>
                                <ListButton variant="danger" onClick={() => editBillingCycle(bc, 4)}>
                                <TrashIcon></TrashIcon>
                                </ListButton>
                            </td>
                        </tr>
                    )) }
                </tbody>
            </Table>
        </div>
    )
}

const mapStateToProps = state => ({ list: state.billingCycle.list })
const mapDispatchToProps = dispatch => bindActionCreators({ getList, initializeForm }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(List)