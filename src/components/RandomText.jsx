import React from 'react'

const RandomText = () => {

    let ranText="Machine Learning And Aritificial Intelligence";

    let divRandomText;
    let iChar =0;
 let stInterval;
    const GenDiv=()=>{
      stInterval =0;
      divRandomText=document.createElement('div');
          divRandomText.classList.add('divRandomStr');
          document.body.appendChild(divRandomText);
          stInterval= setInterval(GenRandomTex,10);
    }
    




    const GenRandomTex=()=>{
        let ranArray;
        ranArray=ranText.split("");
        let newRanText=ranArray.map((c,i)=>{
          if(iChar < i)
            return ranArray[Math.floor(Math.random() * (ranArray.length-1))];
          else
          return c;
        }).join("");
        divRandomText.innerText=newRanText;
        iChar=iChar + 0.2;
        if(iChar > ranArray.length)
          clearInterval(stInterval);
       // console.log(iChar || ranArray.length);
    }

  return (
    <>
        <button className='btnRandom' onClick={GenDiv}>Random Gen</button>
    </>
  )
}

export default RandomText