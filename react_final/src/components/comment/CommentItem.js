import React, {useState, useContext} from 'react';
import CommentContext from '../../context/comment-context';

import './CommentItem.css';

const CommentItem = (props) => {

  const commentCtx = useContext(CommentContext);
  const [show, setShow] = useState(false);


  return (
    <li className='comment-li'>
      <div className="review-box">
            <div className="comment">
                {props.title}
                {console.log(props.title)}
            </div>
        </div>
    </li>
  );
};

export default CommentItem;
