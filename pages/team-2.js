import Link from "next/link";
import Footer2 from "../layout/footer-2";
import Header2 from "../layout/header-2";

function Team2({data}) {

  console.log("66666666667676766",data)
  return (
    <>
      <Header2 />
      <div className="page-content bg-white">
        {/* <!-- Banner  --> */}
        <div
          className="dlab-bnr-inr style-2 overlay-gradient-dark"
          style={{ backgroundImage: "url(images/banner/bnr1.jpg)" }}
        >
          <div className="container">
            <div className="dlab-bnr-inr-entry">
              <h1>Our Team</h1>
              {/* <!-- Breadcrumb Row --> */}
              <nav aria-label="breadcrumb" className="breadcrumb-row">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Team
                  </li>
                </ul>
              </nav>
              {/* <!-- Breadcrumb Row End --> */}
            </div>
          </div>
        </div>
        {/* <!-- Banner End --> */}

        {/* <!-- Team --> */}
        <section
          className="content-inner"
          style={{
            backgroundImage: "url(images/background/bg18.png)",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="container">
            <div className="row">
{data?.data?.map((item) => (

<Link href={`/teamDetail/${item.attributes.slug}`}>
  <div
className="col-lg-4 col-sm-6 wow fadeInUp"
data-wow-duration="2s"
data-wow-delay="0.1s"
>
<div className="dlab-team style-3 m-b30">
  <div className="dlab-media">
 
     <img src={item?.attributes?.image?.data?.attributes?.formats?.large?.url} alt="" style={{maxHeight:"300px"}}/>

    <div className="overlay-content">
      <ul className="dlab-social-icon">
        <li>
          <a
            href="https://www.facebook.com/"
            className="fa fa-facebook"
          ></a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/"
            className="fa fa-instagram"
          ></a>
        </li>
        <li>
          <a
            href="https://ads.twitter.com/login"
            className="fa fa-twitter"
          ></a>
        </li>
      </ul>
    </div>
  </div>
  <div className="dlab-content">
    <div className="clearfix">
      <h3 className="dlab-name">
       {item?.attributes?.name}
      </h3>
      <span className="dlab-position">
      {item?.attributes?.designation}
      </span>
    </div>
  </div>
</div>
</div>
</Link>


))}


              
              
             
              
             
              
              
              
            </div>
          </div>
        </section>
      </div>
      <Footer2 />
    </>
  );
}

export default Team2;


export async function getServerSideProps() {
  const apiUrl = 'https://aecstrapi-askn4.ondigitalocean.app/api/team2s?populate=*';
  const authToken = '1cc0a576b38722e585230c62dc90b0476114ad0a15b46ab32402682387a85a661eaa649219d2b959481317fc5cb253a6021487927a8c43f6018f1d1ee7e126540c8a9da5cc064e5e77d2cb43ec767894c2319957a651cdf7d84f914d4588c5cd83142301d22bc2c3cfcb8a7a248a6328307ceabd5ef6532153d892e16be6a5e5';

  try {
    const response = await fetch(apiUrl, {
      headers: {
        Authorization: `Bearer ${authToken}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await response.json();

    return {
      props: {
        data,
      },
    };
  } catch (error) {
    return {
      props: {
        error: error.message || 'Something went wrong',
      },
    };
  }
}