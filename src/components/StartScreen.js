function StartScreen({ numQuestion, dispatch }) {
  return (
    <div className="start">
      <h3>{numQuestion} question to test your React mastery</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Let's Start
      </button>
    </div>
  );
}

export default StartScreen;
