import { useParams } from 'react-router-dom'
import Playvideo from '../../Compo/Playvideo/Playvideo'
import Recommended from '../../Compo/recommended/Recommended'
import './Video.css'

function Video() {
  const {videoId,categoryId} = useParams();
  
  return ( 
    <div className='play-container'>
      
<Playvideo categoryId={categoryId} videoId={videoId}/>
<Recommended/>

    </div>
  )
}

export default Video