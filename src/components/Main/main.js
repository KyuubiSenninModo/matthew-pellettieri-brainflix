import "./main.scss";
import IndividualComment from "../IndividualComment/individualComment";
import videoDetails from "../../data/video-details.json";
import viewsIcon from "../../assets/Icons/views.svg";
import likesIcon from "../../assets/Icons/likes.svg";
import avatar from "../../assets/Images/Mohan-muruge.jpg";
import VideoList from "../VideoList/videoList";

function Main(props) {
  return (
    <>
      <h1 className="video--header">{props.title}</h1>
      <div className="mobile--row--one">
        <p className="channel--text">By {props.channel}</p>
        <p className="views">
          <img className="views--icon" src={viewsIcon} alt="views--icon" />
          {props.views}
        </p>
      </div>
      <div className="mobile--row--two">
        <p className="date">{props.timestamp}</p>
        <p className="likes">
          <img className="likes--icon" src={likesIcon} alt="likes--icon" />
          {props.likes}
        </p>
      </div>
      <div className="info--container">
        <div className="tablet--left">
          <p className="channel--text">By {props.channel}</p>
          <p className="date">{props.timestamp}</p>
        </div>
        <div className="tablet--right">
          <p className="views">
            <img className="views--icon" src={viewsIcon} alt="views--icon" />
            {props.views}
          </p>
          <p className="likes">
            <img className="likes--icon" src={likesIcon} alt="likes--icon" />
            {props.likes}
          </p>
        </div>
      </div>
      <p className="video--description">{props.description}</p>
      <p className="comments--number">3 Comments</p>
      <div className="form--container--mobile">
        <img className="avatar" src={avatar} alt="avatar" />
        <form action="" className="comments--form">
          <label htmlFor="comment" className="comments--label">
            JOIN THE CONVERSATION
          </label>
          <input
            type="text"
            id="user--comment"
            placeholder="Add a new comment"
          />
          <button className="comment--button">COMMENT</button>
        </form>
      </div>
      <div className="form--container--tablet">
        <img className="avatar" src={avatar} alt="avatar" />
        <form action="" className="comments--form">
          <label htmlFor="comment" className="comments--label">
            JOIN THE CONVERSATION
          </label>
          <input
            type="text"
            id="user--comment"
            placeholder="Add a new comment"
          />
        </form>
        <button className="comment--button">COMMENT</button>
      </div>
    </>
  );
}

export default Main;
