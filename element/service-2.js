import {useState} from 'react';
import Link from 'next/link';

function Service2({service2sData}) {
    const [open, setOpen] = useState("p2")
	console.log("data222222222222222222222",service2sData)
    return (
      <>
        {/* <!-- Service --> */}
		<section className="content-inner-2" style={{"backgroundImage":"url(images/background/bg2.png)"}}>
			<div className="container">
				<div className="row icon-wraper-1">
					<div className="col-lg-4 col-md-6">
						<div className="section-head style-3 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
							<h6 className="sub-title text-primary bgl-primary m-b15">OUR SERVICES</h6>
							<h2 className="title m-t10">We Are Providing Digital Services</h2>
						</div>
					</div>
					 {service2sData.map((service)=>
							 <div className="col-lg-4 col-md-6">
					<div className={`${open === "p1" ? "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp active" : "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp"}`} onMouseOver={() => setOpen("p1")}>
							<div className="icon-bx-sm radius bgl-primary"> 
								<Link href="#"><a className="icon-cell">
										<i className={service.attributes.icontext}></i>
									</a>
								</Link>		
							</div>
							<div className="wraper-effect"></div>
							<div className="icon-content">
								<h4 className="dlab-title m-b15">{service.attributes.servicetext}</h4>
								<p>{service.attributes.serviceDescription}</p>
							</div>
						</div>
					</div> 
					 )}  
				
					
					
					
					
					
				</div>
			</div>
		</section>
      </>
    )
  }
  
  export default Service2;

 