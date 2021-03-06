import React from 'react';
import { connect } from 'react-redux';

const informationLine = ({ inFocus }) => (
  <div>
    <h2>Information Status:</h2>
    <p>{ inFocus ? `${inFocus.data ? `=${inFocus.dataType.toUpperCase()}(${inFocus.data}) number of the line is: ${inFocus.lineNumber}, number of the column is ${inFocus.columnNumber}` : 'Please enter something'}` : 'Please choose a cell' }</p>
  </div>
);

const connectedInformationLine = (state) => {
  return {
    inFocus: state[0].focus
      ? state.find((cell) => cell.lineNumber === state[0].focus[0]
      && cell.columnNumber === state[0].focus[1])
      : undefined,
  };
};

export default connect(connectedInformationLine)(informationLine);