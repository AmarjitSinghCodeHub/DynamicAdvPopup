import React from 'react'

const Feedback = (props) => {
  return (
    <>
        <div className='userFeedback'>
            <h1>{props.sender.UserName}</h1>
            <p className='feedbackPost'>{props.sender.UserFeedBack}</p>
            <p className='feedbackpostdate'>Posted On : {props.sender.FeedDate} </p>
        </div>

    </>
  )
}

export default Feedback