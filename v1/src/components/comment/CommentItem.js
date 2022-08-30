import React from 'react';

import './CommentItem.css';

const CommentItem = (props) => {
  return (
    <li>
      <div className='expense-item'>
        <div className='expense-item__description'>
          <h2>{props.title}</h2>
        </div>
      </div>
    </li>
  );
};

export default CommentItem;
