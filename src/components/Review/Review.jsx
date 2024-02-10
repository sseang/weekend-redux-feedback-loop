// TODO: add submit and axios POST
import axios from 'axios';
//add useSelector for input data
import { useSelector } from 'react-redux';

function Review() {
  // store call: feeling
  const feeling = useSelector((state) => state.feeling);
  // store call: understand
  const understand = useSelector((state) => state.understand);
  // store call: support

  const support = useSelector((state) => state.support);
  // store call: comments
  const comments = useSelector((state) => state.comments);
  const length = name.length;

  const handleSubmitFeedback = (event) => {};

  return (
    <div>
      <h2>Review Your Feedback</h2>
      <form onSubmit={handleSubmitFeedback}>
        <div>Feelings:</div>
        <input value={feeling} />
        <div>Understand:</div>
        <input value={understand} />
        <div>Support:</div>
        <input value={support} />
        <div>Comments:</div>
        <input value={comments} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Review;
