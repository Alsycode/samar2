import Footer2 from "../../layout/footer-2";
import Header2 from "../../layout/header-2";
import Link from 'next/link';
import Image from "next/image";
import React, { useState } from "react";
function BlogGrid2({blogs}) {
	console.log("blogdata",blogs);
	const itemsPerPage = 2; // Number of items to display per page
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastBlog = currentPage * itemsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - itemsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
   <>
	<Header2/>
      <div className="page-content bg-white">
		{/* <!-- Banner  --> */}
		<div className="dlab-bnr-inr style-2 overlay-gradient-dark" style={{"backgroundImage":"url(images/banner/bnr1.jpg)"}}>
			<div className="container">
				<div className="dlab-bnr-inr-entry">
					<h1>Our Blogs</h1>
					{/* <!-- Breadcrumb Row --> */}
					<nav aria-label="breadcrumb" className="breadcrumb-row">
						<ul className="breadcrumb">
							<li className="breadcrumb-item"><Link href="/"><a>Home</a></Link></li>
							<li className="breadcrumb-item active" aria-current="page">Blog</li>
						</ul>
					</nav>
					{/* <!-- Breadcrumb Row End --> */}
				</div>
			</div>
		</div>
		{/* <!-- Banner End --> */}
		
		{/* <!-- Blog Large --> */}
		<section className="content-inner" style={{"backgroundImage":"url(images/background/bg2.png)"}}>
			<div className="container">
				<div className="row">
					{blogs.map((blog) => (
						  <Link href={`./blog/blogdetails/${blog.attributes.slug}`}>
						<div key={blog.id} className="col-lg-6 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
						<div className="dlab-blog style-1 m-b50 bg-white">
							<div className="dlab-info">
								<div className="dlab-meta">
									<ul>
										<li className="post-date"><i className="flaticon-clock m-r10"></i>{blog.attributes.date}</li>
										<li className="post-author"><i className="flaticon-user m-r10"></i>{blog.attributes.author}</li>
									
									
									</ul>
								</div>
								<h4 className="dlab-title">
									{blog.attributes.heading}
								</h4>
								<p className="m-b0">{blog.attributes.explaination}</p>
							</div>
							<div className="dlab-media dlab-img-effect zoom">
							<Image
                                width={600}
                                height={270}
                                src={
                                  blog.attributes.image.data.attributes
                                    .formats.large.url
                                }
                                alt={blog.attributes.heading}
                              />
							</div>
						</div>
					</div>
					
					</Link>
					)
				)}
					
					<div className="container text-center">
          <ul className="pagination">
            {Array.from({ length: Math.ceil(blogs.length / itemsPerPage) }, (_, i) => i + 1).map((pageNumber) => (
              <li key={pageNumber} className={`page-item ${currentPage === pageNumber ? 'active' : ''}`}>
                <Link href="#">
                  <a className="page-link" onClick={() => paginate(pageNumber)}>
                    {pageNumber}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
					
				
				
                </div>
			</div>
		</section>
		
	</div>
	<Footer2/>
    </>
  )
}

export default BlogGrid2;


export async function getServerSideProps() {
	try {
	  const res = await fetch(
		"https://aecstrapi-askn4.ondigitalocean.app/api/blogs2s?populate=*",
		{
		  headers: {
			Authorization:
			  "Bearer 1cc0a576b38722e585230c62dc90b0476114ad0a15b46ab32402682387a85a661eaa649219d2b959481317fc5cb253a6021487927a8c43f6018f1d1ee7e126540c8a9da5cc064e5e77d2cb43ec767894c2319957a651cdf7d84f914d4588c5cd83142301d22bc2c3cfcb8a7a248a6328307ceabd5ef6532153d892e16be6a5e5",
		  },
		}
	  );
	  const data = await res.json();
  
	  if (Array.isArray(data?.data)) {
		return {
		  props: {
			blogs: data.data,
		  },
		};
	  } else {
		console.error("Error fetching data: Data is not an array");
		return {
		  props: {
			blogs: [],
		  },
		};
	  }
	} catch (error) {
	  console.error("Error fetching data:", error);
	  return {
		props: {
		  blogs: [],
		},
	  };
	}
  }
  
  