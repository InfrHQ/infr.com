'use client';
import ReactPlayer from 'react-player/lazy';
function Video() {
    return (
        <div className="rounded-3xl overflow-hidden">
            <ReactPlayer
                url="https://res.cloudinary.com/dcwz20wdd/video/upload/q_auto:eco/v1695211327/new-replay_vzkrho.mp4"
                width="100%"
                height="100%"
                className="overflow-hidden rounded-3xl"
                playing={true}
                muted={true}
                loop={true}
            />
        </div>
    );
}
export default Video;
