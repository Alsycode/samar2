import Link from "next/link";
import Footer2 from "../../../layout/footer-2";
import Header2 from "../../../layout/header-2";
import { useRouter } from "next/router";
function productDetails({productBySlugData,allProductsData}) {
const router = useRouter();
const slug = router.query.productDetail;
console.log("slug",slug)
  console.log("productdetail",allProductsData)
  const image = productBySlugData?.data[0]?.attributes.image.data.attributes.formats.medium.url;
  console.log("image",image)
  const relatedproducts =  allProductsData?.data?.filter((item) => item.attributes.slug === slug  )
  
  console.log("relatedproducts",relatedproducts)
  const naviagteBack = () => {
    router.back();
}
  return (
    <>
      <Header2 />
        <div className="page-content bg-white">
        
        <div className="dlab-bnr-inr style-2 overlay-gradient-dark" style={{"backgroundImage":`url(${image})`}}>
			<div className="container">
				<div className="dlab-bnr-inr-entry">
					<h1>Services Details 2</h1>
				
					<nav aria-label="breadcrumb" className="breadcrumb-row">
						<ul className="breadcrumb">
							<li className="breadcrumb-item"><Link href="/"><a>Home</a></Link></li>
							<li className="breadcrumb-item active" aria-current="page" onClick={naviagteBack}>Back</li>
						</ul>
					</nav>
			
				</div>
			</div>
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
							<h6 className="sub-title text-primary bgl-primary m-b15">{productBySlugData?.data[0]?.attributes.name}</h6>
							<h2 className="title m-b20">{productBySlugData?.data[0]?.attributes.designation}</h2>
							<p>{productBySlugData?.data[0]?.attributes.description}</p> 
						</div>

                            


						{/* <Link href="/about-us-2"><a className="btn btn-primary rounded-xl gradient">Learn More</a></Link> */}
					</div>

                    {relatedproducts?.map((product) => (
                          <div className="row extra-blog style-2">
                          <div className="col-lg-12 m-b30" >
                              <h2 className="blog-title">Related Products</h2>
                              <div className="dlab-separator style-1"></div>
                          </div>
                          <div className="col-lg-4 col-md-6" style={{marginLeft:"10px",marginRight:"10px"}}>
                              <div className="dlab-blog style-1 m-b30">
                                  <div className="dlab-info">
                                      {/* <div className="dlab-meta">
                                          <ul>
                                              <li className="post-date"><i className="flaticon-clock m-r10"></i>7 March, 2020</li>
                                              <li className="post-comment"><Link href="#"><a><i className="flaticon-speech-bubble"></i><span>15</span></a></Link></li>
                                              
                                          </ul>
                                      </div> */}
                                      <h5 className="dlab-title">
                                          <Link href="/blog-details-2"><a>Maecenas laoree efficitur sagittis aliquam eleifend nisl.</a></Link>
                                      </h5>
                                      <p className="m-b0">Aenean pharetra velit , non ullamcorper quam dictum nec. Praesent vel rhoncus dolor, molestie maximus risus.</p>
                                  </div>
                                  <div className="dlab-media">
                                      <Link href="/blog-details-2"><a><img src={product.attributes.image.data.attributes.formats.large.url} style={{maxHeight:"300px"}}alt="" /></a></Link>
                                  </div>
                              </div>
                          </div>
                          </div>
                    ))}
                  
				</div>
			</div>
		</section>  
      <Footer2 />
       {/* <ul className="list-check primary m-b30">
								{bullet.map((item) => {
                                   <li>{item.bullet}.</li>

								} )}

						 </ul> */}
    </>
  );
}

export default productDetails;


export async function getServerSideProps(context) {
    const slug = context.query.productDetail;
    const authToken = '1cc0a576b38722e585230c62dc90b0476114ad0a15b46ab32402682387a85a661eaa649219d2b959481317fc5cb253a6021487927a8c43f6018f1d1ee7e126540c8a9da5cc064e5e77d2cb43ec767894c2319957a651cdf7d84f914d4588c5cd83142301d22bc2c3cfcb8a7a248a6328307ceabd5ef6532153d892e16be6a5e5';
  
    const apiUrlAllProducts = 'https://aecstrapi-askn4.ondigitalocean.app/api/product2s?populate=*';
    const apiUrlProductBySlug = `https://aecstrapi-askn4.ondigitalocean.app/api/product2s?filters[slug][$eq]=${slug}&populate=*`;
  
    try {
      const [allProductsResponse, productBySlugResponse] = await Promise.all([
        fetch(apiUrlAllProducts, {
          headers: {
            Authorization: `Bearer ${authToken}`,
            'Content-Type': 'application/json',
          },
        }),
        fetch(apiUrlProductBySlug, {
          headers: {
            Authorization: `Bearer ${authToken}`,
            'Content-Type': 'application/json',
          },
        }),
      ]);
  
      if (!allProductsResponse.ok || !productBySlugResponse.ok) {
        throw new Error('Failed to fetch data');
      }
  
      const [allProductsData, productBySlugData] = await Promise.all([
        allProductsResponse.json(),
        productBySlugResponse.json(),
      ]);
  
      return {
        props: {
          allProductsData,
          productBySlugData,
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
  