import React from 'react'

const Chooseshow = ({ image, title, desc }) => {
  return (
    <div className='d-flex align-items-center font_bold' style={{gap:"13px",background:"#f5f6f6",padding:"20px"}}>
      <img src={image} alt='title' className='chose_img' />
      <div className='choosenow_center'>
        <h4 className='mb-0'>{title}</h4>
        <p className='mb-0'>{desc}</p>
      </div>
    </div>
  )
}

export default Chooseshow
