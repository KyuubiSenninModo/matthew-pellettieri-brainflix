import './video.scss';


function Video(props) {
    return (
        <>
        <div className="video--container">
        <video className='main-video' controls poster={props.thumbnail}>
        src={props.currentVideo}
        </video>
        </div>
        </>
    )
}

export default Video;