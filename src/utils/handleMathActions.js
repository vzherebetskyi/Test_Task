import { LINES, COLUMNS } from './constants';

//function for handling special call (Sum and Average)

export const getRightData = (data, type) => {
    let answer;
    if (type === 'average')
    {
        answer = data.slice(9,-1).split(';');
    }
    else if (type === 'sum') {
        answer = data.slice(5,-1).split(';');
    }
    else if (type === 'concat') {
        answer = data.slice(8,-1).split(';'); 
    }
            let [linesArray, columnsArray] = [[],[]];
            let [i, j] = [0, 0];
            while (i < answer.length) {
                linesArray = linesArray.concat(answer[i].split(',')[0]);
                i++;
            };
            while (j < answer.length) {
                columnsArray = columnsArray.concat(answer[j].split(',')[1]);
                j++;
            };
            
            let errorInAnswer = undefined;
            linesArray.map((number) => (parseInt(number) < 1 || parseInt(number) > LINES) ? errorInAnswer = 'outside of range' : undefined);
            columnsArray.map((number) => (parseInt(number) < 1 || parseInt(number) > COLUMNS) ? errorInAnswer = 'outside of range' : undefined);
    if (errorInAnswer) {
        return errorInAnswer;
    }
    else return [linesArray, columnsArray];
};