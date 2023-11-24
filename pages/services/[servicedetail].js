import Footer2 from '../../layout/footer-2';
import Header2 from '../../layout/header-2';
import { useState } from 'react';
import ModalVideo from 'react-modal-video';
import ClientSlider from '../../component/clientSlider';
import AllServices2 from '../../element/all-services-2';
import Testimonial2 from '../../element/testimonial-2';
import Link from 'next/link';

import { useRouter } from 'next/router';
function ServicesDetails2({specificData,allData}) {
  const router = useRouter();
  const slug = router.query.servicedetail;
  console.log("slug",slug);
	console.log("serviceeeeeeeeeeee",specificData)
const text = specificData?.data[0]?.attributes?.textContent;
console.log("text",text)
	const [isOpen, setOpen] = useState(false)
	 const mainimage = specificData?.data[0]?.attributes?.Wideimage?.data?.attributes?.formats?.large?.url;
   const bullets = specificData?.data[0]?.attributes?.bullets;
   const bullet1 = bullets[0]?.bullet;
   const bullet2 = bullets[1]?.bullet;
   const bullet3 = bullets[2]?.bullet;
   const bullet4 = bullets[3]?.bullet;
   console.log("bullets",bullets)
	 console.log("mainimage",mainimage);
	
 	const rangedata = specificData?.data[0]?.attributes?.rangeitem;
 	const rangelabel1 = specificData?.data[0]?.attributes?.rangeitem[0]?.rangelabel;
 	const rangepercent1 = specificData?.data[0]?.attributes?.rangeitem[0]?.rangepercent;
 	const rangelabel2 = specificData?.data[0]?.attributes?.rangeitem[1]?.rangelabel;
 	const rangepercent2 = specificData?.data[0]?.attributes?.rangeitem[1]?.rangepercent; 	
  const rangelabel3 = specificData?.data[0]?.attributes?.rangeitem[2]?.rangelabel;
 	const rangepercent3 = specificData?.data[0]?.attributes?.rangeitem[2]?.rangepercent;
 	const rangelabel4 = specificData?.data[0]?.attributes?.rangeitem[3]?.rangelabel;
 	const rangepercent4 = specificData?.data[0]?.attributes?.rangeitem[3]?.rangepercent;
 console.log("rangedata",rangedata);
 	console.log("mainimage",mainimage);
  const relatedservices = allData?.data.filter((item) => item.attributes.slug === slug  )
  console.log("relatedservices",relatedservices)
  const naviagteBack = () => {
		router.back();
	}
  return (
    <>

     <Header2/>
 <div className="page-content bg-white">
		
		<div className="dlab-bnr-inr style-2 overlay-gradient-dark" style={{"backgroundImage":`url(${mainimage})`}}>
			<div className="container">
				<div className="dlab-bnr-inr-entry">
					<h1>Services Details</h1>
				
					<nav aria-label="breadcrumb" className="breadcrumb-row">
						<ul className="breadcrumb">
							<li className="breadcrumb-item"><Link href="/"><a>Home</a></Link></li>
							<li className="breadcrumb-item active" aria-current="page" onClick={naviagteBack}>Back</li>
						</ul>
					</nav>
			
				</div>
			</div>
		</div>

		<section className="content-inner-2">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="dlab-media m-b30 rounded-md">
							<img src={mainimage} alt=""/>
						</div>
						<div className="dlab-content">
							<div className="m-b40">
								<p>{specificData?.data[0]?.attributes?.textContent}</p>
							</div>
							<div className="row align-items-center m-b30">
								<div className="col-lg-6 m-b30">
									<h3>How You Start {specificData?.data[0]?.attributes?.servicetext} ?</h3>
									<p>{specificData?.data[0]?.attributes?.serviceDescription}</p>
             
                  <ul className="list-arrow primary">
                
                  <li>{bullet1}</li>
                  <li>{bullet2}</li>
                  <li>{bullet3}</li>
                  <li>{bullet4}</li>
                  </ul>
      
									
										
									
								
								</div>
								<div className="col-lg-6">
									<div className="progress-bx overflow-hidden mb-3">
										<div className="progress-info">
											<span className="title">{rangelabel1}</span>
											<span className="progress-value">{rangepercent1}%</span>
										</div>
										<div className="progress mb-3">
											<div className="progress-bar wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.6s" style={{"width":`${rangepercent1}%`}}></div>
										</div>
									</div>
									<div className="progress-bx overflow-hidden mb-3">
										<div className="progress-info">
											<span className="title">{rangelabel2}</span>
											<span className="progress-value">{rangepercent2}</span>
										</div>
										<div className="progress mb-3">
											<div className="progress-bar wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.6s" style={{"width":`${rangepercent2}%`}}></div>
										</div>
									</div>
									<div className="progress-bx overflow-hidden mb-3">
										<div className="progress-info">
											<span className="title">{rangelabel3}</span>
											<span className="progress-value">{rangepercent3}</span>
										</div>
										<div className="progress mb-3">
											<div className="progress-bar wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.6s" style={{"width":`${rangepercent3}%`}}></div>
										</div>
									</div>
									<div className="progress-bx overflow-hidden">
										<div className="progress-info">
											<span className="title">{rangelabel4}</span>
											<span className="progress-value">{rangepercent4}</span>
										</div>
										<div className="progress mb-3">
											<div className="progress-bar wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.6s" style={{"width":`${rangepercent4}%`}}></div>
										</div>
									</div>
								</div>
							</div>
					
							<div className="row">
								<div className="col-lg-12">
									<div className="video-bx style-1 overlay-black-light">
										<img src={mainimage} style={{width:"100%"}}alt=""/>
										<div className="video-btn">
										<a href="#" className="popup-youtube" onClick={()=> setOpen(true)}><i className="flaticon-play"></i></a>
											<h2 className="title">Watch US</h2>
										</div>
										<ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={specificData?.data[0]?.attributes?.videoid} onClose={() => setOpen(false)} /> 
									</div>
								</div>
							</div>

              {relatedservices.map((service) => (
                          <div className="row extra-blog style-2" style={{marginTop:"50px"}}>
                          <div className="col-lg-12 m-b30">
                              <h2 className="blog-title">Related Services</h2>
                              <div className="dlab-separator style-1"></div>
                          </div>
                          <div className="col-lg-4 col-md-6" style={{marginLeft:"10px",marginRight:"10px"}}>
                              <div className="dlab-blog style-1 m-b30">
                                  <div className="dlab-info">
                                      {/* <div className="dlab-meta">
                                          <ul>
                                              <li className="post-date"><i className="flaticon-clock m-r10"></i>7 March, 2020</li>
                                              <li className="post-comment"><Link href="#"><a><i className="flaticon-speech-bubble"></i><span>15</span></a></Link></li>
                                              
                                          </ul>
                                      </div> */}
                                      <h5 className="dlab-title">
                                          <Link href="/blog-details-2"><a>Maecenas laoree efficitur sagittis aliquam eleifend nisl.</a></Link>
                                      </h5>
                                      <p className="m-b0">Aenean pharetra velit , non ullamcorper quam dictum nec. Praesent vel rhoncus dolor, molestie maximus risus.</p>
                                  </div>
                                  <div className="dlab-media">
                                      <Link href="/blog-details-2"><a><img src={service?.attributes?.image?.data?.attributes?.formats?.large?.url} style={{maxHeight:"300px"}}alt="" /></a></Link>
                                  </div>
                              </div>
                          </div>
                          </div>
                    ))}
                  
						</div>
					</div>
				</div>
			</div>
		</section>
		


				
	
		<div className="content-inner-3 bg-white">
			<div className="container">
				<div className="clients-carousel owl-none m-b30 owl-carousel">
				
				</div>
			</div>
		</div>
		
	</div>   
     <Footer2/>
    </>
  )
}

export default ServicesDetails2;

export async function getServerSideProps(context) {
  const slug = context.query.servicedetail;
  const bearerToken = '1cc0a576b38722e585230c62dc90b0476114ad0a15b46ab32402682387a85a661eaa649219d2b959481317fc5cb253a6021487927a8c43f6018f1d1ee7e126540c8a9da5cc064e5e77d2cb43ec767894c2319957a651cdf7d84f914d4588c5cd83142301d22bc2c3cfcb8a7a248a6328307ceabd5ef6532153d892e16be6a5e5';

  const apiUrlSpecific = `https://aecstrapi-askn4.ondigitalocean.app/api/service2s?filters[slug][$eq]=${slug}&populate[0]=Wideimage&populate[1]=rangeitem&populate[2]=bullets`;
  const apiUrlAll = 'https://aecstrapi-askn4.ondigitalocean.app/api/service2s?populate=*';

  try {
    const [specificResponse, allResponse] = await Promise.all([
      fetch(apiUrlSpecific, {
        headers: {
          Authorization: `Bearer ${bearerToken}`,
        },
      }),
      fetch(apiUrlAll, {
        headers: {
          Authorization: `Bearer ${bearerToken}`,
        },
      }),
    ]);

    if (!specificResponse.ok || !allResponse.ok) {
      throw new Error('Failed to fetch data from the API');
    }

    const [specificData, allData] = await Promise.all([
      specificResponse.json(),
      allResponse.json(),
    ]);

    return {
      props: {
        specificData,
        allData,
      },
    };
  } catch (error) {
    console.error('Error fetching data from the API:', error);
    return {
      notFound: true,
    };
  }
}
