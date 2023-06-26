import React from "react"
import ListLink from "../common/icons/linkBlocks"
const HeaderSection = () => {
    return (
        <div className="center" id="home">
            <div className="flex-grow max-width">
                <div className="header_container">
                    <div className="logos">
                        <span className="logo-1 flex-grow">Gebeta </span><span className="logo-2"> Food and Drink</span></div>
                    <ListLink />
                    <div className="link-content flex-grow">
                        <div className=""></div>

                        <div className="link_item">
                            <a >Home</a>
                            <a href="#menu">Menu</a>
                            <a href="#event">Events</a>
                            <a href="#contact">Contact Us</a>
                        </div>
                        <div className="icons_item">
                            <p style={{ fontSize: '1.3rem',color:'white' }}>Follow Us</p>
                            <div className="follow-us">
                                <div><svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.9079 12.2384 16.0396 11.4078 15.9059C10.5771 15.7723 9.80976 15.3801 9.21484 14.7852C8.61991 14.1902 8.22773 13.4229 8.09406 12.5922C7.9604 11.7615 8.09206 10.9099 8.47032 10.1584C8.84858 9.40685 9.45418 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87658 12.63 8C13.4789 8.12588 14.2648 8.52146 14.8717 9.1283C15.4785 9.73515 15.8741 10.5211 16 11.37Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M17.5 6.5H17.51" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                </div>

                                <div><svg width="27" height="27" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.1203 2.11334H15.1203C13.7942 2.11334 12.5225 2.64013 11.5848 3.57781C10.6471 4.51549 10.1203 5.78726 10.1203 7.11334V10.1133H7.12033V14.1133H10.1203V22.1133H14.1203V14.1133H17.1203L18.1203 10.1133H14.1203V7.11334C14.1203 6.84813 14.2257 6.59377 14.4132 6.40624C14.6008 6.2187 14.8551 6.11334 15.1203 6.11334H18.1203V2.11334Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            )
}

            export default HeaderSection