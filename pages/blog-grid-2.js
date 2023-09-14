import Footer2 from "../layout/footer-2";
import Header2 from "../layout/header-2";
import Link from 'next/link';


function BlogGrid2() {
  return (
   <>
	<Header2/>
      <div className="page-content bg-white">
		{/* <!-- Banner  --> */}
		<div className="dlab-bnr-inr style-2 overlay-gradient-dark" style={{"backgroundImage":"url(images/banner/bnr1.jpg)"}}>
			<div className="container">
				<div className="dlab-bnr-inr-entry">
					<h1>Blog Grid 2</h1>
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
					<div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
						<div className="dlab-blog style-1 m-b50 bg-white">
							<div className="dlab-info">
								<div className="dlab-meta">
									<ul>
										<li className="post-date"><i className="flaticon-clock m-r10"></i>7 March, 2020</li>
										<li className="post-author"><i className="flaticon-user m-r10"></i>By Johne Doe</li>
										<li className="post-comment"><Link href="#"><a><i className="flaticon-speech-bubble"></i><span>15</span></a></Link></li>
										<li className="post-share"><i className="flaticon-share"></i>
											<ul>
												<li><a className="fa fa-facebook" href="https://www.facebook.com/"></a></li>
												<li><a className="fa fa-twitter" href="https://ads.twitter.com/login"></a></li>
												<li><a className="fa fa-linkedin" href="https://in.linkedin.com/"></a></li>
											</ul>
										</li>
									</ul>
								</div>
								<h4 className="dlab-title">
									<Link href="/blog-details-2"><a>Donec feugiat mollis nisi in dignissim. Morbi sollicitudin quis lectus vel euismod.</a></Link>
								</h4>
								<p className="m-b0">Maecenas aliquet quam sed tellus cursus, eget sodales elit luctus. Proin blandit sed arcu sed ultricies. Fusce ac ligula vel enim fermentum blandit. </p>
							</div>
							<div className="dlab-media dlab-img-effect zoom">
								<img src="images/blog/blog-grid/pic1.jpg" alt=""/>
							</div>
						</div>
					</div>
					<div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.4s">
						<div className="dlab-blog style-1 m-b50 bg-white">
							<div className="dlab-info">
								<div className="dlab-meta">
									<ul>
										<li className="post-date"><i className="flaticon-clock m-r10"></i>7 March, 2020</li>
										<li className="post-author"><i className="flaticon-user m-r10"></i>By Johne Doe</li>
										<li className="post-comment"><Link href="#"><a><i className="flaticon-speech-bubble"></i><span>15</span></a></Link></li>
										<li className="post-share"><i className="flaticon-share"></i>
											<ul>
												<li><a className="fa fa-facebook" href="https://www.facebook.com/"></a></li>
												<li><a className="fa fa-twitter" href="https://ads.twitter.com/login"></a></li>
												<li><a className="fa fa-linkedin" href="https://in.linkedin.com/"></a></li>
											</ul>
										</li>
									</ul>
								</div>
								<h4 className="dlab-title">
									<Link href="/blog-details-2"><a>Quisque egestas iaculis felis eget placerat ut pulvinar mi elitauctor nec.</a></Link>
								</h4>
								<p className="m-b0">Maecenas aliquet quam sed tellus cursus, eget sodales elit luctus. Proin blandit sed arcu sed ultricies. Fusce ac ligula vel enim fermentum blandit. </p>
							</div>
							<div className="dlab-media dlab-img-effect zoom">
								<img src="images/blog/blog-grid/pic2.jpg" alt=""/>
							</div>
						</div>
					</div>
					<div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.6s">
						<div className="dlab-blog style-1 m-b50 bg-white">
							<div className="dlab-info">
								<div className="dlab-meta">
									<ul>
										<li className="post-date"><i className="flaticon-clock m-r10"></i>7 March, 2020</li>
										<li className="post-author"><i className="flaticon-user m-r10"></i>By Johne Doe</li>
										<li className="post-comment"><Link href="#"><a><i className="flaticon-speech-bubble"></i><span>15</span></a></Link></li>
										<li className="post-share"><i className="flaticon-share"></i>
											<ul>
												<li><a className="fa fa-facebook" href="https://www.facebook.com/"></a></li>
												<li><a className="fa fa-twitter" href="https://ads.twitter.com/login"></a></li>
												<li><a className="fa fa-linkedin" href="https://in.linkedin.com/"></a></li>
											</ul>
										</li>
									</ul>
								</div>
								<h4 className="dlab-title">
									<Link href="/blog-details-2"><a>Fusce sem ligula, imperdiet sed nisi sit amet, euismod posuere dolor.</a></Link>
								</h4>
								<p className="m-b0">Maecenas aliquet quam sed tellus cursus, eget sodales elit luctus. Proin blandit sed arcu sed ultricies. Fusce ac ligula vel enim fermentum blandit. </p>
							</div>
							<div className="dlab-media dlab-img-effect zoom">
								<img src="images/blog/blog-grid/pic3.jpg" alt=""/>
							</div>
						</div>
					</div>
					<div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.8s">
						<div className="dlab-blog style-1 m-b50 bg-white">
							<div className="dlab-info">
								<div className="dlab-meta">
									<ul>
										<li className="post-date"><i className="flaticon-clock m-r10"></i>7 March, 2020</li>
										<li className="post-author"><i className="flaticon-user m-r10"></i>By Johne Doe</li>
										<li className="post-comment"><Link href="#"><a><i className="flaticon-speech-bubble"></i><span>15</span></a></Link></li>
										<li className="post-share"><i className="flaticon-share"></i>
											<ul>
												<li><a className="fa fa-facebook" href="https://www.facebook.com/"></a></li>
												<li><a className="fa fa-twitter" href="https://ads.twitter.com/login"></a></li>
												<li><a className="fa fa-linkedin" href="https://in.linkedin.com/"></a></li>
											</ul>
										</li>
									</ul>
								</div>
								<h4 className="dlab-title">
									<Link href="/blog-details-2"><a>Praesent ut lobortis purus hasellus libero orci, accumsan.</a></Link>
								</h4>
								<p className="m-b0">Maecenas aliquet quam sed tellus cursus, eget sodales elit luctus. Proin blandit sed arcu sed ultricies. Fusce ac ligula vel enim fermentum blandit. </p>
							</div>
							<div className="dlab-media dlab-img-effect zoom">
								<Link href="/blog-details-2"><a><img src="images/blog/blog-grid/pic4.jpg" alt=""/></a></Link>
							</div>
						</div>
					</div>
					<div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="1.0s">
						<div className="dlab-blog style-1 m-b50 bg-white">
							<div className="dlab-info">
								<div className="dlab-meta">
									<ul>
										<li className="post-date"><i className="flaticon-clock m-r10"></i>7 March, 2020</li>
										<li className="post-author"><i className="flaticon-user m-r10"></i>By Johne Doe</li>
										<li className="post-comment"><Link href="#"><a><i className="flaticon-speech-bubble"></i><span>15</span></a></Link></li>
										<li className="post-share"><i className="flaticon-share"></i>
											<ul>
												<li><a className="fa fa-facebook" href="https://www.facebook.com/"></a></li>
												<li><a className="fa fa-twitter" href="https://ads.twitter.com/login"></a></li>
												<li><a className="fa fa-linkedin" href="https://in.linkedin.com/"></a></li>
											</ul>
										</li>
									</ul>
								</div>
								<h4 className="dlab-title">
									<Link href="/blog-details-2"><a>Donec feugiat mollis nisi in dignissim. Morbi sollicitudin quis lectus vel euismod.</a></Link>
								</h4>
								<p className="m-b0">Maecenas aliquet quam sed tellus cursus, eget sodales elit luctus. Proin blandit sed arcu sed ultricies. Fusce ac ligula vel enim fermentum blandit. </p>
							</div>
							<div className="dlab-media dlab-img-effect zoom">
								<img src="images/blog/blog-grid/pic5.jpg" alt=""/>
							</div>
						</div>
					</div>
					<div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="1.2s">
						<div className="dlab-blog style-1 m-b50 bg-white">
							<div className="dlab-info">
								<div className="dlab-meta">
									<ul>
										<li className="post-date"><i className="flaticon-clock m-r10"></i>7 March, 2020</li>
										<li className="post-author"><i className="flaticon-user m-r10"></i>By Johne Doe</li>
										<li className="post-comment"><Link href="#"><a><i className="flaticon-speech-bubble"></i><span>15</span></a></Link></li>
										<li className="post-share"><i className="flaticon-share"></i>
											<ul>
												<li><a className="fa fa-facebook" href="https://www.facebook.com/"></a></li>
												<li><a className="fa fa-twitter" href="https://ads.twitter.com/login"></a></li>
												<li><a className="fa fa-linkedin" href="https://in.linkedin.com/"></a></li>
											</ul>
										</li>
									</ul>
								</div>
								<h4 className="dlab-title">
									<Link href="/blog-details-2"><a>Quisque sem tortor, convallis in arcu eu, accumsan finibus massa donec et sapien risus.</a></Link>
								</h4>
								<p className="m-b0">Maecenas aliquet quam sed tellus cursus, eget sodales elit luctus. Proin blandit sed arcu sed ultricies. Fusce ac ligula vel enim fermentum blandit. </p>
							</div>
							<div className="dlab-media dlab-img-effect zoom">
								<img src="images/blog/blog-grid/pic6.jpg" alt=""/>
							</div>
						</div>
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