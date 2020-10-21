import React from 'react'
import './HeaderStrip.css'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function HeaderStrip() {
    return (
        <div className="headerstrip_container">
            <div className="headerstrip_innercontainer">
                <div className="headerstrip_contentcontainer">
                    <span className="headerstrip_content">Electronics</span>
                    <ExpandMoreIcon className='expandmore_Icon'/>
                </div>
                <div className="headerstrip_contentcontainer">
                    <span className="headerstrip_content">TVs & Appliances</span>
                    <ExpandMoreIcon className='expandmore_Icon'/>
                </div>
                <div className="headerstrip_contentcontainer">
                    <span className="headerstrip_content">Men</span>
                    <ExpandMoreIcon className='expandmore_Icon'/>
                </div>
                <div className="headerstrip_contentcontainer">
                    <span className="headerstrip_content">Women</span>
                    <ExpandMoreIcon className='expandmore_Icon'/>
                </div>
                <div className="headerstrip_contentcontainer">
                    <span className="headerstrip_content">Baby & Kids</span>
                    <ExpandMoreIcon className='expandmore_Icon'/>
                </div>
                <div className="headerstrip_contentcontainer">
                    <span className="headerstrip_content">Home & Furniture</span>
                    <ExpandMoreIcon className='expandmore_Icon'/>
                </div>
                <div className="headerstrip_contentcontainer">
                    <span className="headerstrip_content">Sports,Books & More</span>
                    <ExpandMoreIcon className='expandmore_Icon'/>
                </div>
                <div className="headerstrip_contentcontainer">
                    <span className="headerstrip_content">Flights</span>
                </div>
                <div className="headerstrip_contentcontainer">
                    <span className="headerstrip_content">Offer Zone</span>
                </div>
            </div>
        </div>
    )
}

export default HeaderStrip
