import React from 'react';
import { useState } from 'react';
//failing when calling dispatch
//add use dispatch
import { useDispatch } from 'react-redux';

//send axios post instead?
//import axios from 'axios';

function Support() {
  const [inputSupport, setInputSupport] = useState('');

  const dispatch = useDispatch();

  const handleOnClickSupport = (event) => {
    console.log('I Feel SUPPORT!!');
    //prevent refresh
    event.preventDefault();
    //action to storeInstance
    dispatch({
      //payload to store: REMEMBER to create reducer in store.js and add wrap PROVIDER!!
      type: 'SUPPORT_COLUMN_ADD',
      payload: {
        support: Number(inputSupport),
      },
    });
    setInputSupport('');
  };

  //onchange event
  const handleAddSupport = (event) => {
    setInputSupport(event.target.value);
  };

  return (
    <div className="Understand">
      <form>
        <label>Support? </label>
        <input
          data-testid="input"
          onChange={handleAddSupport}
          value={inputSupport}
        />
        <button data-testid="next" type="button" onClick={handleOnClickSupport}>
          NEXT
        </button>
      </form>
    </div>
  );
}

export default Support;
