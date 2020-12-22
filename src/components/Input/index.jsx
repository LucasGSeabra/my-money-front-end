import React from 'react'
import { Form } from 'react-bootstrap'
import { Field } from 'redux-form'

const ReduxFormControl = ({input, meta, ...props}) => {
    return <Form.Control {...props} {...input} />
};

function Input(props){
    return(
        <Field name={props.name} 
            component={ReduxFormControl} 
            readOnly={props.readOnly} 
            placeholder={props.placeholder} 
        />
    )
}

export default Input