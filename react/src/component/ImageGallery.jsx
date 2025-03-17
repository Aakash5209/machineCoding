import { useState } from "react";


 export const ImageGallery = () => {

    const images = [
        'https://picsum.photos/id/870/200/300?grayscale&blur=2',
        'https://picsum.photos/200/300/?blur',
        'https://picsum.photos/200/300?grayscale',
        'https://picsum.photos/seed/picsum/200/300'
    ]

    const [currentIndex, setCurrentindex] = useState(0)

    const prevImg = ()=>{
        setCurrentindex((currentIndex-1+images.length)%images.length)
        
    }
    const nextImg = ()=>{
        setCurrentindex((currentIndex+1)%images.length)

    }


  return (
    <div className="gallery">
        <h1>image gallery</h1>
        <img src={images[currentIndex]} alt="random" />

        <div>
            <button onClick={prevImg}>Prev</button>
            <button onClick={nextImg}>Next</button>
        </div>
     
    </div>
  );
}