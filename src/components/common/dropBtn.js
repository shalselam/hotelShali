import { DownIcon } from "./icons/Icon"

 



export const DropBtn = () => {
    return (
        <div className=" guest flex-grow date-class">
       <div> Date <br/> Select Date </div>
       <div className="dropdown">
        <button className="dropbtn"><DownIcon/> </button>
        <div className="dropdown-content">
            <a >a</a>
            <a>ab</a>
            <a>abc</a>
            <a>abcd</a>
        </div>
       </div>
    </div>
    )
 } 
 export const DropTime = () => {
    return (
        <div className="  flex-grow date-class">
       <div> Time <br/> Select Time </div>
       <div className="dropdown">
        <button className="dropbtn"><DownIcon/> </button>
        <div className="dropdown-content">
            <a>a</a>
            <a>ab</a>
            <a>abc</a>
            <a>abcd</a>
        </div>
       </div>
    </div>
    )
 } 