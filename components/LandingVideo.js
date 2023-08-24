'use client';
import ReactPlayer from 'react-player/lazy';
function Video() {
  return (
    <div className="rounded-3xl p-10 mt-10 overflow-hidden">
      <ReactPlayer
        url="https://res.cloudinary.com/dcwz20wdd/video/upload/v1692914879/kite-export-2023-08-25T01_49_37.269_1_b9mzii.mp4"
        controls={true}
        width="100%"
        height="100%"
        className="overflow-hidden rounded-3xl"
      />
    </div>
  );
}
export default Video;
