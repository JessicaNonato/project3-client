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
      image: "https://www.bordas-sa.com/wp-content/uploads/2020/10/idole-header.jpg"
     
    },
    {
      image: "https://content.syndigo.com/asset/581fd3a2-7b57-4013-b5bd-39a49e8f879e/1464.webp"
      
    },
    {
      image: "https://content.syndigo.com/asset/61a8522b-0369-457f-85f0-fabfe34191ed/1920.webp"
      
    },
    {
      image: "https://content.syndigo.com/asset/142fba6d-84d1-4b0f-b470-aa2c82463db1/1920.jpeg"
      
    },
    {
      image: "https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx",
      caption: "San Francisco"
    },
    {
      image: "https://kassioperfumaria.vteximg.com.br/arquivos/ids/195382/Banner-bvlgari-omnia-site.png?v=637738064509000000",
    
    },
    {
      image: "https://www.sephora.ae/dw/image/v2/BCZG_PRD/on/demandware.static/-/Library-Sites-SephoraV2/en/dwd9374deb/Brands_Visuals/CHLOE/ChloeNomade_630x437.jpg?q=75",
    
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