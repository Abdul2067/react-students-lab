import React from "react";

const Scores = (props) => {
  const scores = props.scores.map((e, index) => {
    return (
      <div className="scores">
        <p>Date: {e.date}</p>
        <p>Score: {e.score}</p>
      </div>
    )
  })
  return (
    <div>{scores}</div>
  )
}

export default Scores