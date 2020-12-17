import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Table, Button } from 'react-bootstrap'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getList, initializeForm } from '../../pages/BillingCycle/billingCycleActions'
import { getList } from '../../pages/BillingCycle/billingCycleActions'

function List(props) {

    const list = props.list || []

    function editBillingCycle(billingCycle) {
        props.changeTab(3)
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
                            <td><Button variant="warning" onClick={() => editBillingCycle(bc)}>
                                </Button>
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