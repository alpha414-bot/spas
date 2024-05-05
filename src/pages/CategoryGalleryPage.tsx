import { HotTubsBrandInterface } from "@/function";
import MainLayout from "@/layouts/MainLayout";
import LightGallery from "lightgallery/react";
import { Link, useLoaderData } from "react-router-dom";

// import styles
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lightgallery.css";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

interface CategoryLoaderData {
  category: HotTubsBrandInterface;
}
const CategoryGalleryPage = () => {
  const { category } = useLoaderData() as CategoryLoaderData;

  return (
    <MainLayout
      title={`Photo Gallery for ${category?.title} Hot Tubs`}
      description={`Photo Gallery for ${category?.title} Hot Tubs`}
    >
      <div className="container maincontent">
        <div className="jumbotron overview mplegend">
          {/*style="background: url('/img/backyard-bg.jpg'); background-repeat:no-repeat;">*/}
          <div className="row">
            <h1>{category?.title} Gallery</h1>
          </div>
          <div className="mastercrafted">
            <div className="row">
              <div className="col-md-12">
                <h2>Picture Yourself Here</h2>
                <p>
                  You may not think of a spa as life-changing, but{" "}
                  {category?.title != "Swim Series"
                    ? category?.title.replace("Series", "")
                    : category?.title}{" "}
                  isn't just any hot tub. Check out our gallery below to clearly
                  envision yourself in a Gulfsouth Spas hot tub.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div id="lightgallery">
            <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
              {category?.products?.map((item, index) => {
                return (
                  <a
                    key={index}
                    data-sub-html={`<h3>${
                      category.title
                    } - ${item?.type.toUpperCase()} </h3><p>${
                      category?.slogan
                    }</p>`}
                    href={`/img/home-page/products/${item?.image}.png`}
                    data-pinterest-text="Check out these Gulfsouth Spas Hot Tubs!"
                    data-tweet-text="Check out these Gulfsouth Spas Hot Tubs!"
                  >
                    <img
                      src={`/img/home-page/products/${item?.image}.png`}
                      alt={`${item?.name} ${item?.brand}`}
                      className="img-responsive"
                    />
                  </a>
                );
              })}
            </LightGallery>
          </div>
        </div>
        <div className="row slantMask" />
        {/*style="background: url('/img/about-beige.jpg') no-repeat; background-position: top center; background-size:cover;">*/}
        <div className="col-md-2" />
        <div className="col-md-4 text-center">
          <Link to="/contact-us">
            <img
              src="/img/home-page/line-display/coastal-tub.png"
              alt="Hot tub backyard planning guide front cover"
              style={{
                maxWidth: 250,
                display: "block",
                margin: "75px auto 0px",
              }}
            />
          </Link>
          <p>Backyard Hot Tub Planning Guide</p>
        </div>
        <div
          className="col-md-4 planning-guide"
          style={{ padding: "50px 25px" }}
        >
          <h3>Need Help Planning for Your Own Hot Tub?</h3>
          <p>
            Need Help finding the perfect spot for your new hot tub? This guide
            will provide you with important information about how to choose a
            location for your new hot tub by Gulfsouth Spas and how to prepare
            the space for installation.
          </p>
          <div className="btn para">
            <Link to="/contact-us">Contact Us</Link>
          </div>
        </div>
        <div className="col-md-2" />
      </div>
    </MainLayout>
  );
};

export default CategoryGalleryPage;
