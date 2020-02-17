import { LINES, COLUMNS } from './constants';

// function for handling special call (Sum and Average)

const getRightData = (data, type) => {
  let answer;
  if (type === 'average') {
    answer = data.slice(9,-1).split(';');
  } else if (type === 'sum') {
    answer = data.slice(5, -1).split(';');
  } else if (type === 'concat') {
    answer = data.slice(8, -1).split(';');
  }
  let [linesArray, columnsArray] = [[], []];
  let [iterator, jiterator] = [0, 0];
  while (iterator < answer.length) {
    linesArray = linesArray.concat(answer[iterator].split(',')[0]);
    iterator += 1;
  }
  while (jiterator < answer.length) {
    columnsArray = columnsArray.concat(answer[jiterator].split(',')[1]);
    jiterator += 1;
  }

  let errorInAnswer;
  linesArray.map((number) => (parseInt(number) < 1 || parseInt(number) > LINES) ? errorInAnswer = 'outside of range' : undefined);
  columnsArray.map((number) => (parseInt(number) < 1 || parseInt(number) > COLUMNS) ? errorInAnswer = 'outside of range' : undefined);
  if (errorInAnswer) {
    return errorInAnswer;
  } else return [linesArray, columnsArray];
};

export default getRightData;
