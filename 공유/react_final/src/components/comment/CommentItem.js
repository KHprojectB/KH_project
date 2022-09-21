import React, {useState} from 'react';

import './CommentItem.css';

const CommentItem = (props) => {

  return (
    <li className='comment-li'>
      <div className="review-box">
            <div className="comment">
                {props.title}
            </div>
        </div>
    </li>
  );
};

export default CommentItem;
