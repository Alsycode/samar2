import Slider from "react-slick";

function TestimonialSlider2({testimonial2sData}) {
  console.log("testimonial2sData",testimonial2sData)
  // const image = testimonial2sData[0].data.attributes.image.data.attributes.formats.large.url;
  // console.log("2sData",image)
  const settings = {
    dots: true,
    dotsClass: "swiper-container testimonial-thumbs d-flex",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: function (i) {
      return (
        <div className="swiper-wrapper" key={i}>
          <div className="testimonial-pic">
            <img src={testimonial2sData[i].attributes.image.data.attributes.formats.large.url} alt={`Testimonial ${i + 1}`} />
            <div className="shape-bx"></div>
          </div>
        </div>
      );
    },
  };
  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <div className="testimonials-wraper-2">
            {/* <!-- Swiper --> */}
            {/* <div className="swiper-container testimonial-thumbs">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="testimonial-pic">
                    <img src="images/testimonials/pic1.jpg" alt="" />
                    <div className="shape-bx"></div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testimonial-pic">
                    <img src="images/testimonials/pic2.jpg" alt="" />
                    <div className="shape-bx"></div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testimonial-pic">
                    <img src="images/testimonials/pic3.jpg" alt="" />
                    <div className="shape-bx"></div>
                  </div>
                </div>
              </div>
            </div> */}

            <div className="swiper-container testimonial-content">
              <div className="swiper-wrapper">
                <Slider {...settings}>
                {testimonial2sData.map((testimonial, index) => (
            <div className="swiper-slide" key={index}>
              <div className="testimonial-4 quote-right">
                <div className="testimonial-text">
                  <strong className="testimonial-name">{testimonial.attributes.name}</strong>
                  <span className="testimonial-position text-primary m-b20">
                    {testimonial.attributes.designation}
                  </span>
                  <p>{testimonial.attributes.testimonyText}</p>
                </div>
              </div>
            </div>
          ))}
                </Slider>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TestimonialSlider2;
