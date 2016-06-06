import React from 'react';
import {Card, CardTitle, CardText} from 'material-ui/lib/card';
import {Table, TableRow, TableRowColumn,
  TableHeader, TableHeaderColumn, TableBody} from 'material-ui/lib/table';
import Play42 from '../utils/play42-helper.js';
import Correct from 'material-ui/lib/svg-icons/action/done';
import Incorrect from 'material-ui/lib/svg-icons/navigation/close';
import {red600, green600, grey600} from 'material-ui/lib/styles/colors';


class DetailsTable extends React.Component {

  renderRows() {
    return this.props.questions.map(q => {
      return (
        <TableRow key={Math.random(0,100)*100}>
          <TableRowColumn>
            {
              Play42.evaluateQuestion(q) ?
              <Correct color={green600}/> : <Incorrect color={red600}/>
            }
          </TableRowColumn>
          <TableRowColumn>
            {`${q.numbers[0]} ${q.operation.sign} ${q.numbers[1]}`}
          </TableRowColumn>
          <TableRowColumn>
            {q.answer}
          </TableRowColumn>
        </TableRow>
      );
    });
  }

  render() {
    const rows = this.props.questions ? this.renderRows() : null;

    return(
      <Card cssClass="card-root" zDepth={1}>
        {/*<CardTitle title="Details" />*/}
        { rows ?
          <CardText className="card-content"
            style={{padding: '0 10px'}}>
              <Table
                className="details-table"
                selectable={false}
                fixedHeader={true}
                height="350">
                <TableHeader
                  displaySelectAll={false}
                  adjustForCheckbox={false}>
                  <TableRow>
                    <TableHeaderColumn></TableHeaderColumn>
                    <TableHeaderColumn>Question</TableHeaderColumn>
                    <TableHeaderColumn>Answer</TableHeaderColumn>
                  </TableRow>
                </TableHeader>
                <TableBody
                  displayRowCheckbox={false}
                  showRowHover={true}>
                  {rows}
                </TableBody>
              </Table>
          </CardText>
          :
          <CardText
            className="card-content"
            style={{
              width: '100%',
              display: 'table',
              textAlign: 'center',
              padding: 10,
              height: 400,
              maxHeight: 400}}>
            <div
              style= {{
                display: 'table-cell',
                verticalAlign: 'middle',
                color: grey600
              }}>
              <i>Please select a practice from 'Practice History'.</i>
            </div>
          </CardText>
        }

      }
      </Card>
    );
  }
}

export default DetailsTable;
