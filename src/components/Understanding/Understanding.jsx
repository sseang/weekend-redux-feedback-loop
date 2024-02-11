import React from 'react';
import { useState } from 'react';
//failing when calling dispatch
//add use dispatch
import { useDispatch } from 'react-redux';
//nav to new form
import { useHistory } from 'react-router-dom';
//send axios post instead?
//import axios from 'axios';

function Understanding() {
  const [inputUnderstanding, setInputUnderstanding] = useState(1);

  const dispatch = useDispatch();
  //use push to new page
  const history = useHistory();

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
    //add path
    history.push('/support');
    setInputUnderstanding('');
  };

  //onchange event
  const handleAddUnderstand = (event) => {
    setInputUnderstanding(event.target.value);
  };

  return (
    <div className="Understand">
      <h2>Are you understanding the material? </h2>
      <input
        data-testid="input"
        type="number"
        onChange={handleAddUnderstand}
        value={inputUnderstanding}
      />
      <button
        data-testid="next"
        type="button"
        onClick={handleOnclickUnderstand}>
        NEXT
      </button>
    </div>
  );
}

export default Understanding;
