import {  useEffect, useState } from "react";
import "./Recommended.css";

function Recommended(props) {

  const [apiData, setApiData] = useState([]);

  const fetchRecommendedData = async () => {
    const recommended_url = ` https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=40&regionCode=US&videoCategoryId=${props.categoryId}&key=${API_KEY} `;
    const res = await fetch(recommended_url);
    const json = await res.json();
    setApiData(json.items);
    console.log(json.items);
  }


  useEffect(() => {
    fetchRecommendedData();
  }, [props.categoryId]);
  return (
    <div className="recommended">
    {apiData.map((rec,ind) =>( <div className="side-video-list" key={ind}>
        <img src={rec} alt="" />
        <div className="vid-info">
          <h4>Best channel that help you to be a welllllllllllllll</h4>
          <p>GreatStack</p>
          <p>199k Views</p>
        </div>
      </div>))   } 
    </div>
  );
}

export default Recommended;
