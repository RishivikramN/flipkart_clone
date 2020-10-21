import React, {useState} from 'react'
import './Slider.css'
import BannerImage from './BannerImage';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function Slider() {
    let arr=[<BannerImage src={"https://www.netmeds.com/images/cms/wysiwyg/offers/Flipkart/05/Landing_Redeem_Banner.jpg"}/>,
            <BannerImage src={"https://i.pinimg.com/originals/37/e9/e0/37e9e012b6e0f2a3edf47438f066958d.jpg"}/>,
            <BannerImage src={"https://www.etechnocraft.com/wp-content/uploads/2020/01/Flipkart-Product-Listing-Services-banner-1.png"}/>,
            <BannerImage src={"https://4.bp.blogspot.com/-ET2zVjq6zOY/VYc5tD-J1bI/AAAAAAAAA4s/jQ8qQsSNPGo/s1600/Capture.PNG"}/>,
            <BannerImage src={"https://www.karobargain.com/wp-content/uploads/2020/01/Flip-kart-_-banner-_-upcoming.jpg"}/>];
    const [x,setX] = useState(0);

    const handleGoLeft = ()=>{
        (x === 0) ? setX(-100*(arr.length-1)) : setX(x+100);
    }

    const handleGoRight = ()=>{
        (x === -100*(arr.length-1)) ? setX(0) : setX(x-100);
    }

    return (
        <div className="Slider_Container">
            {
                arr.map(
                    (item,index)=>(
                    <div key={index} className="Slide_Content" style={{transform:`translateX(${x}%)`}}>{item}</div>
                    )
                )
            }
            <button id="left_btn" onClick={handleGoLeft}>
                <ArrowBackIosIcon className="arrow_btn"/>
            </button>
            <button id="right_btn" onClick={handleGoRight}>
                <ArrowForwardIosIcon className="arrow_btn"/>
            </button>
        </div>
    )
}

export default Slider
