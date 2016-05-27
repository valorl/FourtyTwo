export const perfChartConfig = {
    chart: {
      type: 'spline'
    },
    credits: false,
    exporting: false,
    title: {
      text: 'Your performance'
    },
    xAxis: {
      type: 'datetime',
      dateTimeLabelFormats: { // don't display the dummy year
        month: '%e. %b',
        year: '%b'
      }
    },
    yAxis: [{ // Primary yAxis
            labels: {
                format: '{value} qpm',
                style: {
                    color: '#000';
                }
            },
            title: {
                text: 'Score',
                style: {
                    color: '#000';
                }
            },
            opposite: true

        },
        { // Secondary yAxis
            gridLineWidth: 0,
            title: {
                text: 'Accuracy',
                style: {
                    color: '#000';
                }
            },
            labels: {
                format: '{value}%',
                style: {
                    color: '#000';
                }
            }

        }],
    tooltip: {
      headerFormat: '<b>{series.name}</b><br>',
      pointFormat: '{point.x:%e. %b}: {point.y:.2f} m'
    },
    plotOptions: {
      spline: {
        marker: {
          enabled: false,
          halo: false,
          symbol: 'circle',
          states: {
            hover: {
              enabled: true,

            }
          }
        }
      },
      series: {
      	animation: {
        	duration: 3500,
          easing: 'easeOutCubic'
        }
      }
    }
  }
