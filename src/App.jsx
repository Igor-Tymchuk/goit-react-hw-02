import { useState, useEffect } from "react";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

const App = () => {
  const savedGrades = JSON.parse(localStorage.getItem("saved-grades"));
  const [clicks, setClicks] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
    ...savedGrades,
  }
  );

  const totalFeedback = clicks.good + clicks.neutral + clicks.bad;

  const updateFeedback = feedbackType => {
    setClicks((clicks) => ({
      ...clicks,
      [feedbackType]: clicks[feedbackType] + 1,
    }));
  }
  const resetFeedback = () => {
    setClicks({
      good: 0,
      neutral: 0,
      bad: 0
    })
  };

  useEffect(() => {
    localStorage.setItem("saved-grades", JSON.stringify(clicks));
  }, [clicks]);

  return <>
    <Description name="Sip Happens Café"
      text="Please leave your feedback about our service by selecting one of the options below." />
    <Options update={updateFeedback} reset={resetFeedback} total={totalFeedback} />
    {totalFeedback ? <Feedback clicks={clicks} total={totalFeedback} /> : <Notification />}

  </>
};

export default App;