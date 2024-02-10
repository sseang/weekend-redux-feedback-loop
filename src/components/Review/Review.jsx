// TODO: add submit and axios POST
//ODO: needs get route instead in review?
import axios from 'axios';
//add useSelector for input data
import { useSelector } from 'react-redux';
import { useState } from 'react';

function Review() {
  let reflection = useSelector((state) => state);

  // // store call: feeling
  // let feeling = useSelector((state) => state.feeling);
  // // store call: understand
  // let understanding = useSelector((state) => state.understand);
  // // store call: support

  // let support = useSelector((state) => state.support);
  // // store call: comments
  // let comments = useSelector((state) => state.comments);
  //store state?
  // const [feelings, setFeeling] = useState('');
  // const [understands, setUnderstand] = useState('');
  // const [supports, setSupport] = useState('');
  // const [comment, setComment] = useState('');

  //TODO: add submit function
  //1st function POST not needed?
  const handleSubmitFeedback = (event) => {
    event.preventDefault();

    console.log(
      `FEEDBACK: feeling - ${feeling}, understand - ${understanding}, support - ${support}, comments - ${comments}`
    );

    axios
      .post('/api/feedback', { feeling, understanding, support, comments })
      .then((response) => {
        // GET refresh our list
      })
      .catch((error) => {
        console.log('ERROR!!!:', error);
      });
  };
  //TODO: add onchange function

  return (
    <div>
      <h2>Review Your Feedback</h2>
      <form onSubmit={handleSubmitFeedback}>
        {/* //needs onChange */}
        <div>Feeling:{JSON.stringify(reflection)}</div>
        <input
          type="number"
          id="feeling"
          onChange={(event) => setFeeling(event.target.value)}
          value={reflection}
        />

        <div>Understand:</div>
        <input
          type="number"
          id="understand"
          onChange={(event) => setUnderstand(event.target.value)}
          value={reflection.understanding}
        />
        <div>Support:</div>
        <input
          type="number"
          id="support"
          onChange={(event) => setSupport(event.target.value)}
          value={reflection.support}
        />
        <div>Comments:</div>
        <input
          type="text"
          id="comment"
          onChange={(event) => setComment(event.target.value)}
          value={reflection.comments}
        />
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Review;
