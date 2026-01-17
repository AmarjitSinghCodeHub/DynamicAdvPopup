import React from 'react'
import Feedback from './Feedback'
import userFeeds from '@/data/UserFeeds'

const TabContent = () => {

  return (
    <>
        <>
            <div className='feedbackContainer'>
                <Feedback sender={userFeeds[0]} />
                 <Feedback sender={userFeeds[1]} />
                <Feedback sender={userFeeds[2]} />
            </div>
        </>
    </>
  )

}

export default TabContent