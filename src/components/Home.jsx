import React from 'react'
import "./Home.css"
import HeaderStrip from './HeaderStrip';
import Slider from './Slider';
import MidStrip from './MidStrip';
import ProductBannerCard from './ProductBannerCard';
import Header from './Header';
import ProductCard from './ProductCard';
import ProductSlider from './ProductSlider';

function Home() {
    return (
        <React.Fragment>
            <Header/>
            <HeaderStrip/>
            <Slider/>
            <div className="home_midstrip"> 
                <div className="home_midstrip_product_container">
                    <MidStrip midstriptitle="Deals of the Day" shouldTimerVisible="True" timericonsrc="https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/timer_931251.svg" linktext="VIEW ALL"/>
                    <ProductSlider/>
                </div>
                <ProductBannerCard className="home_productbannercard" src="https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70"/>
            </div>
        </React.Fragment>
    )
}

export default Home
