import React from 'react'

const DownloadBlock = () => {


  const ShowDownload=()=>{

    const spProgressBar =document.querySelector('.spProgress');
    const spProgPercentage =document.querySelector('.spPercentage');

    spProgressBar.style.visibility='visible';

    let i=0;
    const prog =setInterval(() => {
      if(i < 101)
      {
       spProgPercentage.innerHTML=i + '%';
        spProgressBar.style.setProperty('--progWidth',i + '%');
      }

      i=(i < 101) ? (i + 1) : clearInterval(i);
    }, 40);


  }

  return (
   <>
    <div className='divDownloadBlock'>
    <div className='blockHeader'>

Please download the document <span className='spFileNm'>testsample.pdf</span>.
<br/>
    Click here proceed.
    </div>
    <div className='progressBlock'>
        <span className='spProgress'></span>
    </div>

        <div className='blockFooter'>
        <div className='counterBlock'>
            <span className='spPercentage'></span>
        </div>
        <div className='btnBlock'>
<button className='btnDownload' onClick={ShowDownload}>Download</button>
        </div>
        </div>

    </div>

 <button className='btnPop' onClick={ShowDownload}>Pop</button>


   </>
  )
}

export default DownloadBlock