import Footer2 from "../../../layout/footer-2";
import Header2 from "../../../layout/header-2";
import { useState } from "react";

import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
function BlogDetails2({blogData,blogDatas}) {
console.log("deets",blogData);
const router = useRouter();
const slug = router.query
 console.log("slugval",slug);

 const heading = blogData.data[0].attributes.heading;
  console.log("heading",heading)
  const [filterQuery,setFilterQuery] = useState(heading);
 
 
      console.log("slug",slug);
      const relatedBlogs = blogDatas.data.filter((blog) => (
         blog.attributes.heading.toLowerCase().includes(filterQuery.toLowerCase())
     ));
	return (
		<>
			<Header2 />
			<div className="page-content bg-white">
			
				<div className="dlab-bnr-inr style-2 overlay-gradient-dark" style={{ "backgroundImage": "url(images/banner/bnr1.jpg)" }}>
					<div className="container">
						<div className="dlab-bnr-inr-entry">
						 <h1>{blogData.data[0].attributes.heading}</h1> 
				
							<nav aria-label="breadcrumb" className="breadcrumb-row">
								<ul className="breadcrumb">
									<li className="breadcrumb-item"><Link href="/"><a>Home</a></Link></li>
									<li className="breadcrumb-item active" aria-current="page">Blog</li>
								</ul>
							</nav>
						
						</div>
					</div>
				</div>
		
				<section className="content-inner bg-img-fix" style={{ "backgroundImage": "url(images/background/bg2.png)", "backgroundSize": "contain" }}>
					<div className="container">
						<div className="row">
							<div className="col-xl-12">
							
								<div className="dlab-blog blog-single style-2">
									<div className="dlab-media rounded-md shadow">
                                    <Image
                                width={600}
                                height={270}
                                src={
                                    blogData.data[0].attributes.image.data.attributes
                                    .formats.large.url
                                }
                                alt={ blogData.data[0].attributes.heading}
                              />
									</div>
									<div className="dlab-meta m-t30">
										<ul>
											<li className="post-date"><i className="flaticon-clock m-r10"></i>{blogData.data[0].attributes.date}</li>
                                                    <li className="post-author"><i className="flaticon-user m-r10"></i>{blogData.data[0].attributes.author}</li>
											
											
										</ul>
									</div>
									<h4 className="dlab-title">{blogData.data[0].attributes.heading1}</h4>
									<div className="dlab-post-text">
										
										<p>{blogData.data[0].attributes.explaination}</p>
										<blockquote className="blockquote style-2">
											<h4 className="blockquote-content">{blogData.data[0].attributes.blockquote}</h4>
										</blockquote>
										<p>Phasellus vestibulum velit in lacinia ultrices. Aenean vel euismod risus, ac congue lectus. In hac habitasse platea dictumst. Vivamus et felis imperdiet, commodo augue in, condimentum tellus. Quisque a velit a eros malesuada ullamcorper. Maecenas ultricies, nisl vel tristique iaculis, libero ex dictum nisi, quis faucibus velit leo vel sapien. </p>
										<h4 className="m-b30">{blogData.data[0].attributes.heading2}</h4>
                                        <Image
                                width={200}
                                height={200}
                                src={
                                    blogData.data[0].attributes.image.data.attributes
                                    .formats.large.url
                                }
                                alt={ blogData.data[0].attributes.heading}
                              />
										<p>{ blogData.data[0].attributes.para1}</p>
										
									</div>
									<div className="dlab-meta meta-bottom border-top">
										<div className="post-tags">
											Tags:
												<Link href="#"><a>#Child </a></Link> ,
												<Link href="#"><a>#Eduction </a></Link> ,
												<Link href="#"><a>#Money </a></Link> ,
												<Link href="#"><a>#Resturent </a></Link>
										</div>
										<div className="dlab-social-icon primary-light">
											<ul>
												<li><a className="fa fa-facebook" href="https://www.facebook.com/"></a></li>
												<li><a className="fa fa-instagram" href="https://www.instagram.com/"></a></li>
												<li><a className="fa fa-twitter" href="https://ads.twitter.com/login"></a></li>
											</ul>
										</div>
									</div>
								</div>
								<div className="row extra-blog style-2">
									<div className="col-lg-12 m-b30">
										<h2 className="blog-title">Related Blogs</h2>
										<div className="dlab-separator style-1"></div>
									</div>
                                    {relatedBlogs.slice(0, 3).map((blog)=>
                                    <div className="col-lg-4 col-md-6">
                                    <div className="dlab-blog style-1 m-b30">
                                        <div className="dlab-info">
                                            <div className="dlab-meta">
                                                <ul>
                                                    <li className="post-date"><i className="flaticon-clock m-r10"></i>{blog.attributes.date}</li>
                                                    
                                                </ul>
                                            </div>
                                            <h5 className="dlab-title">
                                                <Link href="/blog-details-2"><a>Maecenas laoree efficitur sagittis aliquam eleifend nisl.</a></Link>
                                            </h5>
                                            <p className="m-b0">Aenean pharetra velit , non ullamcorper quam dictum nec. Praesent vel rhoncus dolor, molestie maximus risus.</p>
                                        </div>
                                        <div className="dlab-media">
                                            <Link href="/blog-details-2"><a><img src="images/blog/blog-grid/pic1.jpg" alt="" /></a></Link>
                                        </div>
                                    </div>
                                </div>
                                

                                    )}
									
									
								</div>
								
							</div>
						</div>
					</div>
				</section>

			</div>
			<Footer2 />
		</>
	)
}

export default BlogDetails2;


export async function getServerSideProps(context) {
    // Extract the 'slug' from the router's query parameters
    const slugg = context.query.blog;
  
    // Define the first API URL and bearer token
    const apiUrl1 = `https://aecstrapi-askn4.ondigitalocean.app/api/blogs2s?populate=*&filters[slug][$eq]=${slugg}`;
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
  