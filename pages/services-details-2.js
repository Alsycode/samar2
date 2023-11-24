import Footer2 from '../layout/footer-2';
import Header2 from '../layout/header-2';
import { useState } from 'react';
import ModalVideo from 'react-modal-video';
import ClientSlider from '../component/clientSlider';
import AllServices2 from '../element/all-services-2';
import Testimonial2 from '../element/testimonial-2';
import Link from 'next/link';


function ServicesDetails2({data}) {
	console.log("serviceeeeeeeeeeee",data)
const text = data.data[0].attributes.textContent;
console.log("text",text)
	const [isOpen, setOpen] = useState(false)
	 const mainimage = data.data[0].attributes.Wideimage.data.attributes.formats.large.url;
	 console.log("mainimage",mainimage);
	
	const rangedata = data.data[0].attributes.rangeitem;
	const rangelabel1 = data.data[0].attributes.rangeitem[0].rangelabel;
	const rangepercent1 = data.data[0].attributes.rangeitem[0].rangepercent;
	const rangelabel2 = data.data[0].attributes.rangeitem[1].rangelabel;
	const rangepercent2 = data.data[0].attributes.rangeitem[1].rangepercent;
	const rangelabel3 = data.data[0].attributes.rangeitem[2].rangelabel;
	const rangepercent3 = data.data[0].attributes.rangeitem[2].rangepercent;
	const rangelabel4 = data.data[0].attributes.rangeitem[3].rangelabel;
	const rangepercent4 = data.data[0].attributes.rangeitem[3].rangepercent;
console.log("rangedata",rangedata);
	console.log("mainimage",mainimage);

	
  return (
    <>

    <Header2/>
    <div className="page-content bg-white">
		{/* <!-- Banner  --> */}
		<div className="dlab-bnr-inr style-2 overlay-gradient-dark" style={{"backgroundImage":`url(${mainimage})`}}>
			<div className="container">
				<div className="dlab-bnr-inr-entry">
					<h1>Services Details 2</h1>
					{/* <!-- Breadcrumb Row --> */}
					<nav aria-label="breadcrumb" className="breadcrumb-row">
						<ul className="breadcrumb">
							<li className="breadcrumb-item"><Link href="/"><a>Home</a></Link></li>
							<li className="breadcrumb-item active" aria-current="page" >Back</li>
						</ul>
					</nav>
					{/* <!-- Breadcrumb Row End --> */}
				</div>
			</div>
		</div>
		{/* <!-- Banner End --> */}
		
		{/* <!-- Services Details --> */}
		
		<section className="content-inner-2">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="dlab-media m-b30 rounded-md">
							<img src={mainimage} alt=""/>
						</div>
						<div className="dlab-content">
							<div className="m-b40">
								<p>{data.data[0].attributes.textContent}</p>
							</div>
							<div className="row align-items-center m-b30">
								<div className="col-lg-6 m-b30">
									<h3>How You Start Web Development ?</h3>
									<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
									<ul className="list-arrow primary">
										<li>Lorem Ipsum is simply dummy text of the printing.</li>
										<li>Lorem Ipsum has been the industry's standard dummy text ever.</li>
										<li>when an unknown printer took a galley of type and scrambled.</li>
										<li>It has survived not only five centuries, but also the leap.</li>
										<li>Recently with desktop publishing software like Aldus PageMaker.</li>
										<li>Lorem Ipsum is simply dummy text of the printing industry.</li>
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
							{/* <!-- Video --> */}
							<div className="row">
								<div className="col-lg-12">
									<div className="video-bx style-1 overlay-black-light">
										<img src="images/videoimg.jpg" alt=""/>
										<div className="video-btn">
										<a href="#" className="popup-youtube" onClick={()=> setOpen(true)}><i className="flaticon-play"></i></a>
											<h2 className="title">Watch US</h2>
										</div>
										<ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="DAl3dbTnAgw	" onClose={() => setOpen(false)} /> 
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		
		{/* <!-- Service --> */}
		<AllServices2/>
				
		{/* <!-- Testimonials --> */}
		{/* <Testimonial2/> */}
		
		{/* <!-- Clients Logo --> */}
		<div className="content-inner-3 bg-white">
			<div className="container">
				<div className="clients-carousel owl-none m-b30 owl-carousel">
					{/* <ClientSlider/> */}
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
	// Fetch data from the API using the provided URL and bearer token
	const apiUrl = 'https://aecstrapi-askn4.ondigitalocean.app/api/service2s?populate=*';
	const bearerToken = '1cc0a576b38722e585230c62dc90b0476114ad0a15b46ab32402682387a85a661eaa649219d2b959481317fc5cb253a6021487927a8c43f6018f1d1ee7e126540c8a9da5cc064e5e77d2cb43ec767894c2319957a651cdf7d84f914d4588c5cd83142301d22bc2c3cfcb8a7a248a6328307ceabd5ef6532153d892e16be6a5e5';
  
	try {
	  const response = await fetch(apiUrl, {
		method: 'GET',
		headers: {
		  Authorization: `Bearer ${bearerToken}`,
		},
	  });
  
	  if (response.ok) {
		const data = await response.json();
		return {
		  props: { data },
		};
	  } else {
		console.error('Failed to fetch data from the API');
		return {
		  notFound: true,
		};
	  }
	} catch (error) {
	  console.error('Error fetching data from the API:', error);
	  return {
		notFound: true,
	  };
	}
  }