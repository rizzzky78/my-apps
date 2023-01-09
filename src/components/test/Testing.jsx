import React from 'react'
import { useQuery } from 'react-query'

const Test = () => {
  // Call the `useQuery` hook with the query key and the function that makes the API call
  const { data, status } = useQuery('myQueryKey', () => {
    return fetch('https://api.lolhuman.xyz/api/turnbackhoax?apikey=rizzzuchi78apikey')
      .then(response => response.json())
  })

  // Use the data and status from the hook to render the component
  return (
    <div>
      {status === 'loading' && <div>Loading data...</div>}
      {status === 'error' && <div>Error loading data</div>}
      {status === 'success' && (
        <ul>
          {
            data.result.map((datas, index) => (
              <div key={index}>
                <h3>{datas.title}</h3>
                <p>{datas.posted}</p>
                <img src={datas.thumbnail} alt={datas.title} />
                <p>{datas.desc}</p>
              </div>
            ))
          }
        </ul>
      )}
    </div>
  )
};
export { Test }
