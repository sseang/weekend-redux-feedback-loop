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

  const handleSubmitUnderstand = (event) => {
    console.log('I am UNDERSTANDING!!');
    //prevent refresh
    event.preventDefault();
    //action to storeInstance
    dispatch({
      //payload to store: REMEMBER to create reducer in store.js and add wrap PROVIDER!!
      type: 'UNDERSTANDING_COLUMN_ADD',
      payload: {
        feeling: inputUnderstanding,
      },
    });
    setInputUnderstanding('');
  };

  //onchange event
  const handleAddUnderstand = (event) => {
    setInputFeeling(event.target.value);
  };

  return (
    <div className="Understand">
      <form>
        <label>Feeling? </label>
        <input
          data-testid="input"
          onChange={handleAddUnderstand}
          value={inputFeeling}
        />
        <button
          data-testid="next"
          type="button"
          onClick={handleSubmitUnderstand}>
          NEXT
        </button>
      </form>
    </div>
  );
}

export default Understanding;
