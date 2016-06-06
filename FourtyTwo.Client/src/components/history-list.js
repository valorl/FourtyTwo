import React from 'react';
import {Card, CardTitle, CardText} from 'material-ui/lib/card';
import { grey600, grey800 } from 'material-ui/lib/styles/colors';
import HistoryListItem from './history-list-item';

class HistoryList extends React.Component {

  renderList() {
    return this.props.exercises.map(ex => {
      return (
        <HistoryListItem
          key={ex.id}
          exercise={ex}
          handleExerciseClicked={this.props.handleExerciseClicked}
        />
      );
    });
  }

  render() {
    const list =
    (this.props.exercises && this.props.exercises.length > 0) ?
      this.renderList()
      : null;

    return(
      <Card cssClass="card-root" zDepth={1}>
        <CardTitle title="Practice history"
          style={{height:50, padding: 10, textAlign: 'center'}}
          titleColor={grey800}/>
        { list ?
          <CardText
            className="card-content"
            style={{padding: 10, height: 350, maxHeight: 350}}>
            {list}
          </CardText>
          :
          <CardText
            className="card-content"
            style={{
              width: '100%',
              display: 'table',
              textAlign: 'center',
              padding: 10,
              height: 350,
              maxHeight: 350}}>
            <div
              style= {{
                display: 'table-cell',
                verticalAlign: 'middle',
                color: grey600
              }}>
              <i>There is currently no practice history for this account.</i>
            </div>
          </CardText>
        }

      </Card>
    );
  }
}

export default HistoryList;
