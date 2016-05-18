import React from 'react';
import Paper from 'material-ui/lib/paper';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';

import Colors from 'material-ui/lib/styles/colors';
import ScheduleIcon from 'material-ui/lib/svg-icons/action/schedule';
import AccuracyIcon from 'material-ui/lib/svg-icons/device/gps-fixed';
import CompletedIcon from 'material-ui/lib/svg-icons/action/assessment';
import IncorrectIcon from 'material-ui/lib/svg-icons/content/clear';





class QuestionStatsPanel extends React.Component {

  componentWillMount() {
    this.styles = {
      mainPaper: {
        height: 250,
        width: '100%',
     //    maxWidth: '100%',
        padding: 20,
        display: 'inline-block',
        textAlign: 'center',
        verticalAlign: 'middle'
      },
      icon: {
        height: '80%',
        width: 'auto',
        margin: 5
      },
      listItem: {
        color: Colors.blueGrey800,
        fontSize: 30,
        fontFamily: 'Comfortaa,Roboto',
        fontStretch: 'expanded'
      }
    };
  }

  render() {
    return (
      	<div className="question-stats-panel-container">
      		<Paper style={this.styles.mainPaper} zDepth={1}>
  	    		{/*<table className="question-stats-panel-table" border="0">
              <tbody>
                <tr>
                  <td className="table-icon" ><ScheduleIcon style={this.styles.icon}></ScheduleIcon></td>
                  <td className="table-text">{this.props.timeLeft || '00:15'}</td>
                </tr>
                <tr>
                  <td className="table-icon"><ScheduleIcon style={this.styles.icon}></ScheduleIcon></td>
                  <td className="table-text">{this.props.timeLeft || '00:15'}</td>
                </tr>
                <tr>
                  <td className="table-icon"><ScheduleIcon style={this.styles.icon}></ScheduleIcon></td>
                  <td className="table-text">{this.props.timeLeft || '00:15'}</td>
                </tr>
                <tr>
                  <td className="table-icon"><AccuracyIcon style={this.styles.icon}></AccuracyIcon></td>
                  <td className="table-text">{this.props.accuracy || '95%'}</td>
                </tr>

              </tbody>
            </table>*/}
            <List>
              <ListItem 
                style={this.styles.listItem} 
                primaryText={`${this.props.timeLeft.minutes}:${this.props.timeLeft.seconds}`} 
                leftIcon={
                  <ScheduleIcon style={this.styles.icon} color={Colors.blueGrey700}/>
                } />
              <ListItem 
                style={this.styles.listItem} 
                primaryText={String(this.props.answeredCount)} 
                leftIcon={
                  <CompletedIcon style={this.styles.icon} color={Colors.blue700}/>
                } />
              <ListItem 
                style={this.styles.listItem} 
                primaryText={String(this.props.incorrectCount)} 
                leftIcon={
                  <IncorrectIcon style={this.styles.icon}color={Colors.red700}/>
                } />
              <ListItem 
                style={this.styles.listItem} 
                primaryText={(this.props.accuracy > -1 ? this.props.accuracy + '%' : '-') } 
                leftIcon={
                  <AccuracyIcon style={this.styles.icon} color={Colors.blueGrey700}/>
                } />
            </List>
      		</Paper>
      	</div>

    );
  }
}

export default QuestionStatsPanel;



