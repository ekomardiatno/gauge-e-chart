option = {
  series: [
    {
      splitNumber: 1,
      type: 'gauge',
      startAngle: 200,
      endAngle: -20,
      min: 0,
      max: 3660,
      itemStyle: {
        color: 'auto'
      },
      axisLine: {
        lineStyle: {
          width: 35,
          color: [
            [1, '#eee']
          ],
        },
        roundCap: true
      },
      pointer: {
        show: true,
        itemStyle: {
          color: '#777'
        }
      },
      progress: {
        show: true,
        width: 35,
        itemStyle: {
          color: '#1f843c'
        },
        roundCap: true
      },
      detail: {
        valueAnimation: true,
        formatter: '{value}',
        color: '#333',
        fontSize: 50,
        fontWeight: 700,
        offsetCenter: [0, 80]
      },
      axisTick: {
        show: false
      },
      splitLine: {
        show: false
      },
      axisLabel: {
        color: '#777',
        distance: 25,
        fontSize: 18
      },
      data: [
        {
          value: 3000
        }
      ]
    },
    {
      splitNumber: 1,
      type: 'gauge',
      startAngle: 200,
      endAngle: -20,
      min: 0,
      max: 3660,
      axisLine: {
        show: false
      },
      progress: {
        show: true,
        width: 10,
        itemStyle: {
          color: '#e14c4d',
          borderWidth: 2,
          borderColor: '#c94849'
        },
        roundCap: true
      },
      pointer: {
        show: false
      },
      axisTick: {
        show: false
      },
      splitLine: {
        show: false
      },
      axisLabel: {
        show: false
      },
      detail: {
        show: false
      },
      data: [
        {
          value: 3660 / 3
        }
      ]
    },
    {
      splitNumber: 1,
      type: 'gauge',
      startAngle: 127,
      endAngle: -93,
      min: 0,
      max: 3660,
      axisLine: {
        show: false
      },
      progress: {
        show: true,
        width: 10,
        itemStyle: {
          color: "#f0bb0f",
          borderWidth: 2,
          borderColor: '#cba119'
        },
        roundCap: true
      },
      pointer: {
        show: false
      },
      axisTick: {
        show: false
      },
      splitLine: {
        show: false
      },
      axisLabel: {
        show: false
      },
      detail: {
        show: false
      },
      data: [
        {
          value: 3660 / 3
        }
      ]
    },
    {
      splitNumber: 1,
      type: 'gauge',
      startAngle: 54,
      endAngle: -166,
      min: 0,
      max: 3660,
      axisLine: {
        show: false
      },
      progress: {
        show: true,
        width: 10,
        itemStyle: {
          color: "#1f843c",
          borderWidth: 2,
          borderColor: '#21783a'
        },
        roundCap: true
      },
      pointer: {
        show: false
      },
      axisTick: {
        show: false
      },
      splitLine: {
        show: false
      },
      axisLabel: {
        show: false
      },
      detail: {
        show: false
      },
      data: [
        {
          value: 3660 / 3
        }
      ]
    }
  ]
};
