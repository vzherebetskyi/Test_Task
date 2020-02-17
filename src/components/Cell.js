import React from 'react';
import { connect } from 'react-redux';

import { handleInput, handleInFocus, handleLinkValidation, handleAve, handleConcat, handleSum } from '../actions/cellActions';
import { NUMB_REGEX, URL_REGEX, FUNDS_REGEX, SUM_REGEX, AVE_REGEX, CONCAT_REGEX, HYPER_REGEX } from '../utils/constants';
import getRightData from '../utils/handleMathActions';

const Cell = ({ dispatch, input, l, c }) => {
  const inputData = (data, l, c) => {
    if (HYPER_REGEX.test(data)) {
      URL_REGEX.test(data.slice(11,-1)) ? dispatch(handleLinkValidation('string', 'link is valid', l, c)) : 
      dispatch(handleLinkValidation('string', 'link is not valid', l, c));
    } else if (CONCAT_REGEX.test(data)) {
      let answer = getRightData(data, 'concat');
      if (answer === 'outside of range') {
        dispatch(handleInput(answer, 'CONCAT', l, c));
      } else dispatch(handleConcat(answer[0], answer[1], 'CONCAT', l, c));
    } else if (AVE_REGEX.test(data)) {
      let answer = getRightData(data, 'average');
      if (answer === 'outside of range') {
        dispatch(handleInput(answer, 'AVERAGE', l, c));
      } else dispatch(handleAve(answer[0], answer[1], 'AVERAGE', l, c));
    }
    else if (SUM_REGEX.test(data)) {
      let answer = getRightData(data, 'sum');
      if (answer === 'outside of range') {
        dispatch(handleInput(answer, 'SUM', l, c));
      } else dispatch(handleSum(answer[0], answer[1], 'SUM', l, c));
    } else if (URL_REGEX.test(data)) {
      dispatch(handleInput(data, 'hyperlink', l, c));
    } else if (FUNDS_REGEX.test(data.replace(/\s/gi, ''))) {
      dispatch(handleInput(data, 'funds', l, c));
    } else if (data.search(NUMB_REGEX) !== -1) {
      dispatch(handleInput(data, 'number', l, c));
    } else typeof data === 'string' ? dispatch(handleInput(data, 'string', l, c)) : undefined;
  };

  return (
    <div>
      <input
        type="text"
        value={
            input.dataType === 'funds'
              ? `${input.data.slice(0, 3)} ${input.data.slice(3, input.data.length).replace(/\s/gi, '').replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
              }`
              : input.data
        }
        onChange={(e) => {
          dispatch(inputData(e.target.value, l, c));
        }}
        onClick={() => { dispatch(handleInFocus(l, c)); }}
      />
    </div>
  );
};

const connectedCell = (state, props) => {
  return {
    input: state.find((cell) => cell.lineNumber === props.l && cell.columnNumber === props.c),
  };
};

export default connect(connectedCell)(Cell);
