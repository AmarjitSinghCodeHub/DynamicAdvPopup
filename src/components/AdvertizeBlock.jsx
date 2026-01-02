import React from 'react'

const AdvertizeBlock = () => {

    const advList =[
        "It is a structured table of individual case data.",
        "The context determines the specific meaning.",
        "One or more field values or literals can be contained.",
        "The Line List option creates a list of the current dataset."
    ];

    let i=0;
    
    const ShowAdvertizement=()=>{

        let pValue=Math.floor(Math.random() * 10);
        let mValue =Math.floor(Math.random() * 10) * 2;

        let xPosition =Math.floor((Math.random() * 100));
        let yPostion=Math.floor((Math.random() * 120));

        xPosition=(xPosition * ((i/2) == 0 ?  pValue : mValue)) + 'px';
        //   xPosition=(((xPosition * ((i/2) == 0 ?  pValue : mValue)) < 900) ? Math.floor(xPosition/2) : xPosition) + 'px'; 
        yPostion=(yPostion * ((i/2) == 0 ? mValue : pValue)) + 'px';
        
       // yPostion=(((yPostion * ((i/2) == 0 ? mValue : pValue)) < 600) ? Math.floor(yPostion/3) : yPostion) + 'px';

        const advDiv=document.createElement('div');
        advDiv.innerHTML=advList[i++];
        advDiv.classList.add('advClass');
        i= (i < advList.length) ? i++ : 0;

        advDiv.style.setProperty('--posX',xPosition);
        advDiv.style.setProperty('--posY',yPostion);

        document.body.appendChild(advDiv);

        const spanX=document.querySelector('.spX');
        const spanY =document.querySelector('.spY');

        spanX.innerHTML=xPosition;
        spanY.innerHTML=yPostion;

        console.log('width ' + window.innerWidth  + 'height ' + window.innerHeight);

    }

  return (
   <>
   <div className='divObjPos'>
    <span className='spX'>x</span>
    <span className='spY'>y</span>
   </div>
   <button className='btnAdv' onClick={ShowAdvertizement}>Generate</button>
   </>
  )
}

export default AdvertizeBlock