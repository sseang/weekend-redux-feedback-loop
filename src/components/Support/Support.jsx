import React from 'react';
import { useState } from 'react';
//failing when calling dispatch
//add use dispatch
import { useDispatch } from 'react-redux';
//nav to new form
import { useHistory } from 'react-router-dom';

//send axios post instead?
//import axios from 'axios';

function Support() {
  const [inputSupport, setInputSupport] = useState(1);

  const dispatch = useDispatch();
  //use push to new page
  const history = useHistory();

  const handleOnClickSupport = (event) => {
    console.log('I Feel SUPPORT!!');
    //prevent refresh
    event.preventDefault();
    //action to storeInstance
    dispatch({
      //payload to store: REMEMBER to create reducer in store.js and add wrap PROVIDER!!
      type: 'SUPPORT_COLUMN_ADD',
      payload: Number(inputSupport),
    });
    //add path
    history.push('/comments');
    setInputSupport('');
  };

  //onchange event
  const handleAddSupport = (event) => {
    setInputSupport(event.target.value);
  };

  return (
    <div className="Understand">
      <h2>Do you have enough support? </h2>
      <input
        data-testid="input"
        type="number"
        onChange={handleAddSupport}
        // value={inputSupport}
      />
      <button data-testid="next" type="button" onClick={handleOnClickSupport}>
        NEXT
      </button>
    </div>
  );
}

export default Support;
