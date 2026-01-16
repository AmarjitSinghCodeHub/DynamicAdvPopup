import React from 'react'
import { RiHome4Line,RiSearchLine,RiAddBoxLine,RiClapperboardFill,RiUserSmileLine,
    RiHeart3Line,RiChat3Line,RiShareForwardLine,RiMore2Line     } from "react-icons/ri";

const ReelsBlock = () => {
  return (
    <>
       <div className='divReelsBlock'>
           <div className='divReel'>
            <div className='divContent'>
             <img src='https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='main-pic'/>
            </div>
    
    <div className='divUserBlock'>
 <div className='divUser'>
             <h1 className='userPic'>
              <img src='https://images.unsplash.com/photo-1647058517574-27dddbe12afc?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='user pic'/>
             </h1>
             <h2 className='userName'>System Engineer</h2>
             <button className='btnFollow'>Follow</button>              
            </div>

            <div className='divTune'>
            <span>
                Stunning soundtracks to make your phone stand out!
            </span>
            </div>
    </div>

    <div className='divSocialBlock'>
      <div className='divLike'>
        <RiHeart3Line className='socialIcon' />
        <h1 className='likeCount'>300</h1>
      </div>

       <div className='divComment'>
       <RiChat3Line className='socialIcon' />
        <h1 className='commentCount'>70</h1>
      </div>
 
   <div className='divShare'>
        <RiShareForwardLine className='socialIcon' />
        <h1 className='shareCount'>120</h1>
      </div>

       <div className='divMoreLink'>
    <RiMore2Line className='socialIcon' />
       </div>


    </div>
           </div> 

      <div className='divReelsControl'>
        <RiHome4Line className="large-icon iCons" />
<RiSearchLine className="large-icon iCons" />
<RiAddBoxLine className="large-icon iCons" />
<RiClapperboardFill className="large-icon iCons" />
<RiUserSmileLine className="large-icon iCons" />
      </div>

       </div>
    </>
  )
}

export default ReelsBlock