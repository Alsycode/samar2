import Link from "next/link";
import Header2 from "../layout/header-2";
import Footer2 from "../layout/footer-2";


function AboutUs_2({aboutUs2ComponentsData}) {
	console.log("______________________________",aboutUs2ComponentsData)
	// const { title, image, bullets, bulletText } = aboutUs2ComponentsData  ;
	 const title = aboutUs2ComponentsData[0]?.attributes?.title;
	 const image = aboutUs2ComponentsData[0]?.attributes?.image?.data?.attributes?.formats?.small?.url;
	 const bullet = aboutUs2ComponentsData[0]?.attributes?.bullet;
	 const text = aboutUs2ComponentsData[0]?.attributes?.text;
	 const bulletitem = aboutUs2ComponentsData[0]?.attributes?.bullet[0]?.bullet;
	  console.log("title=========",bulletitem)
    return (
      <>
        {/* <!-- About us --> */}
		<Header2/>
		<section className="content-inner about-wraper-1" style={{"backgroundImage":"url(images/background/bg15.png)","backgroundSize":"contain","backgroundPosition":"center right","backgroundRepeat":"no-repeat"}}>
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6 m-b30 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
						<div className="dz-media left">
							<img src={image} alt=""/>
						</div>
					</div>
					<div className="col-lg-6 m-b30 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
						<div className="section-head style-3">
							<h6 className="sub-title text-primary bgl-primary m-b15">ABOUT US</h6>
							<h2 className="title m-b20">{title}</h2>
							<p>{text}</p>
						</div>

                             <ul className="list-check primary m-b30">
								{bullet.map((item) => {
                                   <li>{item.bullet}.</li>

								} )}

						 </ul>


						<Link href="/about-us-2"><a className="btn btn-primary rounded-xl gradient">Learn More</a></Link>
					</div>
				</div>
			</div>
		</section>
		<Footer2/>
      </>
    )
  }

  export default AboutUs_2;