import {
  ADD_CELL, INPUT_DATA, HANDLE_SUM, HANDLE_AVE, HANDLE_CONCAT, HANDLE_LINKV, HANDLE_FOCUS,
} from './action_types';

// add cell coordinates

export const addCell = (
  {
    lineNumber = 0,
    columnNumber = 0,
  } = {},
) => ({
  type: ADD_CELL,
  cell: {
    lineNumber,
    columnNumber,
    dataType: undefined,
    data: undefined,
  },
});

// action just for inputting

export const handleInput = (data, dataType, lineNumber, columnNumber) => ({
  type: INPUT_DATA,
  data,
  dataType,
  lineNumber,
  columnNumber,
});

// action for the sum

export const handleSum = (linesArray, columnsArray, dataType, lineNumber, columnNumber) => ({
  type: HANDLE_SUM,
  linesArray,
  columnsArray,
  dataType,
  lineNumber,
  columnNumber,
});

// action for getting average

export const handleAve = (linesArray, columnsArray, dataType, lineNumber, columnNumber) => ({
  type: HANDLE_AVE,
  linesArray,
  columnsArray,
  dataType,
  lineNumber,
  columnNumber,
});

// action for strings concatenation

export const handleConcat = (linesArray, columnsArray, dataType, lineNumber, columnNumber) => ({
  type: HANDLE_CONCAT,
  linesArray,
  columnsArray,
  dataType,
  lineNumber,
  columnNumber,
});

// action for hyperlinks validation

export const handleLinkValidation = (dataType, validity, lineNumber, columnNumber) => ({
  type: HANDLE_LINKV,
  dataType,
  validity,
  lineNumber,
  columnNumber,
});

// action for infocus

export const handleInFocus = (lineNumber, columnNumber) => ({
  type: HANDLE_FOCUS,
  lineNumber,
  columnNumber,
});
