import { DownIcon } from "./icons/Icon"





export const DropBtn = () => {
    return (
        <div className=" guest flex-grow date-class">
            <div> Date</div>
            <div className="dropdown">
                <button className="dropbtn">
                    <form>
                        <input type="date" className="dropbtn"></input>
                    </form>
                </button>
            </div>
        </div>
    )
}
export const DropTime = () => {
    return (
        <div className="  flex-grow date-class">
            <div> Time  </div>
            <div className="dropdown">
            <button className="dropbtn"><DownIcon /> 
            </button>
                <form className="dropdown-content">
                    <label style={{color:'black'}}>select time</label>
                    <select>
                        <option> <a>06:00pm</a></option>
                        <option> <a>01:30pm</a></option>
                        <option> <a>06:00pm</a></option>
                    <option> <a>06:00pm</a></option>
                </select>
            </form>
        </div>
       
    </div >
    
    )
 } 