import Link from "next/link";
import Slider from "react-slick";

function BlogSlider2({blogData}) {
	console.log("^^^^^^^^^^^^^^^^^^^^^^^^",blogData)
	const filteredBlogs = [];
	
	console.log("filteredBlogs",filteredBlogs)
	const blog1image = blogData[0].attributes.image.data.attributes.formats.large.url;
	const blog2image = blogData[1].attributes.image.data.attributes.formats.large.url;
	const blog3image = blogData[2].attributes.image.data.attributes.formats.large.url;
	const blog4image = blogData[3].attributes.image.data.attributes.formats.large.url;
	
	console.log("**********",blog1image);
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
    };
    return (
        <>
		
			    <Slider
                {...settings}
                className="blog-carousel2 owl-carousel owl-none"
            >
				
			{blogData.map((blog) => ( 
			<Link href={`/blog/blogdetails/${blog.attributes.slug}`}>
			<div className="item">
			
						<div className="dlab-blog style-2 m-b10">
							<div className="dlab-media rounded-md">
							<img src={blog?.attributes?.image?.data?.attributes?.formats?.large?.url}  style={{maxHeight:"400px"}} alt=""/>
							</div>
							<div className="dlab-info">
								<div className="dlab-meta">
									<ul>
										<li className="post-date"><span>25</span> March</li>
										<li className="post-category">
											<a href="#">Design</a>
											<a href="#">Development</a>
										</li>
									</ul>
								</div>
								<h4 className="dlab-title"><Link href="blog-details-2"><a>Maecenas maximus augue eget libero dictum, vitae tempus erat pretium.</a></Link></h4>
								<p className="m-b20">Nunc convallis sagittis dui eu dictum. Cras sodales id ipsum ac aliquam. Phasellus justo quam, sagittis vel sem congue, vehicula tempus elit. Pellentesque ut scelerisque ante.</p>
								<a className="btn-link style-1">Read More</a>
							</div>
						</div>
					</div>
					</Link>
			))}
                   
					
			
            </Slider>
	
        
        </>
    );
}

export default BlogSlider2;