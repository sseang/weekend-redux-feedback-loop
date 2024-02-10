// TODO: add submit and axios POST

import axios from 'axios';
//add useSelector for input data
import { useSelector } from 'react-redux';
//nav to new form
import { useHistory } from 'react-router-dom';
//import { useState } from 'react';

function Review() {
  //use push to new page
  const history = useHistory();

  //let reflection = useSelector((state) => state);

  // // store call: feeling
  let feeling = useSelector((state) => state.feeling);
  // store call: understand
  let understanding = useSelector((state) => state.understanding);
  // store call: support

  let support = useSelector((state) => state.support);
  // store call: comments
  let comments = useSelector((state) => state.comments);
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

  const handleClickToSuccess = () => {
    //add path
    history.push('/success');
  };

  //TODO: add onchange function

  return (
    <div>
      <h2>Review Your Feedback</h2>
      <form onSubmit={handleSubmitFeedback}>
        {/* //needs onChange */}
        <div>Feeling:</div>
        <input
          type="number"
          id="feeling"
          onChange={(event) => event.target.value}
          value={feeling}
        />

        <div>Understand:</div>
        <input
          type="number"
          id="understand"
          onChange={(event) => event.target.value}
          value={understanding}
        />
        <div>Support:</div>
        <input
          type="number"
          id="support"
          onChange={(event) => event.target.value}
          value={support}
        />
        <div>Comments:</div>
        <input
          type="text"
          id="comment"
          //does not need to pass function in onchange see line 55
          // onChange={(event) => setComment(event.target.value)}
          onChange={(event) => event.target.value}
          value={comments}
        />
        <div>
          <button type="submit" onClick={handleClickToSuccess}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Review;
