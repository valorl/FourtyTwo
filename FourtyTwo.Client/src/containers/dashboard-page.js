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

import HistoryList from '../components/history-list';
import DetailsTable from '../components/details-table';


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
    console.log(this.props);
  }

  handleExerciseClicked(exercise) {
    console.log(this);
    console.log('exercise clicked ' + exercise.id);
    this.props.storeCurrentExercise(exercise);
  }

  render() {
    const { exercises, currentExercise } = this.props;
    return (
      <div className="dashboard-container container-fluid">
        <div className="col-sm-6 card">
          <HistoryList exercises={exercises}
            handleExerciseClicked={this.handleExerciseClicked}/>
        </div>
        <div className="col-sm-6 card">
          <DetailsTable
            questions={currentExercise ? currentExercise.questions : null} />
        </div>
        <FloatingActionButton
          backgroundColor={red600}
          style={this.state.styles.fab}
          onClick={() =>{
          }}>
          <PlayArrow />
        </FloatingActionButton>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
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
