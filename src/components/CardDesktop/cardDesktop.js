import './cardDesktop.scss';


function CardDesktop(props) {
    return (
        <>
        <div className="card-d">
        <div className="next-videos--container-d">
            <div className="videos--flex-d">
                <img className='thumbnail-d' src={props.image} alt={props.title} />
            </div>
            <div className="description--flex-d">
                <p className="title-d">{props.title}</p>
                <p className="channel-d">{props.channel}</p>
            </div>
        </div>
    </div>
        </>
    )
}

export default CardDesktop;