import './individualComment.scss';
import avatar from '../../assets/Images/Mohan-muruge.jpg';

function IndividualComment(props) {
    return (
        <>
        <div className="comment--container">
            <div className="comment--container--left">
                <img src={avatar} alt="avatar" className="avatar" />
            </div>
            <div className="comment--container--right">
                <div className="name--and--date">
                    <p className="name-of-commenter">{props.name}</p>
                    <p className="date">{props.timestamp}</p>
                </div>
                <p className="comment">{props.comment}</p>
            </div>
        </div>
        </>
    )
}

export default IndividualComment;