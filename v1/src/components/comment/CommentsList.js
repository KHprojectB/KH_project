import React from "react";

import CommentItem from "./CommentItem";
import "./CommentsList.css";

const CommentsList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="comments-list__fallback">아직 리뷰가 없습니다.</h2>;
  }

  return (
    <div className="comment-container">
      <ul className="comments-list">
        {props.items.map((comment) => (
          <CommentItem
            key={comment.id}
            title={comment.title}
            amount={comment.amount}
            date={comment.date}
          />
        ))}
      </ul>
    </div>
  );
};

export default CommentsList;
