import Head from "next/head";
import { useEffect, useState } from "react";
//import Slider from "react-rangeslider";
//import "react-rangeslider/lib/index.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
//import {useScrollPosition} from "@n8tb1t/use-scroll-position";
//import "../css/skin/skin-1.css";
//import "../css/skin/skin-3.css";
import "../css/style.css";
import "../css/skin/skin-2.css";
import "../styles/globals.css";
import "../styles/switcher.css";

function MyApp({ Component, pageProps }) {
  const [toggle1, setToggle1] = useState(false);
  const [body_, setbody_] = useState();
  const [layout, setLayout] = useState("wide");
  const [header, setHeader] = useState("fixed");
  const [header_, setHeader_] = useState();
  const [sliderValu, setSliderValu] = useState(20);

  useEffect(() => {
    setbody_(document.querySelector("body"));
    setHeader_(document.getElementsByClassName("main-bar-wraper"));
  }, []);

  //let scrollPosition = useScrollPosition();
  function toggle() {
    setToggle1(!toggle1);
  }

  const backGroundImage = (value) => {
    body_.style.backgroundImage = `url(${value})`;
    body_.style.backgroundSize = "auto";
  };

  const chageHeader = (value) => {
    setHeader(value);
    if (value === "fixed") {
      header_[0].classList.add("sticky-header");
      header_[0].classList.remove("sticky-no");
    } else {
      header_[0].classList.add("sticky-no");
      header_[0].classList.remove("sticky-header");
      header_[0].classList.remove("is-fixed");
    }
  };

  const onChange = (value) => {
    setSliderValu(value);
    body_.style.padding = value + "px";
  };

 /*  header === "fixed" && scrollPosition > 10
    ? header_ && header_[0].classList.add("is-fixed")
    : header_ && header_[0].classList.remove("is-fixed"); */

  return (
    <>
		<Head>
			<title>Theme2</title>
			<link rel="icon" type="image/png" sizes="16x16" href="/images/GDH LOGO.png"/>
        </Head>	
      <div className="page-wraper">
        <Component {...pageProps} />
      </div>
  
  
   
    </>
  );
}

export default MyApp;
