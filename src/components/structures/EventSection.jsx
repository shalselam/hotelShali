
import React from "react"
import EventImages from "../common/eventImage"
const EventSection = () => {
    const imageList = [
        {
            image1: require('../../images/wedding.png'),
            title: "Wedding concert",
            date: "10.05.2023 saturday",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nobis iste fugiat"
        },
        {
            image1: require('../../images/kitfo.jpg'),
            title: "Food Evenet",
            date: "20.05.2023 saturday",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nobis iste fugiat"
        },
        {
            image1: require('../../images/Nafkot-Addis-Events.jpg'),
            title: "Music concert",
            date: "30.05.2023 saturday",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nobis iste fugiat"
        },
        {
            image1: require('../../images/birthday.png'),
            title: " Birth Day Event",
            date: "04.06.2023 saturday",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nobis iste fugiat"
        },
    ]
    return (
        <div className="center" style={{width:'100%'}}>
            <div id="event" className="event_container  max-width  hide-scroll ">
                <h1 style={{ fontSize: '3rem' }}>Events</h1>
                <div className=" all-image-container max-width flex-grow hide-scroll" >
                    <div className="all-image ">
                        {
                            imageList.map((image) => {
                                return (
                                    <EventImages
                                        url={image.image1}
                                        title={image.title}
                                        date={image.date}
                                        description={image.description} ></EventImages>
                                )
                            })

                        }
                    </div>
                </div>

            </div>
        </div>
    )
}

export default EventSection