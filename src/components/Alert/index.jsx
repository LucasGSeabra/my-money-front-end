import React from 'react'
import ReduxToastr from 'react-redux-toastr'
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'

function Alert(props) {
    return(
        <ReduxToastr 
            timeOut={4000}
            newsOnTop={false}
            preventDuplicates={true}
            position='top-right'
            transitionIn='fadeIn'
            transitionOut='fadeOut'
            progressBar
        />
    )
}

export default Alert