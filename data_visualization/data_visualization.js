
const ctx = document.getElementById('myChart');
const pch = document.getElementById('myChart2');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: [
      'Pelham Bay Park, Brox',
      'Greenbelt, Staten Island',
      'Freshkills Park, Staten Island',
      'Van Cortland Park, Bronx',
      'Flushing Meadows-Corona Park, Queens',
      'Central Park, Manhattan',
      'Marine Park, Brooklyn',
      'Bronx Park, Bronx',
      'Alley Pond Park, Queens',
      'Forest Park, Queens'],
    datasets: [{
      label: 'Acres',
      backgroundColor: [
        '#8294C4',
        '#ACB1D6',
        '#DBDFEA',
        '#FFEAD2',
        '#F6F1F1',
        '#AFD3E2',
        '#19A7CE',
        '#146C94',
        '#146C94',
        '#F7E1AE'
      ],
      data: [
        2772,
        2316,
        2200,
        1146,
        897,
        843,
        798,
        718,
        655,
        544],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    },
    legend: { display: false },
    title: true,
    text: 'Top 10 largest parks in New York City'
  }
});

new Chart(pch, {
  type: 'doughnut',
  data: {
    labels: ["Alaska", "Texas", "California", "Montana", "New Mexico", "Arizona", "Nevada", "Colorado", "Oregon", "Wyoming", "Michigan", "Minnesota", "Utah", "Kansas", "Nebraska", "South Dakota", "Idaho", "Oklahoma", "Missouri", "North Dakota", "Wisconsin", "Florida", "Georgia", "Illinois", "Iowa", "New York", "North Carolina", "Arkansas", "Alabama", "Louisiana", "Mississippi", "Pennsylvania", "Ohio", "Virginia", "Tennessee", "Kentucky", "Indiana", "Maine", "South Carolina", "West Virginia", "Maryland", "Hawaii", "Massachusetts", "Vermont", "New Hampshire", "New Jersey", "Connecticut", "Delaware", "Rhode Island", "District of Columbia"]
    ,
    datasets: [{
      label: 'Square miles',
      backgroundColor: [
        '#FF0000',
        '#00FF00',
        '#0000FF',
        '#FFFF00',
        '#FFA500',
        '#800080',
        '#FFC0CB',
        '#A52A2A',
        '#000000',
        '#5F0AF0',
        '#808080',
        '#C0C0C0',
        '#FFD700',
        '#000080',
        '#40E0D0',
        '#FF00FF',
        '#008080',
        '#E6E6FA',
        '#DC143C',
        '#228B22',
        '#87CEEB',
        '#6A5ACD',
        '#A9A9A9',
        '#800000',
        '#808000',
        '#BC8F8F',
        '#FF6347',
        '#2E8B57',
        '#4682B4',
        '#4B0082',
        '#9932CC',
        '#A0522D',
        '#F4A460',
        '#CCCCFF',
        '#98FB98',
        '#FF1493',
        '#FF7F50',
        '#9370DB',
        '#FFA07A',
        '#D2691E',
        '#7CFC00',
        '#F0E68C',
        '#008B8B',
        '#E9967A',
        '#3CB371',
        '#AFEEEE',
        '#BA55D3',
        '#00CED1',
        '#87CEFA',
        '#483D8B',
      ],
      data: [665384.04, 268596.46, 163694.74, 147039.71, 121590.3, 113990.3, 110571.82, 104093.67, 98381.38, 97813.57, 96713.51, 86935.83, 84897.62, 83569.16, 82278.36, 77354.82, 77116.08, 71362.41, 70698.32, 69899.38, 69707.82, 65757.7, 65496.38, 59425.15, 57914.38, 56272.81, 54555.53, 53819.16, 53179.96, 52419.02, 52378.13, 48430.42, 46055.24, 44825.58, 42774.93, 42143.7, 40408.03, 36418.03, 35385.81, 32020.49, 24230.04, 12406.68, 10931.72, 10555.27, 9616.4, 9349.16, 8723.42, 5543]

    }],

  },
  options: {
    title: {
      display: true,
      text: 'US state size in a pie'
    }
  }
});