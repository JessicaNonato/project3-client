import React from "react";
import { Carousel } from 'react-carousel-minimal';
//image: "https://i.postimg.cc/PxmK018m/banner01.jpg"


const CarouselBrands = () => {
    const data = [
    {
      image: "https://i.postimg.cc/vm9Rd8Z2/01-BANNER-NOMADE.jpg"
    },
    {
      image: "https://i.postimg.cc/HxCqWGJY/02-BANNER-MISSDIOR.jpg"
     
    },
    {
      image: "https://i.postimg.cc/gkkP6Pgr/03-BANNER-CARTIER-CARAT.jpg"
     
    },
    {
      image: "https://i.postimg.cc/VkJQDWQ8/04-BANNER-C-CO-CHANNEL.jpg"
      
    },
    {
      image: "https://i.postimg.cc/mgKxq1BF/05-BANNER-IRRESISTIBLE.jpg"
      
    },
    {
      image: "https://i.postimg.cc/5N7WBkrg/06-BANNER-CHLOE-NATURALLE.jpg"
      
    },
    // {
    //   image: "https://i.postimg.cc/BZBMgc33/banner05.jpg",
    
    // },
    // {
    //   image: "https://images.unsplash.com/photo-1599342166997-58552e91d9f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
    
    // },
    // {
    //   image: "https://images.unsplash.com/photo-1514557179557-9efc4d7949cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    
    // }
  ];


  return (
    <div className="App">
      <div style={{ textAlign: "center" }}>
       
        <div style={{
          padding: "0 20px"
        }}>
          <Carousel
            data={data}
            time={1800}
            width="1600px"
            height="400px"
            radius="5px"
            slideNumber={false}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="white"
            slideImageFit="cover"
            thumbnails={false}
            thumbnailWidth="100px"
            style={{
              textAlign: "contain",
              maxWidth: "1600px",
              maxHeight: "400px",
              margin: "40px auto",
              
            }}
          />
        </div>
      </div>
    </div>
  );
}


export default CarouselBrands;