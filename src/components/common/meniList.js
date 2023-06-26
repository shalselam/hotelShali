import { useState } from "react"

const MenuList = (props) => {

    return (
        <div className="" style={{ display: "flex", flexFlow: "wrap", gap: "25px", justifyContent: "center", padding: "20px", }}>

            {props.menuLists.map((food) => {
                return (

                    <div className="food-list " style={{ maxWidth: "400px", width: "100%", borderBottom: "1px solid white" }}>
                        <div className="name-price">
                            <h2>{food.name} </h2>
                            <h2>{food.price} <span style={{ fontSize: '1rem', color: '#bbb' }}>birr</span></h2></div>
                        <div className="disc-ingr">
                            {
                                food.ingredient && <p style={{ color: ' rgba(255, 255, 255, 0.548' }}>{food.ingredient} </p>
                            }
                            {
                                food.description && <p> {food.description} </p>
                            }
                      
                        </div>

                    </div>)
            })}



        </div>
    )
}
export default MenuList