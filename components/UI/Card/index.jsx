import React from 'react'

function index({title,description,titleClassName,descriptionClassName}) {
  return (
    <div className='card-container'>
        <h1 className={titleClassName}>{title}</h1>
        <p className={descriptionClassName}>{description}</p>
    </div>
  )
}

export default index