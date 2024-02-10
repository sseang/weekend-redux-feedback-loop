import React from 'react';
//import axios
import axios from 'axios';
//add use dispatch
import { useDispatch } from 'react-redux';
//nav to new form
import { useHistory } from 'react-router-dom';

function Success() {
  //use push to new page

  const history = useHistory();
  const dispatch = useDispatch();
  //use push to new page
  const resetFeedback = () => {
    axios
      .delete(`/api/feedback`)
      //success
      .then((response) => {
        alert('CLEAR FEEDBACK!!');
      })
      .catch((error) => {
        console.log('OH SNAP!:', error);
      });
    //add path
    history.push('/');
  };

  return (
    <div>
      {/* T<diODO: add Header */}
      <header className="success-header">
        <h1 className="success-title">Feedback!</h1>
        <label>
          <h4>Thank You!</h4>
        </label>
        <button type="submit" onClick={resetFeedback}>
          Leave NEW Feedback
        </button>
      </header>
    </div>
  );
}

export default Success;
