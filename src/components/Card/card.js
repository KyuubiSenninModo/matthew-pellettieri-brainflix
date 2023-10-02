import './card.scss';
import placeHolder from '../../assets/Images/Mohan-muruge.jpg';


function Card (props) {
    const clickHandler = () => {
        props.changeCurrentVideo(props.id)
    }
    return (
    <>
    <div className="card" onClick={clickHandler}>
        <div className="next-videos--container">
            <div className="videos--flex">
                <img className='thumbnail' src={props.image} alt={props.title} />
            </div>
            <div className="description--flex">
                <p className="title">{props.title}</p>
                <p className="channel">{props.channel}</p>
            </div>
        </div>
    </div>
    </>
);
}

export default Card;