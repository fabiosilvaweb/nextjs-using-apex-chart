import type { NextPage } from 'next'
import Charts from './components/Charts'

const Home: NextPage = () => {
  return (
    <div style={{ width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
    <Charts
      type="bar"
      options={{
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
        }
      }}
      series={[
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
      ]}
    />
    <Charts
    type="donut"
    options={{
      labels: ['Apple', 'Mango', 'Orange', 'Watermelon'],
    }}
    series={[44, 55, 41, 17, 15]}
  />
    </div>
  )
}

export default Home
