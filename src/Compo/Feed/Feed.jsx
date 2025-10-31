import "./Feed.css";
import { Link } from "react-router-dom";
import { API_KEY, value_converter } from "../Data.js";
import { useEffect, useState } from "react";
import moment from "moment";

function Feed(props) {
  const [data, setData] = useState([]);
  // const fetchData = async () => {
  //   const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${props.category}&key=${API_KEY} `;
  //   await fetch(videoList_url)
  //     .then((response) => response.json())
  //     .then((data) => setData(data.items));
  //   console.log(data.items);
  // };
  const fetchData = async () => {
    const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=500&regionCode=US&videoCategoryId=${props.category}&key=${API_KEY} `;
  const res = await fetch(videoList_url);
  const json = await res.json();
  setData(json.items);
};


  useEffect(() => {
    fetchData();
  }, [props.category]);
  return (
    <div className="feed">
      {data.map((i, ind) => (
        <Link
          to={`video/${i.snippet.categoryId}/${i.id}`}
          className="card"
          key={ind}
        >
          <img src={i.snippet.thumbnails.medium.url} alt="" />
          <h2>{i.snippet.title}</h2>
          <h3>{i.snippet.channelTitle}</h3>
          <p>
            {value_converter(i.statistics.viewCount)} views &bull;{" "}
            {moment(i.snippet.publishedAt).fromNow()}
          </p>
        </Link>
      ))}
    </div>
  );
}

export default Feed;
