import React from 'react'


const CircleMotion = () => {

const colorList =[
'#0FFFFF',
'#007FFF',
'#29AB87',
'#00FF7F',
'#FFEF00',
'#E4D00A',
'#EEDC82',
'#E3F988',
'#00CCFF',
'#9966CC',
'#DE3163',
'#B53389',
'#B57EDC',
'#FFBF00',
'#FF9966',
'#E25822',
'#FFA000',
'#FF8F00',
'#F1B42F',
'#FEFEFA',
'#FFE4E1'
];

let cIndex =0;

  const randomList =[23,32,1,4,9,6,11,14,17,8,9,6,17];
  let iNum=0;
  let circleSize=0;

  const geneCircle=()=>{
        const myCircle = document.createElement('div');
          myCircle.setAttribute('class','miniCircle');
          myCircle.style.bottom=Math.floor(Math.random() * 10) + 'px';
          myCircle.style.left=((Math.floor(Math.random() * 10)) * (Math.floor(Math.random() * 300))) + 'px';
          iNum=(iNum > randomList.length ? iNum + 1 : 0);
          circleSize=((Math.floor(Math.random() * 10)) * randomList[iNum]);
          myCircle.style.width=circleSize + 'px';
          myCircle.style.height=circleSize + 'px';
          cIndex=(cIndex < colorList.length ? cIndex + 1 : 0);
          myCircle.style.backgroundColor=colorList [cIndex];
          document.body.appendChild(myCircle);
          console.log(cIndex);
  }

  const aniCir=setInterval(()=>{
  geneCircle();
  },1000);

  return (
    <>
        <h1 onMouseEnter={geneCircle}>Circle Motion</h1>


    </>
  )
}

export default CircleMotion