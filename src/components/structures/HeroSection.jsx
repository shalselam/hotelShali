import {useState} from "react"
import { PlisIcon, MinusIcon } from "../common/icons/Icon"
import { DropBtn, DropTime } from "../common/dropBtn"
import AllHeader from "../common/allheader"

const Hero = () => {
    const [guestCount, setGuestCount] = useState(0);

    const handleMinusClick = () => {
      if (guestCount > 0) {
        setGuestCount(guestCount - 1);
      }
    };
  
    const handlePlusClick = () => {
      setGuestCount(guestCount + 1);
    };
  

    return (
        <div className="center">
            <div className="flex-grow max-width">
                <div className="hero_container">
                    <div className="center">
                        <div className=" flex-grow max-width">
                            <h1 style={{ fontSize: '3rem' }}> New Takes <br /> On <br /> Old Favorites </h1>
                        </div>
                    </div>

                    <div className="center" style={{marginBottom:'50px'}}>
                        <div className="empty-div glass hide-930 ">
                            <div className="guest flex-grow guest-items center" >
                                <span  >Guest <br /> Add Guests</span>
                                <button className="glass-button spans-class center" onClick={handleMinusClick}> <MinusIcon />
                                </button><span>{guestCount}</span>  <button className="glass-button spans-class center" onClick={handlePlusClick}><PlisIcon /></button>
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