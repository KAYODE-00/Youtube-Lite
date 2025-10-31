import { useEffect, useState } from "react";
import "./Recommended.css";
import { API_KEY, value_converter } from "../Data.js";
import { Link } from "react-router-dom";

function Recommended(props) {
  const [apiData, setApiData] = useState([]);

  const fetchRecommendedData = async () => {
    const recommended_url = ` https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=40&regionCode=US&videovideoId=${props.categoryId}&key=${API_KEY} `;
    const res = await fetch(recommended_url);
    const json = await res.json();
    setApiData(json.items);

  };

  useEffect(() => {
    fetchRecommendedData();

  }, [props.videoId]);
  return (
    <div className="recommended" >
      {apiData.map((rec, ind) => (
        <Link to={`/video/${rec.snippet.categoryId}/${rec.id}`} className="side-video-list" key={ind} >
          <img src={rec.snippet.thumbnails.medium.url} alt="" />
          <div className="vid-info">
            <h4>{rec.snippet.title}</h4>
            <p>{rec.snippet.channelTitle}</p>
            <p>{value_converter(rec.statistics.viewCount)}Views</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Recommended;
