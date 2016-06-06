import HighChart from 'react-highcharts';
import HighchartsMore from 'highcharts-more'
import hcConfig from '../utils/highcharts-config';
import React from 'react';
import Paper from 'material-ui/lib/Paper';
import moment from 'moment';
import _ from 'lodash';

HighchartsMore(HighChart.Highcharts);

class PerformanceChart extends React.Component {
	render() {
    console.log(this.props);
    const exercises = _.sortBy(this.props.exercises, ex => ex.timeStamp);

    const scores = exercises.map(ex => {
      return ex.score;
    });

    const accuracies = exercises.map(ex => {
      return ex.accuracy;
    });
    console.log({ scores, accuracies });

    const config = {
      ...hcConfig,
      series: [{
        name: 'Score',
        yAxis: 0,
        data: scores
      },
      {
        name: 'Accuracy',
        yAxis: 1,
        data: accuracies
      }]
    }

    console.log(config);

		return (
      <Paper rounded={true} style={{marginBottom: 15, padding: 5}} zDepth={1}>
        <HighChart config={config} />
      </Paper>
		);
	}
}

export default PerformanceChart;
