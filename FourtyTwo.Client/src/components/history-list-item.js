import {ListItem} from 'material-ui/lib/lists';
import FontIcon from 'material-ui/lib/font-icon';
import React from 'react';
import moment from 'moment';


const HistoryListItem = (props) => {
  console.log(props);
  if(!props) {
    props = {
      title: 'test',
      value: '12341f234f23',
      qpm: 24,
      accuracy: 98
    }
  }

  const style = {
    display: 'inline-block'
  }

  return(
    // <ListItem
    //   primaryText={props.title}
    //   value={props.value}
    //   containerElement={
    //     <div>
    //       <span style={style}>{props.qpm}</span>
    //       <NavigationArrowDropDown style={style}/>
    //       <span style={style}>{props.accuracy}</span>
    //       <NavigationArrowDropUp style={style}/>
    //     </div>
    //   }
    // />
  <div className="history-list-item" onClick={() => props.handleExerciseClicked(props.exercise)}>

        <div className="hli-left">
          <div className="hli-title">
            {moment(props.exercise.timeStamp).format("dddd, D.M. [at] HH:mm")}
          </div>
        </div>
        <div className="hli-right">
          <div className="hli-qpm">{props.exercise.score + ' qpm'}</div>
          <span className="arrow fa fa-caret-up"></span>
          <div className="hli-accuracy">{props.exercise.accuracy + '%'}</div>
          <span className="arrow fa fa-caret-down"></span>
        </div>

  </div>
  );
}

export default HistoryListItem;
