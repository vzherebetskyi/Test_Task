import React from 'react';
import { connect } from 'react-redux';

import { inputData, handleInFocus } from '../actions/cellActions';

const Cell = (props) => {
 return (
    <div>
        <input type = 'text' value = { 
            props.input.dataType === 'funds' ?
        `${props.input.data.slice(0,3)} ${props.input.data.slice(3, props.input.data.length).replace(/\s/gi,'').replace(/\B(?=(\d{3})+(?!\d))/g, " ")
        }`
        : 
        props.input.data 
        } 
        onChange = {(e) => {
            props.dispatch(inputData(e.target.value, props.l, props.c))
        }}
        onClick = {() => { props.dispatch(handleInFocus(props.l, props.c)) } }
        />
    </div>
    );
};

const connectedCell = (state, props) => {
    return{
        input: state.find((cell) => 
            cell.lineNumber === props.l && cell.columnNumber === props.c
        )   
    };
};

export default connect(connectedCell)(Cell);
