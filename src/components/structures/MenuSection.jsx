import React, { useState } from "react"
import MenuList from "../common/meniList"
const Menu = (props) => {
    const lunch = [
        {
            name: 'Yebeg Chikna',
            ingredient: 'meet,berbere dgo yalew konjo frfr',
            price: 280,
            description: 'our sga frifr hve cultural test and you gonna love it'
        },
        {
            name: 'Kitfo',
            ingredient: 'meet,berbere dgo yalew onjo frfr',
            price: 450,
            description: 'our sga frifr hve cultural test and you gonna love it'
        },
        {
            name: 'Yebeg Tibs',
            ingredient: 'meet,berbere dgo yalew onjo frfr',
            price: 250,
            description: 'our sga frifr hve cultural test and you gonna love it'
        },
        {
            name: ' Roasted Chicken ',
            ingredient: 'meet,berbere dgo yalew onjo frfr',
            price: 350,
            description: 'our sga frifr hve cultural test and you gonna love it'
        },
        {
            name: 'Kikils',
            ingredient: 'meet,berbere dgo yalew onjo frfr',
            price: 280,
            description: 'our sga frifr hve cultural test and you gonna love it'
        },
        {
            name: 'Agelgil',
            ingredient: 'meet,berbere dgo yalew onjo frfr',
            price: 350,
            description: 'our sga frifr hve cultural test and you gonna love it'
        },

    ]
    const [menuLists, setMenulist] = useState(lunch)

    const breakfashandler = () => {
        setMenulist([
            {
                name: 'Sgaa frfr',
                ingredient: 'meet,berbere dgo yalew konjo frfr',
                price: 170,
                description: 'our sga frifr hve cultural test and you gonna love it'
            },
            {
                name: 'Kitfo',
                ingredient: 'meet,berbere dgo yalew onjo frfr',
                price: 170,
                description: 'our sga frifr hve cultural test and you gonna love it'
            },
            {
                name: 'Yebeg Tibs',
                ingredient: 'meet,berbere dgo yalew onjo frfr',
                price: 170,
                description: 'our sga frifr hve cultural test and you gonna love it'
            },
            {
                name: 'Yefsk Fetira',
                ingredient: 'meet,berbere dgo yalew onjo frfr',
                price: 170,
                description: 'our sga frifr hve cultural test and you gonna love it'
            },
            {
                name: 'dulet',
                ingredient: 'meet,berbere dgo yalew onjo frfr',
                price: 170,
                description: 'our sga frifr hve cultural test and you gonna love it'
            },
            {
                name: 'Special Egg',
                ingredient: 'meet,berbere dgo yalew onjo frfr',
                price: 170,
                description: 'our sga frifr hve cultural test and you gonna love it'
            },


        ])
    }
    const lunchHandler = () => {
        setMenulist(lunch)
    }
    const snackhandler = () => {
        setMenulist([
            {
                name: ' Ambasha Recipe',
                ingredient: 'meet,berbere dgo yalew konjo frfr',
                price: 120,
                description: 'our sga frifr hve cultural test and you gonna love it'
            },
            {
                name: 'Kita',
                ingredient: 'meet,berbere dgo yalew onjo frfr',
                price: 100,
                description: 'our sga frifr hve cultural test and you gonna love it'
            },
            {
                name: 'chips',
                ingredient: 'meet,berbere dgo yalew onjo frfr',
                price: 100,
                description: 'our sga frifr hve cultural test and you gonna love it'
            },
            {
                name: 'Yefsk Fetira',
                ingredient: 'meet,berbere dgo yalew onjo frfr',
                price: 120,
                description: 'our sga frifr hve cultural test and you gonna love it'
            },
            {
                name: 'noodle',
                ingredient: 'meet,berbere dgo yalew onjo frfr',
                price: 70,
                description: 'our sga frifr hve cultural test and you gonna love it'
            },
            {
                name: 'cinnamen roll',
                ingredient: 'meet,berbere dgo yalew onjo frfr',
                price: 120,
                description: 'our sga frifr hve cultural test and you gonna love it'
            },


        ])

    }
    const dinnerhandler = () => {
        setMenulist(lunch)
    }
    const drinks = [
        {
            name: 'Mirinda',
            price: 35,
        },
        {
            name: 'Cocka cola',
            price: 35,
        },
        {
            name: 'Fanta Ananas',
            price: 35,
        },
        {
            name: 'Fanta orange',
            price: 35,
        },
        {
            name: 'Ssprite',
            price: 35,
        }
    ]
    const softrhandler = () => {
            
        setMenulist(drinks)

    } 
    const hothandler=()=>{
        setMenulist([
            {
                name: 'Machiato',
                price:45,
            },
            {
                name: 'special Tea',
                price: 65,
            },
            {
                name: 'Black Cofee',
                price: 20,
            },
            {
                name: 'Keshir',
                price: 35,
            },
            {
                name: 'Normal Tea',
                price: 35,
            }
        ]

    )
    }
    const alcholrhandler=()=>{
        setMenulist([
            {
                name: 'Habesha',
                price:65,
            },
            {
                name: 'Dashen',
                price: 45,
            },
            {
                name: 'Arada',
                price: 45,
            },
            {
                name: 'Dankira',
                price: 45,
            },
            {
                name: 'Heniken',
                price: 35,
            },
            {
                name: 'St.Giiorgis',
                price: 35,
            },
            {
                name: 'Bedele',
                price: 35,
            },
            {
                name: 'Bedele',
                price: 35,
            }
        ]

    )
    }
    const juicerhandler=()=>{
        setMenulist([
            {
                name: 'Spric',
                price:45,
                ingredient: 'vocdo,mango ,ppay,anans',
            },
            {
                name: 'special Juice',
                price: 65,
                ingredient: 'strawberry,ananas, checholate, Watermelon avocado milk',
            },
            {
                name: 'Milk Shake',
                price: 20,
                ingredient: 'meet,berbere dgo yalew onjo frfr',
            },
            {
                name: 'Mango',
                price: 35,
                ingredient: 'meet,berbere dgo yalew onjo frfr',
            },
            {
                name: 'Chocholate Shake',
                price: 35,
                ingredient: 'meet,berbere dgo yalew onjo frfr',
            }
        ]

    )
    }
    return (
        <div id="menu" className="center bgimage ">
            <div className="overlay-two center flex-grow">
                <div className="flex-grow max-width " style={{ flexDirection: 'column', color: 'white' }}>
                    <div className="max-width menu-list">
                        <h1 style={{ fontSize: '3rem' }}>Menu'2023</h1>
                        <div className="menu-type ">  <div className="dropdown">
                            <button className="dropbtn menu-btn" ><span style={{ fontSize: '2rem' }}>Food</span> </button>
                            <div className="dropdown-content  list-hover">
                                <a onClick={breakfashandler}>Breakfas</a>
                                <a onClick={lunchHandler}>Lunch</a>
                                <a onClick={snackhandler}>Snacks</a>
                                <a onClick={dinnerhandler}>Dinner</a>
                            </div>
                        </div>

                            <div className="dropdown">
                                <button className="dropbtn menu-btn" style={{ fontSize: '2rem' }}>Drinks </button>
                                <div className="dropdown-content list-hover">
                                    <a onClick={softrhandler}>Soft Drinks</a>
                                    <a onClick={hothandler}>Hot drinks</a>
                                    <a onClick={alcholrhandler}>Alcohol</a>
                                    <a onClick={juicerhandler}>Juices</a>
                                </div>
                            </div>
                            <button className="menu-btn"></button></div>
                    </div>
                    <div className="center">
                        <div className="menu_container  flex-grow glass " >
                            <MenuList menuLists={menuLists} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu