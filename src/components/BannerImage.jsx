import React from 'react'
import './BannerImage.css';

function BannerImage({src}) {
    return (
        <img src={src} alt="" className="Banner_Img"></img>
    )
}

export default BannerImage
