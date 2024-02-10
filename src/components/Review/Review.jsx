// TODO: add submit and axios POST
//ODO: needs get route instead in review?
import axios from 'axios';
//add useSelector for input data
import { useSelector } from 'react-redux';
import { useState } from 'react';

function Review() {
  // store call: feeling
  let feeling = useSelector((state) => state.feeling);
  // store call: understand
  let understand = useSelector((state) => state.understand);
  // store call: support

  let support = useSelector((state) => state.support);
  // store call: comments
  let comments = useSelector((state) => state.comments);
  //store state?
  const [feelings, setFeeling] = useState('');
  const [understands, setUnderstand] = useState('');
  const [supports, setSupport] = useState('');
  const [comment, setComment] = useState('');

  //TODO: add submit function
  //1st function POST not needed?
  const handleSubmitFeedback = (event) => {
    event.preventDefault();

    console.log(`Adding FEEDBACK`, {
      // feeling,
      // understand,
      // support,
      // comments,
    });

    axios
      .post('/api/feedback', [feeling, understand, support, comments])
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
        <div>Feeling:</div>
        <input
          type="text"
          id="feeling"
          onChange={(event) => setFeeling(event.target.value)}
          value={feeling.feeling}
        />

        <div>Understand:</div>
        <input
          type="text"
          id="understand"
          onChange={(event) => setUnderstand(event.target.value)}
          value={understand.understand}
        />
        <div>Support:</div>
        <input
          type="text"
          id="support"
          onChange={(event) => setSupport(event.target.value)}
          value={support.support}
        />
        <div>Comments:</div>
        <input
          type="text"
          id="comment"
          onChange={(event) => setComment(event.target.value)}
          value={comments.comments}
        />
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Review;
