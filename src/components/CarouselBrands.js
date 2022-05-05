import React from "react";
import { Carousel } from 'react-carousel-minimal';



const CarouselBrands = () => {
    const data = [
    {
      image: "https://i.postimg.cc/PxmK018m/banner01.jpg"
    },
    {
      image: "https://i.postimg.cc/QChSDVpv/banner02.jpg"
     
    },
    {
      image: "https://cdn.notinoimg.com/c=85/images/gallery/ba/15/N_TopBanner_Chanel_1D.jpg"
     
    },
    {
      image: "https://content.syndigo.com/asset/581fd3a2-7b57-4013-b5bd-39a49e8f879e/1464.webp"
      
    },
    {
      image: "https://i.postimg.cc/yxjj8Bjx/banner03.jpg"
      
    },
    {
      image: "https://i.postimg.cc/VLs4HrsC/banner04.jpg"
      
    },
    {
      image: "https://i.postimg.cc/BZBMgc33/banner05.jpg",
    
    },
    {
      image: "https://images.unsplash.com/photo-1599342166997-58552e91d9f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
    
    },
    {
      image: "https://images.unsplash.com/photo-1514557179557-9efc4d7949cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    
    }
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }

  return (
    <div className="App">
      <div style={{ textAlign: "center" }}>
       
        <div style={{
          padding: "0 20px"
        }}>
          <Carousel
            data={data}
            time={1800}
            width="1800px"
            height="450px"
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
              textAlign: "center",
              maxWidth: "1800px",
              maxHeight: "500px",
              margin: "40px auto",
            }}
          />
        </div>
      </div>
    </div>
  );
}


export default CarouselBrands;