import { useState } from "react";

function PricingTable2({ pricingData }) {
  const [open, setOpen] = useState("p2");
  console.log("component", pricingData);

  return (
    <>
      {/* <!-- Pricing Table 2 --> */}
      <div className="pricingtable-row">
        <div className="row justify-content-center">
          {pricingData.map((table) => (
            <div key={table.id} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
              <div className={`${open === "p1" ? "pricingtable-wrapper style-2 m-b30 active" : "pricingtable-wrapper style-2 m-b30"}`} onMouseOver={() => setOpen("p1")}>
                <div className="pricingtable-inner">
                  <div className="pricingtable-title">
                    <h3>{table.attributes.planName}</h3>
                  </div>
                  <div className="icon-bx-sm radius bgl-primary">
                    <div className="icon-cell">
                      <i className={table.attributes.planicon}></i>
                    </div>
                  </div>
                  <div className="pricingtable-price">
                    <h2 className="pricingtable-bx">${table.attributes.planAmount}<small className="pricingtable-type">/Month</small></h2>
                  </div>
                  <ul className="pricingtable-features">
                    {/* {table.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    )} */}
                  </ul>
                  <div className="pricingtable-footer">
                    <a href="/pricing-table-2" className="btn btn-primary gradient shadow rounded-xl">Book Now</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default PricingTable2;
