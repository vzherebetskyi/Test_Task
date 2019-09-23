import { ADD_CELL, INPUT_DATA, NUMB_REGEX, URL_REGEX, FUNDS_REGEX, SUM_REGEX, HANDLE_SUM, AVE_REGEX, HANDLE_AVE, CONCAT_REGEX, HANDLE_CONCAT, HYPER_REGEX, HANDLE_LINKV, HANDLE_FOCUS } from '../utils/constants';
import { getRightData }  from '../utils/handleMathActions';

//add cell coordinates

export const addCell = (
    {
        lineNumber = 0,
        columnNumber = 0
    } = {}
) => ({
    type: ADD_CELL,
    cell:{
        lineNumber,
        columnNumber,
        dataType: undefined,
        data: undefined
    }
});

//add some data into the store

export const inputData = (data, l, c) => {

    return dispatch =>
    {   
        if (HYPER_REGEX.test(data)) {
            URL_REGEX.test(data.slice(11,-1)) ? dispatch(handleLinkValidation('string', 'link is valid', l, c)) : 
            dispatch(handleLinkValidation('string', 'link is not valid', l, c));
        }
        else if (CONCAT_REGEX.test(data)) {
            let answer = getRightData(data, 'concat');
            if (answer === 'outside of range') {
                 dispatch(handleInput(answer, 'CONCAT', l, c));
            }
            else dispatch(handleConcat(answer[0], answer[1], 'CONCAT', l, c));
        }
        else if (AVE_REGEX.test(data)) {
            let answer = getRightData(data, 'average');
            if (answer === 'outside of range') {
                 dispatch(handleInput(answer, 'AVERAGE', l, c));
            }
            else dispatch(handleAve(answer[0], answer[1], 'AVERAGE', l, c));
        }
        else if (SUM_REGEX.test(data)) {
            let answer = getRightData(data, 'sum');
            console.log(answer);
            if (answer === 'outside of range') {
                 dispatch(handleInput(answer, 'SUM', l, c));
            }
            // else if (l1 === l2 && c1 === c2) {
            //     dispatch(handleInput('cannot add same cell to itself', 'SUM', l, c))  
            // }
            else dispatch(handleSum(answer[0], answer[1], 'SUM', l, c));
        }
        else if (URL_REGEX.test(data)) {
            dispatch(handleInput(data, 'hyperlink', l, c))   
        }
        else if (FUNDS_REGEX.test(data.replace(/\s/gi,''))) {
            console.log(data);
            dispatch(handleInput(data, 'funds', l, c))
        }
        else if (data.search(NUMB_REGEX) !== -1) {
            dispatch(handleInput(data, 'number', l, c))  
        }
        else typeof data === 'string' ? dispatch(handleInput(data, 'string', l, c)) : undefined;
    };
};

//action just for inputting

const handleInput = (data, dataType, lineNumber, columnNumber) => ({
    type: INPUT_DATA,
    data,
    dataType,
    lineNumber,
    columnNumber
});

//action for the sum

const handleSum = (linesArray, columnsArray, dataType, lineNumber, columnNumber) => ({
    type: HANDLE_SUM,
    linesArray,
    columnsArray,
    dataType,
    lineNumber,
    columnNumber    
});

//action for getting average

const handleAve = (linesArray, columnsArray, dataType, lineNumber, columnNumber) => ({
    type: HANDLE_AVE,
    linesArray,
    columnsArray,
    dataType,
    lineNumber,
    columnNumber    
});

//action for strings concatenation

const handleConcat = (linesArray, columnsArray, dataType, lineNumber, columnNumber) => ({
    type: HANDLE_CONCAT,
    linesArray,
    columnsArray,
    dataType,
    lineNumber,
    columnNumber    
});

//action for hyperlinks validation

const handleLinkValidation = (dataType, validity, lineNumber, columnNumber) => ({
    type: HANDLE_LINKV,
    dataType,
    validity,
    lineNumber,
    columnNumber    
});

//action for infocus

export const handleInFocus = (lineNumber, columnNumber) => ({
    type: HANDLE_FOCUS,
    lineNumber,
    columnNumber
});

// =SUM(1,1;1,2;2,1;2,2;2,3