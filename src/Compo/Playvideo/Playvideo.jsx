import { use, useEffect, useState } from "react";
import "./Playvideo.css";
import { API_KEY, value_converter } from "../Data.js";
import moment from "moment";
import { useParams } from 'react-router-dom'

function Playvideo(props) {
  const [apiData, setApiData] = useState(null);
  const [channelData, setChannelData] = useState(null);
  const [comments, setComments] = useState([]);
  const {videoId} = useParams();

  const fetchVideoData = async () => {
    const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${props.categoryId}&key=${API_KEY} `;
    const res = await fetch(videoDetails_url);
    const json = await res.json();
    setApiData(json.items[0]);
  };

  useEffect(() => {
    fetchVideoData();
  }, [videoId]);

  const fetchOtherData = async () => {
    const channelDetails_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;
    await fetch(channelDetails_url)
      .then((response) => response.json())
      .then((data) => setChannelData(data.items[0]));

    const commentData = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${props.categoryId}&key=${API_KEY}`;
    try {
      const response = await fetch(commentData);
      const data = await response.json();
      setComments(data.items);

    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  useEffect(() => {
    if (apiData?.snippet?.channelId) {
      fetchOtherData();
    }
  }, [apiData]);

  return (
    <div className="play-video">
      {/* { <video  src={`https://www.youtube.com/embed/${props.categoryId}?autoplay=1`}  autoPlay={true} controls={true} />} */}
      <iframe
        width="672"
        height="391"
        src={`https://www.youtube.com/embed/${props.categoryId}?autoplay=1`}
        title="🔥 Top 5 FREE AI Image Generator APIs You Must Try in 2025! (Text to Image Online)"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <h3>{apiData ? apiData.snippet.title : `Title Here`}</h3>
      <div className="play-video-info">
        <p>
          {apiData ? value_converter(apiData.statistics.viewCount) : 0} views
          &bull;{" "}
          {apiData?.snippet?.publishedAt &&
            moment(apiData.snippet.publishedAt).fromNow()}
        </p>
        <div className="">
          <span>
            <img src="/like.png" alt="" />
            {apiData ? value_converter(apiData.statistics.likeCount) : 0}
          </span>

          <span>
            <img src="/dislike.png" alt="" />{" "}
            {apiData ? value_converter(apiData.statistics.dislikeCount) : 0}
          </span>
          <span>
            <img src="/share.png" alt="" />
            share
          </span>
          <span>
            <img src="/save.png" alt="" />
            125
          </span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img
          src={channelData && channelData.snippet.thumbnails.default.url}
          alt=""
        />
        <div className="">
          <p>{apiData && apiData.snippet.channelTitle}</p>
          <span>
            {channelData &&
              value_converter(channelData.statistics.subscriberCount)}{" "}
            Subscribers
          </span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="vid-description">
        <p>{apiData && apiData.snippet.description.slice(0, 250)}</p>
        <hr />
        <h4>
          {apiData && value_converter(apiData.statistics.commentCount)} Comments
        </h4>

        {comments.map((comm, ind) => (
          <div className="comment" key={ind}>
            <img
              src={comm.snippet.topLevelComment.snippet.authorProfileImageUrl}
              alt=""
            />
            <div className="">
              <h3>
                {comm.snippet.topLevelComment.snippet.authorDisplayName}{" "}
                <span>{moment(apiData.snippet.publishedAt).fromNow()}</span>
              </h3>
              <p>{comm.snippet.topLevelComment.snippet.textDisplay}</p>
              <div className="comment-action">
                <img src="/like.png" alt="" />{" "}
                <span>{value_converter(comm.snippet.topLevelComment.snippet.likeCount)}</span>
                <img src="/dislike.png" alt="" />
                <span>0</span>
              </div>
            </div>{" "}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Playvideo;
