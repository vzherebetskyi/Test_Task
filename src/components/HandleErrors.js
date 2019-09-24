import React from 'react';
import { connect } from 'react-redux';

const anError = (props) => {
    return(
        <div>
            <p style = {{ color: 'red' }}>{ props.inError ? props.inError : undefined }</p>
        </div>
    );
};

const connectedError = (state) => {
    return{
        inError: state[0].error ? state[0].error : undefined 
    };
};

export default connect(connectedError)(anError);