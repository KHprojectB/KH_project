import React, { useState } from 'react';

import './CommentsForm.css';

const CommentsForm = (props) => {

  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const commentData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSavecommentData(commentData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="review-container">
        <div className="writing-zone">
          {/* <label>Comment</label> */}
          <textarea class="writing-box" cols="" rows="2" placeholder="✍🏻 한줄평을 작성해주세요." value={enteredTitle} onChange={titleChangeHandler} maxLength="100"></textarea>
          <button type="submit" className="comment-btn">등록</button>
          {/* <input
            type='text'
            value={enteredTitle}
            onChange={titleChangeHandler}
          /> */}
        </div>
        {/* <div className='new-comment__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className='new-comment__control'>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2022-12-31'
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div> */}
      </div>
      <div className='new-comment__actions'>
        {/* <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type='submit' onClick={props.plusIndexHandler}>Add Comment</button> */}
        
      </div>
    </form>
  );
};

export default CommentsForm;
