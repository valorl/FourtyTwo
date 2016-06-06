import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import HeaderBar from './header-bar';
import { logout, setIsLoading,
  requestExercises, storeCurrentExercise } from '../actions';
import Paper from 'material-ui/lib/Paper';
import IconButton from 'material-ui/lib/icon-button';
import FloatingActionButton from 'material-ui/lib/floating-action-button';
import PlayArrow from 'material-ui/lib/svg-icons/av/play-arrow';
import { red600 } from 'material-ui/lib/styles/colors';

import moment from 'moment';

import HistoryList from '../components/history-list';
import DetailsTable from '../components/details-table';
import PerformanceChart from '../components/performance-chart';


class DashboardPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      styles: {
        fab: {
          position: 'fixed',
          bottom: 20,
          right: 20
        }
      }
    }

    this.handleExerciseClicked = this.handleExerciseClicked.bind(this);
  }
  componentWillMount() {
    this.props.requestExercises();
  }

  handleExerciseClicked(exercise) {
    this.props.storeCurrentExercise(exercise);
  }

  renderHistory(exercises) {
    return (
      <div className="col-sm-6 card">
        <HistoryList exercises={exercises}
          handleExerciseClicked={this.handleExerciseClicked}/>
      </div>
    );
  }

  renderDetails(currentExercise) {
    return (
      <div className="col-sm-6 card">
        <DetailsTable
          questions={currentExercise ? currentExercise.questions : null} />
      </div>
    );
  }

  render() {
    const { exercises, currentExercise } = this.props;
    return (
      <div className="dashboard-container container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <PerformanceChart exercises={exercises} />
          </div>
        </div>
        <div className="row">
          {this.renderHistory(exercises)}
          {this.renderDetails(currentExercise)}
        </div>
        <FloatingActionButton
          backgroundColor={red600}
          style={this.state.styles.fab}
          onClick={() =>{
            browserHistory.push('/app/play');
          }}>
          <PlayArrow />
        </FloatingActionButton>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    idToken: state.auth.idToken,
    exercises: state.exercise.exercises,
    currentExercise: state.exercise.currentExercise
  };
};

export default connect(mapStateToProps,
  { logout,
    setIsLoading,
    requestExercises,
    storeCurrentExercise
   })(DashboardPage);
