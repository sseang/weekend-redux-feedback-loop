// TODO: add submit and axios POST
import { postFeedback } from '../FeedbackApi/FeedbackApi';
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

    postFeedback({ feeling, understanding, support, comments })
      .then((response) => {
        // GET refresh our list
        console.log('feedback submitted successfully');

        history.push('/thankyou');
      })
      .catch((error) => {
        console.log('ERROR!!!:', error);
      });
  };

  // const handleClickToSuccess = () => {
  //   //add path
  //   history.push('/success');
  // };

  //TODO: add onchange function

  return (
    <div>
      <h2>Review Your Feedback</h2>
      <p>Feelings: {feeling}</p>
      <p>Understanding: {understanding}</p>
      <p>Support: {support}</p>
      <p>Comments: {comments}</p>
      <button data-testid="next" onClick={handleSubmitFeedback}>
        Submit
      </button>
    </div>
  );
}

{
  //form giving errors
  /* <label>review</label>
<form onSubmit={handleSubmitFeedback}>
  {/* //needs onChange */
}
//   <div>Feeling:</div>
//   <input
//     data-testid="input"
//     type="number"
//     onChange={(event) => event.target.value}
//     value={feeling}
//   />

//   <div>Understand:</div>
//   <input
//     data-testid="input"
//     type="number"
//     onChange={(event) => event.target.value}
//     value={understanding}
//   />
//   <div>Support:</div>
//   <input
//     data-testid="input"
//     type="number"
//     onChange={(event) => event.target.value}
//     value={support}
//   />
//   <div>Comments:</div>
//   <input
//     data-testid="input"
//     type="text"
//     //does not need to pass function in onchange see line 55
//     // onChange={(event) => setComment(event.target.value)}
//     onChange={(event) => event.target.value}
//     value={comments}
//   />
//   <div>
//     <button data-testid="next" type="submit">
//       {/* onClick={handleClickToSuccess}> */}
//       Submit
//     </button>
//   </div>
// </form> */}
export default Review;
