// import { useBlogData } from './context';
import Link from 'next/link';
import Slider from 'react-slick';
import Image from 'next/image';

function BlogSlider({productsData}) {
  // Access the blogData from context
//   const blogData = useBlogData();
  console.log("sliderteest", productsData);

  // Define your settings for the Slider component
  const settings = {
    dots: false,
    arrows: false,
    centerMode: false,
    slidesToShow: 3,
    draggable: true,
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }

    const trimmedText = text.slice(0, maxLength);
    const lastSpaceIndex = trimmedText.lastIndexOf(' ');

    if (lastSpaceIndex === -1) {
      return trimmedText + '...';
    }

    return trimmedText.slice(0, lastSpaceIndex) + '...';
  };

  const renderArrows = () => {
    // Your arrow rendering logic...
  };

  return (
<>
  <div className="blog-carousel1 owl-btn-1 owl-btn-center-lr owl-btn-primary" style={{ position: 'relative' }}>
    <Slider {...settings}>
    
 {productsData.reverse().slice(0, 4).map((product) => (
      <Link href={`./products/productDetails/${product.attributes.slug}`} >
          <div className="item wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
            <div className="dlab-blog style-1 bg-white text-center">
              <div className="dlab-media">
                {/* <Image
                  src={product.attributes.image.data.attributes.formats.large.url}
                  alt=""
                  width={300}
                  height={300}
                /> */}

<img src={product?.attributes?.image?.data?.attributes?.formats?.large?.url}  style={{maxHeight:"300px"}} alt=""/>
              </div>
              <div className="dlab-info">
                <h5 className="dlab-title">
                
                    {product?.attributes?.name}
             
                </h5>
                <div className='h-400'>
                  <p className="m-b0 ">
                    {truncateText(product.attributes.description, 50)}
                  </p>
                </div>
              </div>
            </div>
          </div>
         </Link>
      ))}   
    </Slider>
    {renderArrows()}
  </div>
</>

  );
}

export default BlogSlider;
