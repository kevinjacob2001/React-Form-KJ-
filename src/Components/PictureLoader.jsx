import { useState } from 'react';
import ImageUploader from 'react-images-upload';


function App() {

  const [pictures,setPictures]=useState([])

function onDrop(picture){
  
   setPictures(pictures.concat(picture))

  }

  return (
    <div style={{width:"80%"}}>

      <ImageUploader
				withIcon={true}
				buttonText='Choose images'
        onChange={onDrop}
        withPreview={true}
				imgExtension={['.jpg', '.gif', '.png', '.gif']}
				maxFileSize={5242880}
			/>
     
    </div>
  );
}

export default App;