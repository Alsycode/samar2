import { useState } from "react";

function AllServices2() {
	const [open, setOpen] = useState("p2")
	// <i className="flaticon-office"></i>
	// <i className="flaticon-website"></i>
	// <i className="flaticon-pie-charts"></i>
	// <i className="flaticon-dollar"></i>
	// <i className="flaticon-help"></i>
	return (
		<>
		
		{/* <!-- Service --> */}
		<section className="content-inner-2" style={{"backgroundImage":"url(images/background/bg2.png)"}}>
			<div className="container">
				<div className="row">
					<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.1s">
						<div className={`${open === "p1" ? "icon-bx-wraper style-3 box-hover m-b30 active" : "icon-bx-wraper style-3 box-hover m-b30"}`} onMouseOver={() => setOpen("p1")}>
							<div className="icon-bx-sm radius bgl-primary"> 
								<a href="#" className="icon-cell">
									<i className="flaticon-office"></i>
								</a> 
							</div>
							<div className="wraper-effect"></div>
							<div className="icon-content">
								<h4 className="dlab-title m-b15">Strategy & Research</h4>
								<p>Vestibulum a efficitur ex. Ut iaculis dapibus iaculis. Praesent lacus magna, rhoncus quis magna quis, pellentesque luctus leoam iaculis venenatis.</p>
							</div>
						</div>
					</div>
					
					 
				</div>
			</div>
		</section>
		</>
	)
}

export default AllServices2;