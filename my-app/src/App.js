import { useState } from "react";
import FeedbackOptions from "./Components/FeedbackOptions/FeedbackOptions";
import Statistics from "./Components/Statistics/Statistics";
import Section from "./Components/Section/Section";
import Notification from "./Components/Notification/Notification";

function App () {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = (name) => {

    switch (name) {
      case 'Good':
        setGood(good => good + 1);
        break;

      case "Neutral":
        setNeutral(neutral => neutral + 1);
        break;

      case 'Bad':
        setBad(bad => bad +1);
        break;

      default:
        return;
    }

  }

  const countTotalFeedback = () => {
    return good + neutral + bad;
  }

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good * 100) / countTotalFeedback());
  }

  return (
    <>
    <Section title="Feedback">
      <FeedbackOptions 
      options={["Good", "Neutral", "Bad"]} 
      onLeaveFeedback={handleClick}/>
    </Section>

    <Section title="Statistics">
    {countTotalFeedback() ? (
      <Statistics 
      good={good} 
      neutral={neutral} 
      bad={bad} 
      total={countTotalFeedback()} 
      positivePercentage={countPositiveFeedbackPercentage()}/>
    
    ) : (<Notification/>)}
    </Section>
    </>
  )
}

export default App;