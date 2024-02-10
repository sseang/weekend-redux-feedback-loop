import React from 'react';
import { useState } from 'react';
//failing when calling dispatch
//add use dispatch
import { useDispatch } from 'react-redux';

//send axios post instead?
//import axios from 'axios';

function Understanding() {
  const [inputUnderstanding, setInputUnderstanding] = useState('');

  const dispatch = useDispatch();

  const handleOnclickUnderstand = (event) => {
    console.log('I am UNDERSTANDING!!');
    //prevent refresh
    event.preventDefault();
    //action to storeInstance
    dispatch({
      //payload to store: REMEMBER to create reducer in store.js and add wrap PROVIDER!!
      type: 'UNDERSTANDING_COLUMN_ADD',
      payload: Number(inputUnderstanding),
    });
    setInputUnderstanding('');
  };

  //onchange event
  const handleAddUnderstand = (event) => {
    setInputUnderstanding(event.target.value);
  };

  return (
    <div className="Understand">
      <form>
        <label>Understanding? </label>
        <input
          data-testid="input"
          onChange={handleAddUnderstand}
          value={inputUnderstanding}
        />
        <button
          data-testid="next"
          type="button"
          onClick={handleOnclickUnderstand}>
          NEXT
        </button>
      </form>
    </div>
  );
}

export default Understanding;
