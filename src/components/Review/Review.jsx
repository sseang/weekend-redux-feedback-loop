// TODO: add submit and axios POST
import axios from 'axios';
//add useSelector for input data
import { useSelector } from 'react-redux';
import { useState } from 'react';

function Review() {
  // store call: feeling
  const feeling = useSelector((state) => state.feeling);
  // store call: understand
  const understand = useSelector((state) => state.understand);
  // store call: support

  const support = useSelector((state) => state.support);
  // store call: comments
  const comments = useSelector((state) => state.comments);
  //store state?
  const [setFeeling] = useState('');
  const [setUnderstand] = useState('');
  const [setSupport] = useState('');
  const [setComment] = useState('');

  //TODO: add submit function
  const handleSubmitFeedback = (event) => {
    event.preventDefault();

    // console.log(`Adding FEEDBACK`, { title, author });

    // axios
    //   .post('/api/feedback', { title, author })
    //   .then((response) => {
    //     // GET refresh our list
    //     refreshBookList();
    //   })
    //   .catch((error) => {
    //     console.log('ERROR:', error);
    //   });

    // // clear form inputs
    // setTitle('');
    // setAuthor('');
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
