import { useEffect } from "react";
import AboutUs2 from "../element/aboutUs-2";
import Blog2 from "../element/blog-2";
import Clients2 from "../element/clients-2";
import Counter2 from "../element/counter2";
import OurServices2 from "../element/our-services-2";
import Pricing2 from "../element/pricing-2";
import Projects2 from "../element/Projects-2";
import Service2 from "../element/service-2";
import Slider2 from "../element/slider-2";
import Testimonial2 from "../element/testimonial-2";
import Footer2 from "../layout/footer-2";
import Header2 from "./../layout/header-2";
// import "../css/skin/skin-1.css";
// import { GHSProvider } from "../component/contextProvider";
import { BlogDataProvider } from "../component/context";
import { testimonyDataProvider } from "../component/context";
import { pricingDataProvider } from "../component/context";
import { ProductsDataProvider } from "../component/context";
// import { Testimonial2DataProvider } from "../component/context";
import BlogSlider from "../component/blogslide";
import { ClientDataProvider } from "../component/context";
import { Portfolio2DataProvider } from "../component/context";
import ProductSlider from "../component/productSlider"
function Index2({blogData,pricingData,testimonial2sData,clients2Data,portfolio2Data,productsData}) {
  // console.log("blog",blogData);
  console.log("portfolio2Data",productsData);

  return (
    <>
    {/* <GHSProvider> */}
      <Header2 />
      <div className="page-content bg-white">
        <Slider2 />
        <Service2 />
        <AboutUs2 />
        <ProductsDataProvider>
        <ProductSlider productsData={productsData}/>
        </ProductsDataProvider>
       
        <OurServices2 />
        <Portfolio2DataProvider>
        <Projects2 portfolio2Data={portfolio2Data}/>
        </Portfolio2DataProvider>
      
       
        <pricingDataProvider>
        <Pricing2 pricingData={pricingData} />
        </pricingDataProvider>
       <testimonyDataProvider>
       <Testimonial2 testimonial2sData={testimonial2sData} />
       </testimonyDataProvider>
       
        <BlogDataProvider>
        <Blog2  blogData={blogData}/>
        </BlogDataProvider>
       
        <ClientDataProvider>
        <Clients2 clients2Data={clients2Data} />
</ClientDataProvider>
     
      </div>
      <Footer2 />
      {/* </GHSProvider> */}
    </>
  );
}

export default Index2;

export async function getServerSideProps() {
  const apiUrlBlogs = 'https://aecstrapi-askn4.ondigitalocean.app/api/blogs2s?populate=*';
  const apiUrlTestimony = 'https://aecstrapi-askn4.ondigitalocean.app/api/blogs?populate=*';
  const apiUrlPricing = 'https://aecstrapi-askn4.ondigitalocean.app/api/pricing-tables?populate=*';
  const apiUrlTestimonials2 = 'https://aecstrapi-askn4.ondigitalocean.app/api/testimonial2s?populate=*';
  const apiUrlClients2 = 'https://aecstrapi-askn4.ondigitalocean.app/api/client2s?populate=*';
  const apiUrlPortfolio2 = 'https://aecstrapi-askn4.ondigitalocean.app/api/portfolio2s?populate=*';
  const apiUrlProducts = 'https://aecstrapi-askn4.ondigitalocean.app/api/products?populate=*'; // New URL

  const bearerToken = 'Bearer 1cc0a576b38722e585230c62dc90b0476114ad0a15b46ab32402682387a85a661eaa649219d2b959481317fc5cb253a6021487927a8c43f6018f1d1ee7e126540c8a9da5cc064e5e77d2cb43ec767894c2319957a651cdf7d84f914d4588c5cd83142301d22bc2c3cfcb8a7a248a6328307ceabd5ef6532153d892e16be6a5e5';

  try {
    const [
      blogsResponse,
      testimonyResponse,
      pricingResponse,
      testimonial2sResponse,
      clients2Response,
      portfolio2Response,
      productsResponse, // New response
    ] = await Promise.all([
      fetch(apiUrlBlogs, { headers: { Authorization: bearerToken } }),
      fetch(apiUrlTestimony, { headers: { Authorization: bearerToken } }),
      fetch(apiUrlPricing, { headers: { Authorization: bearerToken } }),
      fetch(apiUrlTestimonials2, { headers: { Authorization: bearerToken }}),
      fetch(apiUrlClients2, { headers: { Authorization: bearerToken }}),
      fetch(apiUrlPortfolio2, { headers: { Authorization: bearerToken } }),
      fetch(apiUrlProducts, { headers: { Authorization: bearerToken }}), // New fetch
    ]);

    if (!blogsResponse.ok) {
      throw new Error('Failed to fetch blog contents data.');
    }
    if (!testimonyResponse.ok) {
      throw new Error('Failed to fetch blog contents data.');
    }
    if (!pricingResponse.ok) {
      throw new Error('Failed to fetch blog contents data.');
    }
    if (!testimonial2sResponse.ok) {
      throw new Error('Failed to fetch testimonial2s data.');
    }
    if (!clients2Response.ok) {
      throw new Error('Failed to fetch client2s data.');
    }
    if (!portfolio2Response.ok) {
      throw new Error('Failed to fetch service2s data.');
    }
    if (!productsResponse.ok) { // Check response for the new URL
      throw new Error('Failed to fetch products data.');
    }

    const [
      blogData,
      testimonyData,
      pricingData,
      testimonial2sData,
      clients2Data,
      portfolio2Data,
      productsData, // New data
    ] = await Promise.all([
      blogsResponse.json(),
      testimonyResponse.json(),
      pricingResponse.json(),
      testimonial2sResponse.json(),
      clients2Response.json(),
      portfolio2Response.json(),
      productsResponse.json(), // New data
    ]);

    return {
      props: {
        blogData: blogData.data,
        testimonyData: testimonyData.data,
        pricingData: pricingData.data,
        testimonial2sData: testimonial2sData.data,
        clients2Data: clients2Data.data,
        portfolio2Data: portfolio2Data.data,
        productsData: productsData.data, // New prop
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        blogData: [],
        testimonyData: [],
        pricingData: [],
        testimonial2sData: [],
        clients2Data: [],
        portfolio2Data: [],
        productsData: [], // New default value
      }
    };
  }
}

