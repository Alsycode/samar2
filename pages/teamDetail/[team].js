import Link from "next/link";
import Footer2 from "../../layout/footer-2";
import Header2 from "../../layout/header-2";
import { useRouter } from "next/router";
function Team2({data}) {
const router = useRouter();
const slug = router.query;
  console.log("66666666667676766",data)
  const image = data?.data[0]?.attributes.image.data.attributes.formats.medium.url;
  console.log("image",image)
  return (
    <>
      <Header2 />
      <div className="page-content bg-white">
        {/* <!-- Banner  --> */}
        <div
          className="dlab-bnr-inr  overlay-gradient-dark"
          style={{ backgroundImage: "url(images/banner/bnr1.jpg)",height:"200px"}}
          
        >
            </div>
          </div>
      <section className="content-inner about-wraper-1" style={{"backgroundImage":"url(images/background/bg15.png)","backgroundSize":"contain","backgroundPosition":"center right","backgroundRepeat":"no-repeat"}}>
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6 m-b30 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
						<div className="dz-media left">
							<img src={image} style ={{maxHeight:"700px"}}alt=""/> 
						</div>
					</div>
					<div className="col-lg-6 m-b30 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
						<div className="section-head style-3">
							<h6 className="sub-title text-primary bgl-primary m-b15">{data?.data[0]?.attributes.name}</h6>
							<h2 className="title m-b20">{data?.data[0]?.attributes.designation}</h2>
							<p>{data?.data[0]?.attributes.description}</p> 
						</div>

                             {/* <ul className="list-check primary m-b30">
								{bullet.map((item) => {
                                   <li>{item.bullet}.</li>

								} )}

						 </ul> */}


						{/* <Link href="/about-us-2"><a className="btn btn-primary rounded-xl gradient">Learn More</a></Link> */}
					</div>
				</div>
			</div>
		</section>
      <Footer2 />
    </>
  );
}

export default Team2;


export async function getServerSideProps(context) {
    const slug = context.query.team;
  const apiUrl = `https://aecstrapi-askn4.ondigitalocean.app/api/team2s?filters[slug][$eq]=${slug}&populate=*`;
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