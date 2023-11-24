import Link from "next/link";
import { useState } from "react";
import ModalVideo from "react-modal-video";
// import ClientSlider from "../component/clientSlider";
// import Blog2 from "../element/blog-2";
import Counter2 from "../element/counter2";
// import AboutUs_2 from "../element/aboutUs-2"
import Header from "../layout/header-2";
import Footer2 from "../layout/footer-2";
 import Testimonial2 from "../element/testimonial-2";

function AboutUs2({ aboutUsData,
  testimonial2sData,
  clientsData,}) {
  const [isOpen, setOpen] = useState(false);
  console.log("--------------34---------",aboutUsData)
  console.log("11111111111-----------------------",testimonial2sData)
  console.log("wwwww----------------------",clientsData)
  return (
    <>
      <Header />
      <div className="page-content bg-white">
        {/* <!-- Banner  --> */}
        <div
          className="dlab-bnr-inr style-2 overlay-gradient-dark"
          style={{ backgroundImage: "url(images/banner/bnr1.jpg)" }}
        >
          <div className="container">
            <div className="dlab-bnr-inr-entry">
              <h1>About Us 2</h1>
              {/* <!-- Breadcrumb Row --> */}
              <nav aria-label="breadcrumb" className="breadcrumb-row">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    About Us
                  </li>
                </ul>
              </nav>
              {/* <!-- Breadcrumb Row End --> */}
            </div>
          </div>
        </div>
        {/* <!-- Banner End --> */}

        {/* <!-- About --> */}
        <section className="content-inner-2">
          <div className="container">
            <div className="section-head style-3 text-center">
              <h6 className="sub-title text-primary bgl-primary m-b15">
                OUR STEPS
              </h6>
              <h2 className="title">How It’s Work</h2>
            </div>
            <div
              className="row about-wraper-3 wow fadeIn"
              data-wow-duration="2s"
              data-wow-delay="0.2s"
            >
              <div className="col-md-4">
                <div className="icon-bx-wraper style-6 text-center m-b30 icon-up">
                  <div className="icon-bx-lg radius bg-white">
                    <Link href="#"><a className="icon-cell text-primary"
                    >
                      <i className="flaticon-sketch"></i>
                    </a></Link>
                  </div>
                  <div className="icon-content">
                    <h4 className="dlab-title m-b15">Designing</h4>
                    <p>
                      Suspendisse potenti. Pellentesque ornare mattis elit non
                      fermentum. Mauris rhoncus efficitu.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="icon-bx-wraper style-6 text-center m-b30 icon-up">
                  <div className="icon-bx-lg radius bg-white">
                    <Link href="#"><a
                      className="icon-cell text-primary"
                    >
                      <i className="flaticon-vector"></i>
                    </a></Link>
                  </div>
                  <div className="icon-content">
                    <h4 className="dlab-title m-b15">Development</h4>
                    <p>
                      Suspendisse potenti. Pellentesque ornare mattis elit non
                      fermentum. Mauris rhoncus efficitu.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="icon-bx-wraper style-6 text-center m-b30 icon-up">
                  <div className="icon-bx-lg radius bg-white">
                    <Link href="#"><a
                      className="icon-cell text-primary"
                    >
                      <i className="flaticon-startup"></i>
                    </a></Link>
                  </div>
                  <div className="icon-content">
                    <h4 className="dlab-title m-b15">Launching</h4>
                    <p>
                      Suspendisse potenti. Pellentesque ornare mattis elit non
                      fermentum. Mauris rhoncus efficitu.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- About us --> */}
        {/* <AboutUs_2/> */}


        {/* <!-- Counters --> */}
        <Counter2 />

        {/* <!-- Video --> */}
        <section
          className="content-inner-2 wow fadeIn"
          data-wow-duration="2s"
          data-wow-delay="0.2s"
        >
          <div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="video-bx style-1 overlay-black-light">
							<img src="images/video/pic1.jpg" alt=""/>
							<div className="video-btn">
							<a href="#" className="popup-youtube" onClick={()=> setOpen(true)}><i className="flaticon-play"></i></a>
								<h2 className="title">Watch US</h2>
							</div>
							<ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="UpolBSznWp0" onClose={() => setOpen(false)} />
						</div>
					</div>
				</div>
			</div>	
        </section>

        {/* <!-- Testimonials --> */}
{/* <Testimonial2 testimonial2sData={testimonial2sData} /> */}
        {/*  */}

        {/* <!-- Blog --> */}
        {/* <Blog2 /> */}

        {/* <!-- Clients Logo --> */}
        <div className="content-inner-3 bg-white">
			<div className="container">
				<div className="clients-carousel owl-none owl-carousel m-b30">
					{/* <ClientSlider /> */}
				</div>
			</div>
        </div>
      </div>
      <Footer2 />
    </>
  );
}

export default AboutUs2;


export async function getServerSideProps() {
  const apiUrlAboutUsComponents = 'https://aecstrapi-askn4.ondigitalocean.app/api/aboutus2components?populate=*';
  const apiUrlTestimonials2 = 'https://aecstrapi-askn4.ondigitalocean.app/api/testimonial2s?populate=*';
  const apiUrlClients2 = 'https://aecstrapi-askn4.ondigitalocean.app/api/client2s?populate=*';
  const bearerToken = '1cc0a576b38722e585230c62dc90b0476114ad0a15b46ab32402682387a85a661eaa649219d2b959481317fc5cb253a6021487927a8c43f6018f1d1ee7e126540c8a9da5cc064e5e77d2cb43ec767894c2319957a651cdf7d84f914d4588c5cd83142301d22bc2c3cfcb8a7a248a6328307ceabd5ef6532153d892e16be6a5e5';

  try {
    const [
      aboutUsResponse,
      testimonialsResponse,
      clientsResponse,
    ] = await Promise.all([
      fetch(apiUrlAboutUsComponents, {
        headers: {
          Authorization: `Bearer ${bearerToken}`,
        },
      }),
      fetch(apiUrlTestimonials2, {
        headers: {
          Authorization: `Bearer ${bearerToken}`,
        },
      }),
      fetch(apiUrlClients2, {
        headers: {
          Authorization: `Bearer ${bearerToken}`,
        },
      }),
    ]);

    if (
      !aboutUsResponse.ok ||
      !testimonialsResponse.ok ||
      !clientsResponse.ok
    ) {
      throw new Error('Failed to fetch data from one or more endpoints');
    }

    const [
      aboutUsData,
      testimonial2sData,
      clientsData,
    ] = await Promise.all([
      aboutUsResponse.json(),
      testimonialsResponse.json(),
      clientsResponse.json(),
    ]);

    return {
      props: {
        aboutUsData,
        testimonial2sData,
        clientsData,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        error: 'Failed to fetch data from one or more endpoints',
      },
    };
  }
}

