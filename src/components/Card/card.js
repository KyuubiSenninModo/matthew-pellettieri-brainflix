import "./card.scss";
import placeHolder from "../../assets/Images/Mohan-muruge.jpg";
import { Link, NavLink } from "react-router-dom";

function Card(props) {
  const videoPath = '/' + props.id;
  return (
    <Link to={videoPath}>
    <>
      <div className="card" >
        <div className="next-videos--container">
          <div className="videos--flex">
            <img className="thumbnail" src={props.image} alt={props.title} />
          </div>
          <div className="description--flex">
            <p className="title">{props.title}</p>
            <p className="channel">{props.channel}</p>
          </div>
        </div>
      </div>
    </>
    </Link>
  );
}

export default Card;
