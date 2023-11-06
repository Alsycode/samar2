import Link from "next/link";
import Slider from "react-slick";
import Image from "next/image";
import { fetchDataFromApi } from "../lib/api";
import { useEffect } from "react";
import { useState } from "react";
function BlogSlider2( { blogs }) {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
		responsive: [
			{
			  breakpoint: 600,
				settings: {
					slidesToScroll: 1,
				}
			}]	
    };
    return (
        <>
            <Slider
                {...settings}
                className="blog-carousel2 owl-carousel owl-none"
            >
					<div className="item">
						{blogs && blogs.data.map((blog) => (
							 
						<div className="dlab-blog style-2 m-b10">
							<div className="dlab-media rounded-md">
						
							<Image
                    src={blog.data.attributes.newsimage.data.attributes.formats.medium.url}
                    alt=""
                    width={300}
                    height={300}
                  />
							</div>
							<div className="dlab-info">
								<div className="dlab-meta">
									<ul>
										<li className="post-date"><span>25</span> March</li>
										<li className="post-category">
											<a href="javascript:void(0);">Design</a>
											<a href="javascript:void(0);">Development</a>
										</li>
									</ul>
								</div>
								<h4 className="dlab-title"><Link href="/blog-details-2"><a>Maecenas maximus augue eget libero dictum, vitae tempus erat pretium.</a></Link></h4>
								<p className="m-b20">Nunc convallis sagittis dui eu dictum. Cras sodales id ipsum ac aliquam. Phasellus justo quam, sagittis vel sem congue, vehicula tempus elit. Pellentesque ut scelerisque ante.</p>
								<Link href="/blog-details-2"><a className="btn-link style-1">Read More</a></Link>
							</div>
						</div>
						))
						}
					</div>
						
					
            </Slider>
        </>
    );
}

export default BlogSlider2;
export async function getStaticProps() {
    const blogs = await fetchDataFromApi("/api/latestnewsblogs?populate=*");

    return {
        props: { blogs },
    };
}