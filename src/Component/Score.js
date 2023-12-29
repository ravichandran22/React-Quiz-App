import React from 'react'

const Score = (props) => {
  return (
    <div>
      <h2>Results</h2>
      <h4>Your Score: {props.score}</h4>
    </div>
  )
}

export default Score;