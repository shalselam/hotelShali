

const EventImages = (props) => {

    return (
        <div>
            <div className="events-imgs max-width glass">
                <img src={props.url} />
                <div >
                    <div> {props.date}</div>
                    <h2>{props.title}</h2>
                    <div>{props.description}</div>
                </div>

            </div>
        </div>
    )
}
export default EventImages