import '../../css/image-component.css'


import React from 'react'

function ImageComponent(props) {
  return (
    <img src={props.imageUrl}  className={props.imageClass} />
  )
}

export default ImageComponent
