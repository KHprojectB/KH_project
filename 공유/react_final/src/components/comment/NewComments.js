import React from 'react'

import CommentsList from './CommentsList'

const NewComments = (props) => {
  return (
    <CommentsList items={props.items} />
  )
}

export default NewComments