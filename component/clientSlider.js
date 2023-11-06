



import Slider from "react-slick";

function ClientSlider({ clients2Data }) {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings}>
        {clients2Data.map((client, index) => (
          <div key={index} className="item">
            <div className="clients-logo">
              <img
                className="logo-main"
                src={client.attributes.image.data.attributes.url}
                alt={`Client Logo ${index}`}
              />
              <img
                className="logo-hover"
                src={client.attributes.image.data.attributes.url} // You might want to specify the "hover" image URL here.
                alt={`Client Logo Hover ${index}`}
              />
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
}

export default ClientSlider;
