import HighChart from 'react-highcharts';

Math.easeOutQuart = (t) => { return 1-(--t)*t*t*t };

class PerformanceChart extends React.Component {
  constructor({ scores, accuracies }) {
    this.config = {

    }
  }

	render() {
		return (
			<HighChart config={this.config} />
		);
	}
}
