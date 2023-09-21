import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import image1 from "../assets/home.jpeg";
import image2 from "../assets/sirubari.png";
import image3 from "../assets/ghandruk1.jpg";
import image4 from "../assets/dhampus2.jpg";

function HomeCarousel() {
  const carouselImages = [image1, image2, image3, image4];

  return (
    <div className="relative w-full h-[80vh] ">
      <Carousel
        showStatus={false}
        showThumbs={false}
        infiniteLoop
        autoPlay
        interval={1500}
      >
        {carouselImages.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt=""
              className="w-full h-[80vh] object-cover sm:h-[60vh] md:h-[70vh] lg:h-[80vh]"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default HomeCarousel;
