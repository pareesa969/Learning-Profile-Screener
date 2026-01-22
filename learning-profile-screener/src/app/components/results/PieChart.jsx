'use client'

import { Pie } from 'react-chartjs-2'
import './chartConfig'

export default function PieChart({ learningStyle }) {
  const data = {
    labels: ['Visual', 'Auditory', 'Kinesthetic'],
    datasets: [
      {
        data: [
          learningStyle.visual,
          learningStyle.auditory,
          learningStyle.kinesthetic,
        ],
        backgroundColor: ['#00BFFF', '#6A0DAD', '#D8BFFF'],
        borderWidth: 0,
      },
    ],
  }

  const options = {
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: '#333',
        },
      },
    },
  }

  return <Pie data={data} options={options} />
}
