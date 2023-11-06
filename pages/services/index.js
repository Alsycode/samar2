import Footer2 from '../../layout/footer-2';
import Header2 from '../../layout/header-2';
import { useState } from "react";
import Link from 'next/link';

function Services2({ data }) {
  const [open, setOpen] = useState("p2");

  console.log("data$$$$", data);

  return (
    <>
      <Header2 />
      <div className="page-content bg-white">
        {/* <!-- Banner  --> */}
        <div className="dlab-bnr-inr style-2 overlay-gradient-dark" style={{ backgroundImage: "url(images/banner/bnr1.jpg)" }}>
          <div className="container">
            <div className="dlab-bnr-inr-entry">
              <h1>Services</h1>
              {/* <!-- Breadcrumb Row --> */}
              <nav aria-label="breadcrumb" className="breadcrumb-row">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item"><Link href="/"><a>Home</a></Link></li>
                  <li className="breadcrumb-item active" aria-current="page">Services</li>
                </ul>
              </nav>
              {/* <!-- Breadcrumb Row End --> */}
            </div>
          </div>
        </div>
        {/* <!-- Banner End --> */}
        
        {/* Service */}
        <div className="container">
          <div className="row">
             {data.data.map((service, index) => (
				<Link href={`./services/${service.attributes.slug}`}>
					    <div className="col-lg-6 col-md-6" key={index}>
                <div
                  className={`${
                    open === "p1"
                      ? "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp active"
                      : "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp"
                  }`}
                  onMouseOver={() => setOpen("p1")}
                >
                  <div className="icon-bx-sm radius bgl-primary">
                    <Link href="#">
                      <a className="icon-cell">
                        <i className="flaticon-office"></i>
                      </a>
                    </Link>
                  </div>
                  <div className="wraper-effect"></div>
                  <div className="icon-content">
                    <h4 className="dlab-title m-b15">
                      {service.attributes.servicetext}
                    </h4>
                    <p>
                      Vestibulum a efficitur ex. Ut iaculis dapibus iaculis.
                      Praesent lacus magna, rhoncus quis magna quis, pellentesque
                      luctus leoam iaculis venenatis.
                    </p>
                  </div>
                </div>
              </div>
				</Link>
          
            ))} 
          </div>
        </div>

        {/* About us */}
        <section className="content-inner-2 about-wraper-1" style={{ backgroundImage: "url(images/background/bg15.png)", backgroundSize: "contain", backgroundPosition: "center right", backgroundRepeat: "no-repeat" }}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 m-b30 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
                <div className="dz-media left">
                  <img src="images/about/pic1.jpg" alt="" />
                </div>
              </div>
              <div className="col-lg-6 m-b30 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
                <div className="section-head style-3">
                  <h6 className="sub-title text-primary bgl-primary m-b15">Our Skills</h6>
                  <h2 className="title m-b20">We Have Best Experience In  All Our Business Services</h2>
                </div>
                
                <div className="progress-bx overflow-hidden mb-3">
                  <div className="progress-info">
                    <span className="title">SEO</span>
                    <span className="progress-value">80%</span>
                  </div>
                  <div className="progress mb-3">
                    <div className="progress-bar wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.6s" style={{ width: "80%" }}></div>
                  </div>
                </div>
                <div className="progress-bx overflow-hidden mb-3">
                  <div className="progress-info">
                    <span className="title">Designing</span>
                    <span className="progress-value">90%</span>
                  </div>
                  <div className="progress mb-3">
                    <div className="progress-bar wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.6s" style={{ width: "90%" }}></div>
                  </div>
                </div>
                <div className="progress-bx overflow-hidden mb-3">
                  <div className="progress-info">
                    <span className="title">Development</span>
                    <span className="progress-value">85%</span>
                  </div>
                  <div className="progress mb-3">
                    <div className="progress-bar wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.6s" style={{ width: "85%" }}></div>
                  </div>
                </div>
                <div className="progress-bx overflow-hidden">
                  <div className="progress-info">
                    <span className="title">Marketing</span>
                    <span className="progress-value">70%</span>
                  </div>
                  <div className="progress mb-3">
                    <div className="progress-bar wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.6s" style={{ width: "70%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
     
        {/* <!-- Service --> */}
        {/* <OurServices2/> */}
        
        {/* <!-- Testimonials --> */}
        {/* <Testimonial2/> */}
        
        {/* <!-- Clients Logo --> */}
        {/* <Clients2/> */}
        
      </div>
      <Footer2 />
    </>
  );
}


export default Services2;
export async function getStaticProps() {
	// Replace 'your-auth-token' with your actual authorization token
	const authToken = '1cc0a576b38722e585230c62dc90b0476114ad0a15b46ab32402682387a85a661eaa649219d2b959481317fc5cb253a6021487927a8c43f6018f1d1ee7e126540c8a9da5cc064e5e77d2cb43ec767894c2319957a651cdf7d84f914d4588c5cd83142301d22bc2c3cfcb8a7a248a6328307ceabd5ef6532153d892e16be6a5e5';
	const apiUrl = 'https://aecstrapi-askn4.ondigitalocean.app/api/service2s?populate=*';
  
	// Define custom headers including the authorization header
	const headers = {
	  'Authorization': `Bearer ${authToken}`,
	};
  
	try {
	  const response = await fetch(apiUrl, { headers });
	  if (!response.ok) {
		throw new Error(`Failed to fetch data from the API: ${response.status} - ${response.statusText}`);
	  }
  
	  const data = await response.json();
  
	  return {
		props: { data },
	  };
	} catch (error) {
	  console.error(error);
	  return {
		props: { data: [] }, // Return an empty array or handle the error as needed
	  };
	}
  }
  