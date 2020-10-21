import React,{useState} from 'react'
import './ProductSlider.css'
import ProductCard from './ProductCard'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'

function ProductSlider() {
    let arr=[
    <ProductCard title="Light" offer="From$40+Extra10%Off" caption="Bright Light" image="https://rukminim1.flixcart.com/image/300/300/k0igia80/emergency-light/m/r/y/ojasmini-rechargeable-led-philips-original-imafk8hy5szj93mg.jpeg?q=70"/>,
    <ProductCard title="Light" offer="From$40+Extra10%Off" caption="Bright Light" image="https://rukminim1.flixcart.com/image/300/300/k0igia80/emergency-light/m/r/y/ojasmini-rechargeable-led-philips-original-imafk8hy5szj93mg.jpeg?q=70"/>,
    <ProductCard title="Light" offer="From$40+Extra10%Off" caption="Bright Light" image="https://rukminim1.flixcart.com/image/300/300/k0igia80/emergency-light/m/r/y/ojasmini-rechargeable-led-philips-original-imafk8hy5szj93mg.jpeg?q=70"/>,
    <ProductCard title="Light" offer="From$40+Extra10%Off" caption="Bright Light" image="https://rukminim1.flixcart.com/image/300/300/k0igia80/emergency-light/m/r/y/ojasmini-rechargeable-led-philips-original-imafk8hy5szj93mg.jpeg?q=70"/>,
    <ProductCard title="Light" offer="From$40+Extra10%Off" caption="Bright Light" image="https://rukminim1.flixcart.com/image/300/300/k0igia80/emergency-light/m/r/y/ojasmini-rechargeable-led-philips-original-imafk8hy5szj93mg.jpeg?q=70"/>,
    <ProductCard title="Light" offer="From$40+Extra10%Off" caption="Bright Light" image="https://rukminim1.flixcart.com/image/300/300/k0igia80/emergency-light/m/r/y/ojasmini-rechargeable-led-philips-original-imafk8hy5szj93mg.jpeg?q=70"/>,
    <ProductCard title="Light" offer="From$40+Extra10%Off" caption="Bright Light" image="https://rukminim1.flixcart.com/image/300/300/k0igia80/emergency-light/m/r/y/ojasmini-rechargeable-led-philips-original-imafk8hy5szj93mg.jpeg?q=70"/>,
    <ProductCard title="Light" offer="From$40+Extra10%Off" caption="Bright Light" image="https://rukminim1.flixcart.com/image/300/300/k0igia80/emergency-light/m/r/y/ojasmini-rechargeable-led-philips-original-imafk8hy5szj93mg.jpeg?q=70"/>
    ];

    const [x,setX] = useState(0);

    const handleGoLeft = ()=>{
        (x === 0) ? setX(-100*(arr.length-5)) : setX(x+100);
    }

    const handleGoRight = ()=>{
        (x === -100*(arr.length-5)) ? setX(0) : setX(x-100);
    }
    
    return (
        <div className="home_productcard_container">
          {
                arr.map(
                    (item,index)=>(
                    <div key={index} className="ProductSlide_Content" style={{transform:`translateX(${x}%)`}}>{item}</div>
                    )
                )
            }
            <button id="productcard_left_btn" onClick={handleGoLeft}>
                <ArrowBackIosIcon className="arrow_btn"/>
            </button>
            <button id="productcard_right_btn" onClick={handleGoRight}>
                <ArrowForwardIosIcon className="arrow_btn"/>
            </button>
        </div>
    )
}

export default ProductSlider
