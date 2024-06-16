import { useState, useEffect } from "react";
import Introduction from "../components/Introduction";
import Question from "../components/Question";
import { nanoid } from "nanoid";

const App = () => {
  const [welcome, setWelcome] = useState(true);
  const [questions, setQuestions] = useState([]);

  function handleClick() {
    setWelcome((prevState) => !prevState);
  }
  // Fetch APIs from OPENTDB
  useEffect(() => {
    const apiUrl =
      "https://opentdb.com/api.php?amount=4&category=26&difficulty=easy&type=multiple";
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        setQuestions(getNewQuestions(data.results));
      });
  }, []);

  function getNewQuestions(listOfQuestions) {
    const resetQuestions = listOfQuestions.map((question) => {
      return {
        id: nanoid(),
        question: question.question,
      };
    });
    return resetQuestions;
  }
  const questionElements = questions.map((question) => (
    <Question key={question.id} question={question.question} />
  ));

  return (
    <div>
      <main className="main">
        {welcome ? (
          <Introduction handleClick={handleClick} />
        ) : (
          <div className="app-container">{questionElements}</div>
        )}
      </main>
    </div>
  );
};

export default App;
