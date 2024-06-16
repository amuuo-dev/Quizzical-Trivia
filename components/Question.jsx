export default function Question(props) {
  return (
    <div className="question">
      <h4
        className="question-title"
        dangerouslySetInnerHTML={{ __html: props.question }}
      />
    </div>
  );
}
