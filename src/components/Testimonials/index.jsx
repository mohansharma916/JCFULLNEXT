import React from "react";
import Slider from "react-slick";
// import ava01 from "../../assets/images/ava-1.jpeg";
// import ava02 from "../../assets/images/ava-2.jpeg";
// import ava03 from "../../assets/images/ava-3.jpeg";
// import ava04 from "../../assets/images/ava-4.jpeg";
// import ava05 from "../../assets/images/ava-5.jpeg";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 2,

    // responsive: [
    //   {
    //     breakpoint: 992,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 1,
    //       infinite: true,
    //       dots: true,
    //     },
    //     breakpoint: 576,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //       infinite: true,
    //       dots: true,
    //     },
    //   },
    // ],
  };

  return (
    <Slider {...settings}>
      <div className="flex flex-row">
        <div className="py-4 px-3">
          <p>
            Unbelievable! The Journey Capturer gave me the chance to explore
            places I'd only dreamed of. I'm not a professional content creator,
            but they paired me with an amazing videographer who captured every
            moment. Thank you for turning my travel dreams into reality!
          </p>

          <div className="d-flex align-items-center gap-4 mt-3">
            <img
              src="/media/gallery-1.jpg"
              className="w-24 h-24 rounded-2"
              alt="amit"
            />
            <div>
              <h6 className="mb-0 mt-3">Amit</h6>
              <p>Traveller</p>
            </div>
          </div>
        </div>
        <div className="py-4 px-3">
          <p>
            I've always hesitated to pursue my passion for content creation due
            to financial constraints. The Journey Capturer erased those worries
            and provided me with the opportunity to travel, learn, and create
            amazing memories. Forever grateful!
          </p>

          <div className="d-flex align-items-center gap-4 mt-3">
            <img
              src="/media/gallery-1.jpg"
              className="w-24 h-24 rounded-2"
              alt="ankit"
            />
            <div>
              <h6 className="mb-0 mt-3">Ankit</h6>
              <p>Traveller</p>
            </div>
          </div>
        </div>
        {/* <div className="py-4 px-3">
          <p>
            I had this dream of exploring new places. The Journey Capturer(TJC)
            heard that dream and made it happen. They said, 'Go, have fun, and
            we'll handle the bills.' Now my pics are making others want to go
            too!
          </p>

          <div className="d-flex align-items-center gap-4 mt-3">
            <img
              src="/media/gallery-1.jpg"
              className="w-25 h-25 rounded-2"
              alt="geetanjali"
            />
            <div>
              <h6 className="mb-0 mt-3">Geetanjali</h6>
              <p>Traveller</p>
            </div>
          </div>
        </div> */}
      </div>

      {/* <div className="testimonial py-4 px-3">
        <p>
          I always thought cool trips are for rich people. The Journey Capturer
          proved me wrong. They paid for everything and even had someone record
          my trip. I'm like a travel star now. Can't believe it!
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img
            src="/media/gallery-1.jpg"
            className="w-25 h-25 rounded-2"
            alt="Neha "
          />
          <div>
            <h6 className="mb-0 mt-3">Neha</h6>
            <p>Traveller</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
          Traveling and making videos? Sounds fun, right? That's what I thought!
          The Jounrey Capturer made it real. They sent me places, I made videos,
          and they used them. It's like my vacation is a movie!
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img
            src="/media/gallery-1.jpg"
            className="w-25 h-25 rounded-2"
            alt="janki"
          />
          <div>
            <h6 className="mb-0 mt-3">Janki</h6>
            <p>Traveller</p>
          </div>
        </div>
      </div> */}
    </Slider>
  );
};

export default Testimonials;
