import React, {useState} from 'react'

import CommentsForm from './CommentsForm';

import './Comments.css';

const Comments = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const savecommentDataHandler = (enteredcommentData) => {
    const commentData = {
      ...enteredcommentData,
      id: Math.random().toString(),
    };
    props.onAddcomment(commentData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className='new-comment'>
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Comment</button>
      )}
      {isEditing && (
        <CommentsForm
          onSavecommentData={savecommentDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
}

export default Comments