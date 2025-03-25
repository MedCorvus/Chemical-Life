import React, { useRef, useEffect } from "react";
import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "Budi Santoso",
    text: "Pelayanan cepat dan produk yang saya beli sangat berkualitas. Sangat puas dengan FarmaMart!",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Siti Aminah",
    text: "Sangat membantu! Apoteker ramah dan saya mendapatkan obat yang sesuai dengan kebutuhan saya.",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Ahmad Fauzan",
    text: "Toko Chemical Life memberikan pengalaman belanja online yang mudah dan praktis, saya rekomendasikan ke teman-teman.",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 4,
    name: "Rina Kartika",
    text: "Saya suka karena banyak promo menarik dan produk vitamin lengkap, pasti akan belanja lagi!",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonials = () => {
  const sliderRef = useRef(null);

  // Tambahkan scroll wheel horizontal control
  useEffect(() => {
    const sliderNode = sliderRef.current?.innerSlider?.list;

    if (sliderNode) {
      const handleWheel = (e) => {
        e.preventDefault();
        if (e.deltaY > 0) {
          sliderRef.current.slickNext();
        } else {
          sliderRef.current.slickPrev();
        }
      };
      sliderNode.addEventListener("wheel", handleWheel);

      // Cleanup saat komponen di-unmount
      return () => sliderNode.removeEventListener("wheel", handleWheel);
    }
  }, []);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 3,
    swipeToSlide: true,
    draggable: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10">
      <div className="container">
        {/* header section */}
        <div className="mb-10">
          <h1
            data-aos="fade-up"
            className="text-center text-4xl font-bold font-[Poppins] text-black text-gray-800 relative 
            after:content-[''] after:block after:w-full after:h-[4px] 
            after:bg-[#00CED1] after:mt-4 after:mx-auto after:max-w-[300px] "
          >
            Testimonials
          </h1>
        </div>

        {/* Testimonial cards */}
        <div data-aos="zoom-in">
          <Slider {...settings} ref={sliderRef}>
            {TestimonialData.map((data) => (
              <div key={data.id} className="my-6">
                <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl bg-primary/10 relative">
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt=""
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xs text-gray-500">{data.text}</p>
                      <h1 className="text-xl font-bold text-black/80 font-cursive2">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
