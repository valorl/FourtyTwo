import React from 'react';
import {Card, CardTitle, CardText} from 'material-ui/lib/card';

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
    const list = this.renderList();

    return(
      <Card cssClass="card-root">
        <CardTitle title="Practice history" />
        <CardText className="card-content" style={{padding: 10, maxHeight: 500}}>
          {list}
        </CardText>
      </Card>
    );
  }
}

export default HistoryList;
