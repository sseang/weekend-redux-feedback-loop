import React from 'react';
import { useState } from 'react';
//failing when calling dispatch
//add use dispatch
import { useDispatch } from 'react-redux';

function Feeling() {
  const [inputFeeling, setInputFeeling] = useState('');

  const dispatch = useDispatch();

  const handleOnClickFeeling = (event) => {
    console.log('In my FEELINGS');
    //prevent refresh
    event.preventDefault();
    //action to storeInstance
    dispatch({
      //payload to store: REMEMBER to create reducer in store.js and add wrap PROVIDER!!
      type: 'FEELING_COLUMN_ADD',
      payload: Number(inputFeeling),
    });
    setInputFeeling('');
  };

  //onchange event
  const handleAddFeeling = (event) => {
    setInputFeeling(event.target.value);
  };

  return (
    <div>
      <form>
        <label>Feeling? </label>
        <input
          data-testid="input"
          onChange={handleAddFeeling}
          value={inputFeeling}
        />
        <button data-testid="next" type="button" onClick={handleOnClickFeeling}>
          NEXT
        </button>
      </form>
    </div>
  );
}

export default Feeling;
