import { useState } from "react";

function OurServices2() {
  const [open, setOpen] = useState("p2");

  return (
    <>
      {/* <!-- Services --> */}
      <section
        className="content-inner-2"
        style={{
          backgroundImage: "url(images/background/bg2.png)",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-5 wow fadeInLeft"
              data-wow-duration="2s"
              data-wow-delay="0.2s"
            >
              <div className="section-head style-3 mb-4">
                <h6 className="sub-title text-primary bgl-primary m-b15">
                  OUR VISION
                </h6>
                <h2 className="title">
                  Behind The Story Of Slack Digital Agency
                </h2>
              </div>
              <p>
                Suspendisse potenti. Donec vel massa ut justo efficitur lacinia
                non ut felis. Etiam euismod, magna et efficitur ullamcorper,
                justo justo suscipit tellus, quis egestas lectus nulla ac velit.
                Morbi consequat vehicula tincidunt.
              </p>
              <p>
                Suspendisse purus nibh, lacinia ut rutrum eu, tincidunt
                eleifend ligula. Maecenas tristique est vitae erat semper
                pellentesque.
              </p>
              <p className="m-b30">
                Mauris sollicitudin tincidunt libero ac suscipit. Quisque
                ullamcorper consequat dui ut molestie.
              </p>
            </div>
            <div
              className="col-lg-5 wow fadeInRight text-right" // Add text-right class here
              data-wow-duration="2s"
              data-wow-delay="0.2s"
            >
              {/* Content on the right side */}
              <div className="section-head style-3 mb-4">
                <h6 className="sub-title text-primary bgl-primary m-b15">
                  OUR MISSION
                </h6>
                <h2 className="title">
                  Behind The Story Of Slack Digital Agency
                </h2>
              </div>
              <p>
                Suspendisse potenti. Donec vel massa ut justo efficitur lacinia
                non ut felis. Etiam euismod, magna et efficitur ullamcorper,
                justo justo suscipit tellus, quis egestas lectus nulla ac velit.
                Morbi consequat vehicula tincidunt.
              </p>
              <p>
                Suspendisse purus nibh, lacinia ut rutrum eu, tincidunt
                eleifend ligula. Maecenas tristique est vitae erat semper
                pellentesque.
              </p>
              <p className="m-b30">
                Mauris sollicitudin tincidunt libero ac suscipit. Quisque
                ullamcorper consequat dui ut molestie.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default OurServices2;
