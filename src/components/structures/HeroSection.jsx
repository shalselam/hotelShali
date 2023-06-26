import React from "react"
import { PlisIcon, MinusIcon } from "../common/icons/Icon"
import { DropBtn, DropTime } from "../common/dropBtn"
import AllHeader from "../common/allheader"
const Hero = () => {
    return (
        <div className="center">
            <div className="flex-grow max-width">
                <div className="hero_container">
                    <div className="center">
                        <div className=" flex-grow max-width">
                            <h1 style={{ fontSize: '3rem' }}> New Takes <br /> On <br /> Old Favorites </h1>
                        </div>
                    </div>

                    <div className="center">
                        <div className="empty-div glass hide-930 ">
                            <div className="guest flex-grow guest-items center" >
                                <span  >Guest <br /> Add Guests</span>
                                <span className="glass-button spans-class center"> <MinusIcon />
                                </span><span>0</span>  <span className="glass-button spans-class center"><PlisIcon /></span>
                            </div>
                            <DropBtn />
                            <DropTime />
                            <button className="flex-grow reserv-btn"><h2>Reserve</h2> </button>
                        </div>


                        <button className="reserv-btn second-btn"><h2>Reserve</h2> </button>
                    </div>
                    
                    <AllHeader />
                </div>
            </div>
        </div>
    )
}

export default Hero