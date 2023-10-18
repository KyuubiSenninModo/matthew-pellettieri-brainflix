import "./cardDesktop.scss";
import { Link, NavLink } from "react-router-dom";


function CardDesktop(props) {
  const videoPath = '/' + props.id;
  return (
    <>
    <Link to={videoPath}>
      <div className="card-d" onClick={() => props.changeCurrentVideo(props.id)}>
        <div className="next-videos--container-d">
          <div className="videos--flex-d">
            <img className="thumbnail-d" src={props.image} alt={props.title} />
          </div>
          <div className="description--flex-d">
            <p className="title-d">{props.title}</p>
            <p className="channel-d">{props.channel}</p>
          </div>
        </div>
      </div>
    </Link>
    </>
  );
}

export default CardDesktop;
