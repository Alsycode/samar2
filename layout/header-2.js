import Link from 'next/link';
import { useEffect, useState } from 'react';
import Faq from "../pages/faq-2"
function Header2() {
    const [show, setShow] = useState(false);
    const [open, setOpen] = useState("home");
	
	 /* for class fixed  */
	const [scroll, setScroll] = useState(false);
	useEffect(() => {
		window.addEventListener("scroll", () => {
			setScroll(window.scrollY > 50);
		});
	}, []);
    return (
        <>
            <header className="site-header mo-left header-transparent">
                <div className="container">
                    <div className="top-bar">
                        <div className="row d-flex justify-content-between align-items-center">
                            <div className="dlab-topbar-left">
                                <ul>
                                    <li>
                                        <a href="mailto:info@example.com">
                                        <i className="la la-envelope"></i>{" "}
                                      <span style={{ color: 'white' }}>info@example.com</span>  
                                        </a>
                                       
                                    </li>
                                    <li>
                                       <a href="tel:+918289928828" style={{text:"white",textDecoration: 'none',}}>
                                       <i className="ti-phone"></i><span style={{ color: 'white' }}>+91 8891064567 </span>
  </a>
                                     
                                    </li>
                                   
                                      
                                </ul>
                            </div>
                            <div className="dlab-topbar-right">
                                <ul className="dlab-social-icon">
                                    <li>
                                        <a
                                            className="fa fa-facebook"
                                            href="https://en-gb.facebook.com/"
                                        ></a>
                                    </li>
                                    <li>
                                        <a
                                            className="fa fa-instagram"
                                            href="https://www.instagram.com/"
                                        ></a>
                                    </li>
                                    <li>
                                        <a
                                            className="fa fa-twitter"
                                            href="https://twitter.com/login?lang=en"
                                        ></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Main Header --> */}
                <div className={`sticky-header main-bar-wraper navbar-expand-lg ${scroll ? "is-fixed" : ""}`}>
                    <div className="main-bar clearfix ">
                        <div className="container clearfix">
                            {/* <!-- Website Logo --> */}
                            <div className="logo-header mostion logo-dark">
                                <Link href="/">
                                    <a className='text-white'>
                                         <img className="custom-logo-white" src="images/GDH LOGO.png" alt="" />
                                       <img className="custom-logo" src="images/GDH LOGO.png" alt="" />  
                                     
                                    </a>
                                </Link>
                            </div>
                            {/* <!-- Nav Toggle Button --> */}
                            <button
                                className={`navbar-toggler collapsed navicon justify-content-end ${
                                    show ? "open" : ""
                                }`}
                                onClick={() => setShow(!show)}
                            >
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                            {/* <!-- Extra Nav --> */}
                            {/* <div className="extra-nav">
                                <div className="extra-cell">
                                <Link href="/contact-us-2">
                                        <a className="btn btn-primary rounded-xl gradient shadow">Get A Quote</a>
                                    </Link>
                                </div>
                            </div> */}
                            <div
                                className={`header-nav navbar-collapse collapse justify-content-end ${
                                    show ? "show" : ""
                                }`}
                                id="navbarNavDropdown"
                            >
                                <div className="logo-header">
                                    <Link href="/">
                                        <a>
                                            <img src="images/logo-2.png" alt="" />
                                        </a>
                                    </Link>
                                </div>

                                <ul className="nav navbar-nav navbar">
                                   
									<li><Link href="/"><a>Home</a></Link></li>
                                    <li
                                        className={`${
                                            open === "about" ? "open" : ""
                                        }`}
                                    >
                                        <a onClick={() => setOpen("about")}>
                                            <span>Pages</span>
                                            <i className="fa fa-chevron-down"></i>
                                        </a>
                                        <ul className="sub-menu">
                                        <li><Link href="/about"><a>About Us</a></Link></li>
										<li><Link href="/faq-2"><a>Faq</a></Link></li>
                                        {/* <li><Link href="/pricing-table-1"><a>Contact</a></Link></li> */}
										{/* <li><Link href="/team-1"><a>Gallery</a></Link></li> */}
                                        {/* <li><Link href="/coming-soon"><a>Products</a></Link></li> */}
                                        {/* <li><Link href="/error-404"><a>News and Events</a></Link></li>
                                        <li><Link href="/sitedown"><a>Careers</a></Link></li> */}
                                        </ul>
                                    </li>
                                    <li className={`${open === "services" ? "open" : ""}`}><a onClick={() => setOpen("services")}><span>Services</span><i className="fa fa-chevron-down"></i></a>
										<ul className="sub-menu">
											<li><Link href="/services"><a>Services</a></Link></li>
											<li><Link href="/services-details-2"><a>Services Details</a></Link></li>
										</ul>
									</li>
									<li className={`${open === "blog" ? "open" : ""}`}><a onClick={() => setOpen("blog")}><span>Blogs</span></a>
										<ul className="sub-menu">
											<li><Link href="/blog"><a>Blog</a></Link></li>
											{/* <li><Link href="/blog-details-2"><a>Blog Details</a></Link></li> */}
										</ul>
									</li>
                                    <li><Link href="/team-2"><a>Team</a></Link></li>
                                    <li><Link href="/products"><a>Products</a></Link></li>
                                    {/* <li className={`${open === "blog" ? "open" : ""}`}><a onClick={() => setOpen("blog")}><span>Team</span></a>
										<ul className="sub-menu">
											
											 <li><Link href="/blog-details-2"><a>Blog Details</a></Link></li> 
										</ul>
									</li> */}
									<li><Link href="/contact-us-2"><a>Contact Us</a></Link></li>
								
                                    <li><Link href="explore"><a>Explore</a></Link></li>
                                </ul>
                                <div className="dlab-social-icon">
                                    <ul>
                                        <Link href="https://en-gb.facebook.com/">
                                            <a className="fa fa-facebook"></a>
                                        </Link>
                                        <Link href="https://twitter.com/login?lang=en">
                                            <a className="fa fa-twitter"></a>
                                        </Link>
                                        <Link href="https://www.linkedin.com/login">
                                            <a className="fa fa-linkedin"></a>
                                        </Link>
                                        <Link href="https://www.instagram.com/">
                                            <a className="fa fa-instagram"></a>
                                        </Link>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Main Header End --> */}
            </header>
        </>
    );
}

export default Header2;
