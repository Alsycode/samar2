import React, { useState, useEffect } from "react";
import Header2 from "../layout/header-2";
import Footer2 from "../layout/footer-2";
import Link from "next/link";
import Image from "next/image";


import { useRouter } from "next/router";


function Explore({productsData,servicesData}) {
    console.log("productsData",servicesData)
    const [open, setOpen] = useState("p2");
    const [searchQuery, setSearchQuery] = useState("");
//     const url = projectsData[0].attributes.projectimg.data.attributes.formats.thumbnail.url
//   console.log("&*&*&&*",projectsData);console.log("productsData",productsData);console.log("servicesData",servicesData)

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    
    // Check if the search query matches any project slug
    // const projectMatch = projectsData.find((project) =>
    //   project.attributes.slug.toLowerCase().includes(searchQuery.toLowerCase())
    // );
  
    // Check if the search query matches any product slug
    const productMatch = productsData.find((product) =>
      product.attributes.slug.toLowerCase().includes(searchQuery.toLowerCase())
    );
  
    // Check if the search query matches any service slug
    const serviceMatch = servicesData.find((service) =>
      service.attributes.slug.toLowerCase().includes(searchQuery.toLowerCase())
    );
  
    // Redirect to the corresponding detail page if there's a match
 if (productMatch) {
      window.location.href = `/products/productDetails/${productMatch.attributes.slug}`;
    } else if (serviceMatch) {
      window.location.href = `/services/${serviceMatch.attributes.slug}`;
    }
  };
  
//   const filteredBlogsByTag = selectedTag
//   ? projectsData.filter((projects) =>
//   projects.attributes.name.toLowerCase().includes(selectedTag.toLowerCase())
//     )
//   : projectsData;
//   const filteredBlogsBySearch = searchQuery
//   ? projectsData.filter((projects) =>
//   projects.attributes.name.toLowerCase().includes(searchQuery.toLowerCase())
//     )
//   : projectsData;


// const filteredProducts = selectedTag
// ? filteredBlogsByTag
// : filteredBlogsBySearch;




const handleSearchChange = (e) => {
  const searchValue = e.target.value;
  setSearchQuery(searchValue);
  
};

  return (
    <>
      <Header2 />
      <div className="page-content bg-white">
        <div
          className="dlab-bnr-inr overlay-primary-dark"
          style={{ backgroundImage: "url(images/banner/bnr1.jpg)" }}
        >
          <div className="container">
            <div className="dlab-bnr-inr-entry">
              <h1>Explore Our World</h1>
              <nav aria-label="breadcrumb" className="breadcrumb-row">
						<ul className="breadcrumb">
							<li className="breadcrumb-item"><Link href="/"><a>Home</a></Link></li>
							<li className="breadcrumb-item active" aria-current="page">Explore</li>
						</ul>
					</nav>
            </div>
          </div>
        </div>
        <aside className="side-bar">
        <div className="widget widget_search">
                    <h2 className="style-1 text-center">Search</h2>
                    <form className="dlab-form" onSubmit={handleSearchSubmit}>
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="enter search term....."
                          name="search"
                          value={searchQuery}
                          onChange={handleSearchChange}
                        />
                        <span className="input-group-btn">
                          <button className="btn btn-primary" type="submit">
                            <i className="ti-search"></i>
                          </button>
                        </span>
                      </div>
                    </form>
                  </div>
        </aside>
       
        <section className="content-inner" style={{backgroundImage: "url(images/background/bg20.png)", backgroundRepeat: "no-repeat", backgroundSize: "100%", backgroundPosition:"center"}}>
            <div className="container">
                <div className="section-head style-1 text-center">
                   
                    <h2 className="title">What We Offer</h2>
                </div>
                <div className="row pricingtable-wraper-2" style={{display:"flex",justifyContent:"space-between"}}>
                      {/* <div className="col-lg-4 col-md-6">
                        <div className={`${open === "p1" ? "pricingtable-wrapper active style-1 m-b30" : "pricingtable-wrapper style-1 center m-b30"}`} onMouseOver={() => setOpen("p1")}>
                            <div className="pricingtable-inner">
                                <div className="pricingtable-title" style={{ paddingBottom: '40px' }}>
                                <Link href={`./projects`}>
                                <h3 className="title" style={{  borderBottom: '2px solid #000' }}>Projects</h3>
                                  </Link>
                                </div>
                             
                                
                            </div> */}
                           
{/*                            
                            {projectsData.slice(0, 4)
                        .map((projects) => (
                            <Link href={`./projectdetails/${projects.attributes.slug}`}>
                                      <div className="dlab-blog style-1 bg-white text-center m-b50">
                                        
                                        <div className="dlab-media dlab-img-effect zoom">
                                            <Image
                                              width={700}
                                              height={270}
                                              src={projects.attributes.projectimg.data.attributes.formats.thumbnail.url}
                                                
                                              alt="yeah"
                                            />
                                            </div>
                                         <div className="widget-post clearfix" key="1">
                                        <h6>{projects.attributes.projectName}</h6>
                                    
                                    </div>
                                    </div>
                                </Link>
                            ))}
                    */}
                 
         

           
{/*                            
                        </div>
                    </div>
                   */}
        {/* --------------------------------------------------------------------------------------------------------          */}
                    <div className="col-lg-4  col-md-6">
                        <div className={`${open === "p2" ? "pricingtable-wrapper style-1 active m-b30" : "pricingtable-wrapper style-1 center m-b30"}`} onMouseOver={() => setOpen("p2")}>
                            <div className="pricingtable-inner">
                            <div className="pricingtable-title" style={{ paddingBottom: '40px' }}>
                            <Link href={`./products`}>
                                <h3 className="title" style={{  borderBottom: '2px solid #000' }}>Products</h3>
                                </Link>
                                </div>
                                
                             
                               
                            </div>
                            {productsData.slice(0, 4).map((product) => (
                            <Link href={`/products/productDetails/${product.attributes.slug}`}>
                                      <div className="dlab-blog style-1 bg-white text-center m-b50">
                                        
                                        <div className="dlab-media dlab-img-effect zoom">
                                            <Image
                                              width={350}
                                              height={270}
                                              src={product.attributes.image.data.attributes.formats.large.url}
                                                
                                              alt="yeah"
                                            />
                                            </div>
                                         <div className="widget-post clearfix" key="1">
                                        <h6>{product.attributes.name}</h6>
                                    
                                    </div>
                                    </div>
                                </Link>
                            ))}
                
                    
                       
                        </div>
                  
                    </div>
                    <div className="col-lg-4  col-md-12">
                        <div className={`${open === "p3" ? "pricingtable-wrapper active style-1 m-b30" : "pricingtable-wrapper style-1 center m-b30"}`} onMouseOver={() => setOpen("p3")}>
                            <div className="pricingtable-inner">
                            <div className="pricingtable-title" style={{ paddingBottom: '40px' }}>
                            <Link href={`./services-1`}>
                                <h3 className="title" style={{  borderBottom: '2px solid #000' }}>Services</h3>
                                </Link>
                                </div>
                               
                              
                            </div>
                            {servicesData.slice(0, 4)
                        .map((service) => (
                            <Link href={`./services/${service.attributes.slug}`}>
                                      <div className="dlab-blog style-1 bg-white text-center m-b50">
                                        
                                        <div className="dlab-media dlab-img-effect zoom">
                                            <Image
                                              width={350}
                                              height={270}
                                              src={service.attributes.image.data.attributes.formats.large.url}
                                                
                                              alt="yeah"
                                            />
                                            </div>
                                         <div className="widget-post clearfix" key="1">
                                        <h6>{service.attributes.servicetext}</h6>
                                    
                                    </div>
                                    </div>
                                </Link>
                            ))}

             

            
                        </div>
                    </div>
                </div>
            </div>
        </section>
       
      </div> 
      <Footer2 />
    </>
  );
}

export default Explore;


export async function getServerSideProps() {
    const apiUrlProducts = 'https://aecstrapi-askn4.ondigitalocean.app/api/product2s?populate=*';
    const apiUrlServices = 'https://aecstrapi-askn4.ondigitalocean.app/api/service2s?populate=*';
    const bearerToken = 'Bearer 1cc0a576b38722e585230c62dc90b0476114ad0a15b46ab32402682387a85a661eaa649219d2b959481317fc5cb253a6021487927a8c43f6018f1d1ee7e126540c8a9da5cc064e5e77d2cb43ec767894c2319957a651cdf7d84f914d4588c5cd83142301d22bc2c3cfcb8a7a248a6328307ceabd5ef6532153d892e16be6a5e5';
  
    try {
        const [productsResponse, servicesResponse] = await Promise.all([
            fetch(apiUrlProducts, { headers: { Authorization: bearerToken } }),
            fetch(apiUrlServices, { headers: { Authorization: bearerToken } }),
        ]);
  
        if (!productsResponse.ok || !servicesResponse.ok) {
            throw new Error('Failed to fetch data.');
        }
  
        const [productsData, servicesData] = await Promise.all([
            productsResponse.json(),
            servicesResponse.json(),
        ]);
  
        return {
            props: {
                productsData: productsData.data,
                servicesData: servicesData.data,
            },
        };
    } catch (error) {
        console.error('Error fetching data:', error);
        return {
            props: {
                productsData: [],
                servicesData: [],
            },
        };
    }
}
