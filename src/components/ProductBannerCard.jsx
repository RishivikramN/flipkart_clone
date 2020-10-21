import React from 'react'
import "./ProductBannerCard.css"

function ProductBannerCard({src}) {
    return (
        <div className="ProductBannerCard_Container">
            <img className="ProductBannerCard_image" src={src}/>
        </div>
    )
}

export default ProductBannerCard
