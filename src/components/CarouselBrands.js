import React from "react";
import { Carousel } from 'react-carousel-minimal';



const CarouselBrands = () => {
    const data = [
    {
      image: "https://content.syndigo.com/asset/1ed76417-a5a2-4f1d-9fd1-5c1e5df00e1b/1920.jpeg"
    },
    {
      image: "https://kassioperfumaria.vteximg.com.br/arquivos/ids/206840/banner-lancome.png?v=637847685327030000"
     
    },
    {
      image: "https://cdn.notinoimg.com/c=85/images/gallery/ba/15/N_TopBanner_Chanel_1D.jpg"
     
    },
    {
      image: "https://content.syndigo.com/asset/581fd3a2-7b57-4013-b5bd-39a49e8f879e/1464.webp"
      
    },
    {
      image: "http://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/banner/2021_06_17_15_47_07_9/1fa62cda-d7a7-4793-b717-e5752dcff4f4-62022768-marc-jacobs-newco-2440x1280.jpg"
      
    },
    {
      image: "https://content.syndigo.com/asset/142fba6d-84d1-4b0f-b470-aa2c82463db1/1920.jpeg"
      
    },
    {
      image: "https://cdn.shopify.com/s/files/1/0378/8262/6187/files/Shopify_Banner_MD_1900x666-1_1024x1024.jpg?v=1630388291",
    
    },
    {
      image: "https://kassioperfumaria.vteximg.com.br/arquivos/ids/195382/Banner-bvlgari-omnia-site.png?v=637738064509000000",
    
    },
    {
      image: "https://teascentedlibrary.files.wordpress.com/2020/09/chanel-madm-intense-banner.png",
    
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