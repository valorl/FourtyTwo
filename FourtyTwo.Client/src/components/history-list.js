import React from 'react';
import {Card, CardTitle, CardText} from 'material-ui/lib/card';
import { grey600 } from 'material-ui/lib/styles/colors';
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
      <Card cssClass="card-root">
        <CardTitle title="Practice history" />
        { list ?
          <CardText
            className="card-content"
            style={{padding: 10, height: 300, maxHeight: 400}}>
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
              height: 300,
              maxHeight: 400}}>
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
