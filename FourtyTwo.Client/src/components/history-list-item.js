import {ListItem} from 'material-ui/lib/lists';
import FontIcon from 'material-ui/lib/font-icon';
import { grey700 } from 'material-ui/lib/styles/colors';
import React from 'react';
import moment from 'moment';


class HistoryListItem extends React.Component {
  componentWillMount() {
    console.log(this.props);
    this.style = {
      display: 'inline-block'
    }
  }

  getScoreClass() {
    if(this.props.exercise.scoreArrow === 0) return 'arrow fa fa-circle';
    if(this.props.exercise.scoreArrow === 1) return 'arrow fa fa-caret-up';
    if(this.props.exercise.scoreArrow === 2) return 'arrow fa fa-caret-down';
  }

  getAccuracyClass() {
    if(this.props.exercise.accuracyArrow === 0) return 'arrow fa fa-circle';
    if(this.props.exercise.accuracyArrow === 1) return 'arrow fa fa-caret-up';
    if(this.props.exercise.accuracyArrow === 2) return 'arrow fa fa-caret-down';
  }


  render() {
    return(
      <div className="history-list-item"
        onClick={() => this.props.handleExerciseClicked(this.props.exercise)}
        style={{color: grey700}}>

            <div className="hli-left">
              <div className="hli-title">
                {moment(this.props.exercise.timeStamp).format("dddd, D.M. [at] HH:mm")}
              </div>
            </div>
            <div className="hli-right">
              <div className="hli-qpm">{this.props.exercise.score + ' qpm'}</div>
              <span className={this.getScoreClass()}></span>
              <div className="hli-accuracy">{this.props.exercise.accuracy + '%'}</div>
              <span className={this.getAccuracyClass()}></span>
            </div>

      </div>
    );
  }

}

export default HistoryListItem;
