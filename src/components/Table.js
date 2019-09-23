import React from 'react';
import { connect } from 'react-redux';

import { LINES, COLUMNS } from '../utils/constants';
import Cell from './Cell';
import InfoLine from './InformationLine';
import AnError from './HandleErrors';
import { addCell } from '../actions/cellActions';

class Table extends React.Component {
    constructor(props) {
        super(props);
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
                this.props.dispatch(addCell( { lineNumber: l, columnNumber: c } ));
                c--;
            }
            l--;
        };
       
        this.state = {
            table
        };
    }

    render(){
        return(
        <section>
            <div>
                <table>
                    {this.state.table.map((elem, j) =>
                        <tr key = {j}>
                            {   
                                this.state.table[j].map((elem, i) =>
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
        </section>       
        );
    }
};

const connectedTable = (state) => {
    return{
        cells: state.cells   
    };
};

export default connect(connectedTable)(Table);