import React from 'react';
//import axios
import axios from 'axios';
//add use dispatch
import { useDispatch } from 'react-redux';
//nav to new form
import { useHistory } from 'react-router-dom';

function Success() {
  //use push to new page
  const dispatch = useDispatch();
  const history = useHistory();

  //use push to new page
  const resetFeedback = (event) => {
    event.preventDefault();
    dispatch({
      type: 'FEELING_COLUMN_ADD',
      payload: '',
    });
    dispatch({
      type: 'UNDERSTANDING_COLUMN_ADD',
      payload: '',
    });
    dispatch({
      type: 'SUPPORT_COLUMN_ADD',
      payload: '',
    });
    dispatch({
      type: 'COMMENT_COLUMN_ADD',
      payload: '',
    });
    // axios
    //   .delete(`/api/feedback`)
    //   //success
    //   .then((response) => {
    //     alert('CLEAR FEEDBACK!!');
    //   })
    //   .catch((error) => {
    //     console.log('OH SNAP!:', error);
    //   });
    // //add path
    history.push('/');
  };

  return (
    <div>
      {/* T<diODO: add Header */}
      <h2>Thank You!</h2>
      {/* <label>thank you</label> */}
      <button data-testid="next" onClick={resetFeedback}>
        Leave NEW Feedback
      </button>
    </div>
  );
}

export default Success;
