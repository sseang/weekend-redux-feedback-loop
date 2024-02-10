import React from 'react';
import { useState } from 'react';
//failing when calling dispatch
//add use dispatch
import { useDispatch } from 'react-redux';
//nav to new form
import { useHistory } from 'react-router-dom';

//send axios post instead?
//import axios from 'axios';

function Comments() {
  const [inputComment, setInputComment] = useState('');

  const dispatch = useDispatch();
  //use push to new page
  const history = useHistory();

  const handleOnClickComment = (event) => {
    console.log('Got COMMENTS!!??');
    //prevent refresh
    event.preventDefault();
    //action to storeInstance
    dispatch({
      //payload to store: REMEMBER to create reducer in store.js and add wrap PROVIDER!!
      type: 'COMMENT_COLUMN_ADD',
      payload: inputComment,
    });
    //add path
    history.push('/review');
    setInputComment('');
  };

  //onchange event
  const handleAddComment = (event) => {
    setInputComment(event.target.value);
  };

  return (
    <div className="Understand">
      <form>
        <label>Comments? </label>
        <input
          data-testid="input"
          onChange={handleAddComment}
          value={inputComment}
        />
        <button data-testid="next" type="button" onClick={handleOnClickComment}>
          NEXT
        </button>
      </form>
    </div>
  );
}

export default Comments;
