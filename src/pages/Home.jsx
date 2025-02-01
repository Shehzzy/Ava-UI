import React from "react";
import Hero from "../components/Hero";
import SectionImg1 from "../assets/section-img-1.jpg";
import HomeCards from "../components/HomeCards";

function Home() {
  let para =
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).";

  let cardParaSample =
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.";
  return (
    <>
      <Hero />

      {/* Second Section Start */}
      <div className="container-fluid second-section text-center">
        <h1 className="text-center p-3">Learn More About Aiva</h1>
        <div className="row  d-flex justify-content-center align-items-center">
          <div className="col-lg-6 col-md-6 col-sm-12 p-5">
            <p className="text-start">{para}</p>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <img src={SectionImg1} alt="Image One" />
          </div>
        </div>
      </div>

      {/* Second section end*/}

      {/* Third Section Start */}

      <div className="container-fluid third-section text-center">
        <h1 className="text-center p-3">Learn More About Aiva</h1>
        <div className="row d-flex justify-content-center align-items-center mt-4 p-3">
          <div className="col-lg-4 col-md-4 col-sm-12 mb-4">
            <HomeCards
              img={SectionImg1}
              CardHeading="Card 1"
              CardPara={cardParaSample}
            />
          </div>

          <div className="col-lg-4 col-md-4 col-sm-12 mb-4">
            <HomeCards
              img={SectionImg1}
              CardHeading="Card 2"
              CardPara={cardParaSample}
            />
          </div>

          <div className="col-lg-4 col-md-4 col-sm-12 mb-4">
            <HomeCards
              img={SectionImg1}
              CardHeading="Card 3"
              CardPara={cardParaSample}
            />
          </div>
        </div>
      </div>

      {/* Third Section End */}

      {/* Fourth Section Start */}

      <div className="container-fluid fourth-section text-center">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-lg-4 col-md-4 col-sm-12 box1">
            <h3>Heading For Box One</h3>
            <p>{cardParaSample}</p>
          </div>

          <div className="col-lg-4 col-md-4 col-sm-12 box2">
            <h3>Heading For Box Two</h3>
            <p>{cardParaSample}</p>
          </div>

          <div className="col-lg-4 col-md-4 col-sm-12 box3">
            <h3>Heading For Box Three</h3>
            <p>{cardParaSample}</p>
          </div>
        </div>
      </div>

      {/* Fourth Section End */}

      {/* Fifth Section Start */}
      <div className="fifth-section container-fluid ">
        <h2 className="text-center">Aiva - Your Personal Assistant</h2>
        <p className="text-center mt-3">{para}</p>
      </div>
    </>
  );
}

export default Home;
