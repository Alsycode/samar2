import React, { useState, useEffect } from "react";
import Image from "next/image";
import SimpleReactLightbox from 'simple-react-lightbox';
import { SRLWrapper, useLightbox } from 'simple-react-lightbox';
import Link from "next/link";

import { useRouter } from 'next/router';

function Portfolio2({portfolio2Data}) {
  console.log("datportfolio",portfolio2Data);
  
  const [filter, setFilter] = useState("all");
  const { openLightbox } = useLightbox();
  const [projects, setProjects] = useState([]);
  console.log("projects", projects);
  // const name = projects[0].data.attributes.name;
  console.log("projects", projects);
  useEffect(() => {
    if (portfolio2Data && portfolio2Data.length > 0) {
      const portfolio = portfolio2Data.map((item) => {
        const category = item.attributes.category;
        const src = item.attributes.image.data.attributes.formats.thumbnail.url;
        const author = item.attributes.author;
        const slug = item.attributes.slug;
        const name = item.attributes.projectName;
        return {
          title: item.attributes.author,
          category: category,
          imageSrc: src,
          img: <Image
            src={src}
            width={234}
            height={156}
          />,
          author: author,
          slug: slug,
          name: name,
        };
      });
      setProjects(portfolio);
    }
  }, [portfolio2Data]);

  const filteredProjects = projects.filter((p) => {
    if (filter === "all") {
      return true;
    } else {
      return p.category.includes(filter);
    }
  });

  const clearFilter = () => {
    setFilter("all");
  };
console.log("filteredprojects",filteredProjects)
  return (
    <>
      <div className="site-filters style-1 clearfix center m-b40">
      <ul className="filters">
    <li className={`btn ${filter === "all" ? "active" : ""}`}>
      <a onClick={() => setFilter("all")}>All</a>
    </li>
    <li className={`btn ${filter === "web_design" ? "active" : ""}`}>
      <a onClick={() => setFilter("web_design")}>Web Design</a>
    </li>
    <li className={`btn ${filter === "web_development" ? "active" : ""}`}>
      <a onClick={() => setFilter("web_development")}>Web Development</a>
    </li>
    <li className={`btn ${filter === "branding" ? "active" : ""}`}>
      <a onClick={() => setFilter("branding")}>Branding</a>
    </li>
    <li className={`btn ${filter === "mobile_app" ? "active" : ""}`}>
      <a onClick={() => setFilter("mobile_app")}>Mobile App</a>
    </li>
    <li className={`btn ${filter === "seo" ? "active" : ""}`}>
      <a onClick={() => setFilter("seo")}>SEO</a>
    </li>
  </ul>
      </div>
      <SimpleReactLightbox>
        <SRLWrapper>
          <div className="clearfix">
            <ul id="masonry" className="row" data-column-width="3">
              {filteredProjects.map((item) => (
                <li
                  key={item.slug}
                  className="card-container col-lg-4 col-md-6 col-sm-6 web_design wow fadeInUp"
                  data-wow-duration="2s"
                  data-wow-delay="0.1s"
                >
                  <div className="dlab-box style-1 m-b30">
                    <div className="dlab-media">
                      {item.img ? (
                        
                      <Link href={`./projectdetails/${item.slug}`}>
         
            <div onClick={() => openLightbox(item.imageSrc)}>
              {item.img}
            </div>
          </Link>
                      ) : (
                        <p>no image</p>
                      )}
                         {console.log("item.slug:", item)}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </SRLWrapper>
      </SimpleReactLightbox>
    </>
  );
}

export default Portfolio2;


export async function getServerSideProps() {
  // Replace 'your-auth-token' with your actual authorization token
  const authToken = '1cc0a576b38722e585230c62dc90b0476114ad0a15b46ab32402682387a85a661eaa649219d2b959481317fc5cb253a6021487927a8c43f6018f1d1ee7e126540c8a9da5cc064e5e77d2cb43ec767894c2319957a651cdf7d84f914d4588c5cd83142301d22bc2c3cfcb8a7a248a6328307ceabd5ef6532153d892e16be6a5e5';
  const apiUrl = 'https://aecstrapi-askn4.ondigitalocean.app/api/portfolio2s?populate=*';

  // Define custom headers including the authorization header
  const headers = {
    'Authorization': `Bearer ${authToken}`,
  };

  try {
    const response = await fetch(apiUrl, { headers });
    if (!response.ok) {
      throw new Error(`Failed to fetch data from the API: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();

    return {
      props: { data },
    };
  } catch (error) {
    console.error(error);
    return {
      props: { data: [] }, // Return an empty array or handle the error as needed
    };
  }
}

