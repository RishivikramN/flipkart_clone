import React from 'react'
import "./ProductCard.css"

function ProductCard({image,title,offer,caption}) {
    return (
        <div className="product">
            <img src={image} alt=""/>
            <div className="product_info">
                <p className="product_title">{title}</p>
                <p className="product_offer">{offer}</p>
                <p className="product_caption">{caption}</p>
            </div>
        </div>
    )
}

export default ProductCard
