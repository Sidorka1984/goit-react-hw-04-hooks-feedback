import React from "react";
import { useReducer } from "react";
import Container from "./components/Container";
import Section from "./components/Section";
import FeedbackOptions from "./components/FeedbackOptions";
import Statistics from "./components/Statistics";
import Notification from "./components/Notification/Notification.jsx";

function countReducer(prevState, nextState) {
  return prevState + nextState;
}

export default function App() {
  const [good, setGood] = useReducer(countReducer, 0);
  const [neutral, setNeutral] = useReducer(countReducer, 0);
  const [bad, setBad] = useReducer(countReducer, 0);

  const handleIncreament = (type) => {
    switch (type) {
      case "good":
        setGood(1);
        break;

      case "neutral":
        setNeutral(1);
        break;

      case "bad":
        setBad(1);
        break;

      default:
        return;
    }
  };
  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={{ good, neutral, bad }}
          onLeaveFeedback={handleIncreament}
        />
      </Section>
      {countTotalFeedback() ? (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      ) : (
        <Notification message="No feedback given" />
      )}
    </Container>
  );
}
