import Answer from "./Answer";
export default function Question(props) {
  const answerElements = props.answers.map((answer) => {
    function runHold(id) {
      props.runHold(id, props.id);
    }

    return (
      <Answer
        id={answer.id}
        key={answer.id}
        questionId={props.id}
        answer={answer.answer}
        isHeld={answer.isHeld}
        correct={answer.correct}
        heldCorrect={answer.heldCorrect}
        heldIncorrect={answer.heldIncorrect}
        checked={answer.checked}
        runHold={() => runHold(answer.id)}
      />
    );
  });
  return (
    <div className="question">
      <h4
        className="question-title"
        dangerouslySetInnerHTML={{ __html: props.question }}
      />
      <div className="container-answers">{answerElements}</div>
    </div>
  );
}
