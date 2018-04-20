Highcharts.chart('container', {
  chart: {
    type: 'line'
  },
  title:{
        text: 'Venezuela Freedom Rate from 1999-2018'
    },
    subtitle: {
        text: 'Source: <a href="https://freedomhouse.org/report/freedom-world/1999/venezuela" target="_blank">Freedom House</a>.'
      },
  xAxis: {
    categories: ['1999', '2001', '2002', '2004', '2006', '2008', '2010', '2012', '2014', '2016', '2017', '2018']
  },
  yAxis:  {
      title: {
          text: 'Rate:1= Best & 7= Worst'
      }
  },
  plotOptions: {
      line: {
          dataLabels: {
              enabled: true
          },
          enableMouseTracking: true
      }
  },

  series: [{
      name: 'Freedom Rating',
      data: [4.0, 4.0, 4.0, 3.5, 4.0, 4.0, 4.5, 5.0, 5.0, 5.0, 5.5, 5.5, ]
  }, {
      name: 'Civil Liberties',
      data: [4, 5, 5, 4, 4, 4, 4, 5 , 5, 5, 6, 6]
  }, {
      name: 'Political Rights',
      data: [4, 3 , 3 , 3, 4, 4, 5, 5, 5, 5, 5, 5]
  },]
});
