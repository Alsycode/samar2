import Footer2 from '../../layout/footer-2';
import Header2 from '../../layout/header-2';
import { useState } from 'react';
import ModalVideo from 'react-modal-video';
import ClientSlider from '../../component/clientSlider';
import AllServices2 from '../../element/all-services-2';
import Testimonial2 from '../../element/testimonial-2';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from "next/router";
function ServicesDetails2({blogData}) {
	const [isOpen, setOpen] = useState(false)
    const router = useRouter();
   
const sluggy = blogData.data[0].attributes.slug;
console.log("sluggy",sluggy)
  return (
    <>
    <Header2/>
    <div className="page-content bg-white">
		{/* <!-- Banner  --> */}
		<div className="dlab-bnr-inr style-2 overlay-gradient-dark" style={{"backgroundImage":"url(images/banner/bnr1.jpg)"}}>
			<div className="container">
				<div className="dlab-bnr-inr-entry">
                        <h1>{blogData.data[0].attributes.servicetext}</h1>
					{/* <!-- Breadcrumb Row --> */}
					<nav aria-label="breadcrumb" className="breadcrumb-row">
						<ul className="breadcrumb">
							<li className="breadcrumb-item"><Link href="/"><a>Home</a></Link></li>
							<li className="breadcrumb-item active" aria-current="page">Services Details</li>
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
            
                <div className="col-lg-12" key={blogData.data[0].id}>
                  <div className="dlab-media m-b30 rounded-md">
                    <Image
                      width={600}
                      height={270}
                      src={blogData.data[0].attributes.image.data.attributes.formats.large.url}
                      alt={blogData.data[0].attributes.servicetext}
                    />
                  </div>
                  <div className="dlab-content">
                    <div className="m-b40">
                      <h3>{blogData.data[0].attributes.servicetext}</h3>
                     
                    </div>
                    <div className="row align-items-center m-b30">
                      <div className="col-lg-6 m-b30">
                        
                        <p>
                          {blogData.data[0].attributes.serviceDescription}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
             
            </div>
          </div>
        </section>
		
		{/* <!-- Service --> */}
		{/* <AllServices2/> */}
				
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
    // Extract the 'slug' from the router's query parameters
    const slug = context.query.servicedetail;
  
    // Define the first API URL and bearer token
    const apiUrl1 = `https://aecstrapi-askn4.ondigitalocean.app/api/service2s?populate=*&filters[slug][$eq]=${slug}`;
    const bearerToken = "1cc0a576b38722e585230c62dc90b0476114ad0a15b46ab32402682387a85a661eaa649219d2b959481317fc5cb253a6021487927a8c43f6018f1d1ee7e126540c8a9da5cc064e5e77d2cb43ec767894c2319957a651cdf7d84f914d4588c5cd83142301d22bc2c3cfcb8a7a248a6328307ceabd5ef6532153d892e16be6a5e5";
  
    // Define the second API URL
    const apiUrl2 = `https://aecstrapi-askn4.ondigitalocean.app/api/blogs2s?populate=*`;
  
    try {
      // Fetch data from the first API using the provided URL and bearer token
      const response1 = await fetch(apiUrl1, {
        headers: {
          Authorization: `Bearer ${bearerToken}`,
        },
      });
  
      if (!response1.ok) {
        throw new Error(`API request 1 failed with status ${response1.status}`);
      }
  
      // Parse the JSON response for the first URL
      const data1 = await response1.json();
  
      // Fetch data from the second API using the provided URL and bearer token
      const response2 = await fetch(apiUrl2, {
        headers: {
          Authorization: `Bearer ${bearerToken}`,
        },
      });
  
      if (!response2.ok) {
        throw new Error(`API request 2 failed with status ${response2.status}`);
      }
  
      // Parse the JSON response for the second URL
      const data2 = await response2.json();
  
      // Pass the fetched data as props to the component
      return {
        props: {
          blogData: data1,
          blogDatas: data2,
        },
      };
    } catch (error) {
      // Handle errors here, e.g., log them or return an error prop
      return {
        props: { error: error.message },
      };
    }
  }
  