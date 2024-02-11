import React from 'react';
import { useState } from 'react';
//failing when calling dispatch
//add use dispatch
import { useDispatch } from 'react-redux';
//nav to new form
import { useHistory } from 'react-router-dom';

function Feeling() {
  const [inputFeeling, setInputFeeling] = useState(1);

  const dispatch = useDispatch();
  //use push to new page
  const history = useHistory();

  const handleOnClickFeeling = (event) => {
    console.log('In my FEELINGS');
    //prevent refresh
    event.preventDefault();
    //action to storeInstance
    dispatch({
      //payload to store: REMEMBER to create reducer in store.js and add wrap PROVIDER!!
      type: 'FEELING_COLUMN_ADD',
      //change payload from object {} to normal
      payload: Number(inputFeeling),
    });
    //add path
    history.push('/understand');
    setInputFeeling('');
  };

  //onchange event
  const handleAddFeeling = (event) => {
    setInputFeeling(event.target.value);
  };

  return (
    <div>
      <h2>Are you feeling ok?</h2>
      <input
        data-testid="input"
        type="number"
        onChange={handleAddFeeling}
        // value={inputFeeling}
      />
      <button data-testid="next" type="button" onClick={handleOnClickFeeling}>
        NEXT
      </button>
    </div>
  );
}

export default Feeling;
