'use client'

import { Bar } from 'react-chartjs-2'
import './chartConfig'

export default function BarChart({ focusLevel, readingTolerance }) {
  const mapScore = (level) => {
    if (level === 'High') return 3
    if (level === 'Medium') return 2
    return 1
  }

  const data = {
    labels: ['Focus', 'Reading Tolerance'],
    datasets: [
      {
        data: [
          mapScore(focusLevel),
          mapScore(readingTolerance)
        ],
        backgroundColor: '#00BFFF',
        borderRadius: 8
      }
    ]
  }

  const options = {
    scales: {
      y: {
        ticks: {
          stepSize: 1,
          callback: (value) => ['', 'Low', 'Medium', 'High'][value]
        },
        min: 0,
        max: 3
      }
    },
    plugins: {
      legend: { display: false }
    }
  }

  return <Bar data={data} options={options} />
}
