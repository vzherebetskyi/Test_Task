import cellDefaultState from './defaultState';

export default (state = cellDefaultState, action) => {
  switch (action.type) {
    case 'ADD_CELL':
      return [
        ...state,
        action.cell,
      ];
    case 'INPUT_DATA':
      return state.map((cell, i) => 
        cell.lineNumber === action.lineNumber && cell.columnNumber === action.columnNumber ? 
            {...cell, data: action.data, dataType: action.dataType} : cell);
    case 'HANDLE_SUM':
    {
      let [answer, answerType] = [[], []];
      let iterator = state.length - 1;
      while (iterator >= 0) {
        let jiterator = 0;
        while (jiterator < action.linesArray.length) {
          if (state[iterator].lineNumber === parseInt(action.linesArray[jiterator]) && state[iterator].columnNumber === parseInt(action.columnsArray[jiterator])) {
            answerType = answerType.concat(state[iterator].dataType);
            answer = answer.concat(state[iterator].data);
          }
          jiterator += 1;
        }
        iterator -= 1;
      }
      if (answerType[0] === 'number' && answerType.join(' ').match(/number/g).length === answerType.length) {
        answer = answer.reduce((a, b) => parseFloat(a) + parseFloat(b));
        answerType = 'number';
      } else if (answerType[0] === 'funds' && answerType.join(' ').match(/funds/g).length === answerType.length) {
        let [currency, funds] = [[], []];
        let matches = 0;

        answer.map((elem, i) => currency = currency.concat(answer[i].slice(0,3)));
        answer.map((elem,i) => funds = 
          funds.concat(
            parseFloat(answer[i].slice(3, answer[i].length).replace(/\s/gi,'') )
         ));
        currency.map((elem) => currency[0] === elem ? matches++ : undefined);

        if (matches === currency.length) {
          answer = `${currency[0]} ${funds.reduce((a,b) => a + b)}`;
        }
        answerType = 'funds';
      }

      if (answerType === 'number' || answerType === 'funds') {
        return state.map((cell) => cell.lineNumber === action.lineNumber && cell.columnNumber === action.columnNumber ? 
          { ...cell, data: answer, dataType: answerType} : cell );
      } else return state.map((cell, i) => i === 0 ? ({...cell, error: '*There is an error with data types' }) : cell);
    }
    case 'HANDLE_AVE':
      {
        let [answer, answerType] = [ [], [] ];
        let i = state.length - 1;
        while (i >= 0) {
          let j = 0;
          while (j < action.linesArray.length){
            if (state[i].lineNumber === parseInt(action.linesArray[j]) && state[i].columnNumber === parseInt(action.columnsArray[j])) {
              answerType = answerType.concat(state[i].dataType);
              answer = answer.concat(state[i].data);
            }
            j += 1;
        }
          i -= 1;
        }
            if (answerType[0] === 'number' && answerType.join(' ').match(/number/g).length === answerType.length) {
                const quantity = answer.length;
                answer = (answer.reduce((a, b) => parseFloat(a) + parseFloat(b))) / quantity;
                answerType = 'number';
            }
            else if (answerType[0] === 'funds' && answerType.join(' ').match(/funds/g).length === answerType.length) {
                let [currency, funds] = [[], []];
                let matches = 0;

                answer.map((elem, i) => currency = currency.concat(answer[i].slice(0,3)));
                answer.map((elem,i) => funds = funds.concat(
                    parseFloat( answer[i].slice(3, answer[i].length).replace(/\s/gi,'') )                    
                    ));
                currency.map((elem) => currency[0] === elem ? matches++ : undefined);

                if (matches === currency.length){
                answer = `${currency[0]} ${(funds.reduce((a,b) => a + b)) / answerType.length}`;
                }
                answerType = 'funds';
            }
            
            if (answerType === 'number' || answerType === 'funds')
            {
            return state.map((cell) => cell.lineNumber === action.lineNumber && cell.columnNumber === action.columnNumber ? 
            {...cell, data: answer, dataType: answerType} : cell );
            }
            else return state.map((cell, i) => i === 0 ? ({...cell, error: '*There is an error with data types' }) : cell);
        };
        case 'HANDLE_CONCAT':
        {
            let answer = [];
            let i = state.length - 1;
            while(i >= 0){
                let j = 0;
                while (j < action.linesArray.length){
                    if (state[i].lineNumber === parseInt(action.linesArray[j]) && state[i].columnNumber === parseInt(action.columnsArray[j])){
                        answer = answer.concat(state[i].data);
                    }
                    j++;
                }
                i--;
            };            
        return state.map((cell) => cell.lineNumber === action.lineNumber && cell.columnNumber === action.columnNumber ? 
            {...cell, data: answer.join(''), dataType: 'string'} : cell );
        };
        case 'HANDLE_LINKV':
        {
        return state.map((cell) => cell.lineNumber === action.lineNumber && cell.columnNumber === action.columnNumber ? 
        {...cell, data: action.validity, dataType: action.dataType} : cell
        );
        };
        case 'HANDLE_FOCUS':
        return state.map((cell, i) => i === 0 ? ({...cell, error: undefined, focus: [action.lineNumber, action.columnNumber ] }) : cell);
        default: 
         return state;
    }
};
