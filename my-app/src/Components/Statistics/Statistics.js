import React from "react";
import PropTypes from 'prop-types';

function Statistics ({good, neutral, bad, total, positivePercentage}) {
    return (
      <ul className="list__statistics">
        <li className="item__statistics">
          <p>Good: {good}</p>
        </li>
        <li className="item__statistics">
          <p>Neutral: {neutral}</p>
        </li>
        <li className="item__statistics">
          <p>Bad: {bad}</p>
        </li>
        <li className="item__statistics">
          <p>Total: {total}</p>
        </li>
        <li className="item__statistics">
          <p>Positive feedback: {positivePercentage || 0}%</p>
        </li>
      </ul>
    )
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired
}
export default Statistics;