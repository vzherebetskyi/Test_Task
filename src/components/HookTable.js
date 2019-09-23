import React, { useState } from 'react';
import { connect } from 'react-redux';

import { LINES, COLUMNS } from '../utils/constants';
import Cell from './Cell';
import InfoLine from './InformationLine';
import AnError from './HandleErrors';
import { addCell } from '../actions/cellActions';

function HookTable(props)  {
//l stands for lines and c stands for columns
        let l = LINES;
        let table = [];
//this while is used for the table generation with pre-defined lines and columns
         while (l > 0) {
            table.push([]);
            let c = COLUMNS;
            while (c > 0){
                table[table.length-1].push(c);
// a function for setting the cell coordinates in a store
                props.dispatch(addCell( { lineNumber: l, columnNumber: c } ));
                c--;
            }
            l--;
        };
       
        const [newTable] = useState(table);
        
        return(
        <section>
            <div>
                <table>
                    {newTable.map((elem, j) =>
                        <tr key = {j}>
                            {   
                                newTable[j].map((elem, i) =>
                                 <th key = {i}>
                                    <Cell 
                                    l = { j + 1 }
                                    c = { i + 1 }
                                    />                                
                                </th>
                                )
                            }
                    </tr>
                    )}
                </table>
            </div>
             <div>
                 <AnError />
                 <InfoLine />
            </div>
            <div style = {{marginTop: '10%'}}>
                <h2>Some instructions</h2>
                <p>1. You can use the following instructions: =SUM(), =AVERAGE(), =CONCAT(), =HYPERLINK()</p>
        <p>2. In order to use them you shoul write in the cell something like =SUM(line number 1, column number 1; line number 2, column number 2...). <br/>
           For instance this =SUM(1,1;1,2;1,3) stands for adding data in the first, second and third cells. <br/>
           The same works for =AVERAGE() and =CONCAT(). To test if entered data is a link you just <br/> 
           need to enter in the instruction =HYPERLINK(data) where 'data' is the link you want to test<br/>
           So, you just need to copy past your link into the instruction.</p>
           <p>3. There are also special requirements for entering funds. There are four types of funds <br/>
           UAH, USD, EUR and GBP. So, to be considered as funds you need to enter something like this:<br/>
           NAME_OF_CURRENCY and amount - USD2000 or EUR 55000. You can enter some numbers after dot but their<br/>
           length is limited to 2. So, this is considered as funds - USD 2000.55 and this is considered as string - USD 2000.555</p>
            </div>
        </section>       
        );
};

export default connect()(HookTable);