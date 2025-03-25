import React from "react";
import BannerImg from "../../assets/logo3.png";
import { FaTemperatureHigh, FaCapsules } from "react-icons/fa";
import { GiPill, GiStomach } from "react-icons/gi";

const bgStyle = {
  backgroundColor: "#f9f9f9",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const Banner = () => {
  return (
    <>
      <span id="about"></span>
      <div style={bgStyle}>
        <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0 ">
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Image section */}
              <div data-aos="zoom-in">
                <img
                  src={BannerImg}
                  alt="Pills"
                  className="max-w-[430px] w-full mx-auto drop-shadow-[10px_-10px_12px_rgba(0,0,0,1)]"
                />
              </div>
              {/* text content section */}
              <div className="flex flex-col justify-center gap-6 sm:pt-0">
                <h1 data-aos="fade-up"
                className="text-3xl sm:text-4xl font-bold font-[Poppins] relative inline-block
                after:content-[''] after:block after:w-full after:h-[4px] 
                after:bg-[#00CED1] after:mt-2">
                Obat Berkualitas Premium
                </h1>

                <p
                  data-aos="fade-up"
                  className="text-sm text-white-100 tracking-wide leading-5"
                >
                  Dapatkan obat terbaik dengan kualitas terjamin untuk menjaga kesehatan Anda. Kami menyediakan berbagai pilihan obat dengan formulasi terpercaya dan efektivitas tinggi.
                </p>

                <div className="grid grid-cols-2 gap-6  ">
                  <div className="space-y-5">
                    <div data-aos="fade-up" className="flex items-center gap-3">
                      <FaTemperatureHigh className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-100 " />
                      <span>Obat Demam & Nyeri</span>
                    </div>
                    <div
                      data-aos="fade-up"
                      data-aos-delay="300"
                      className="flex items-center gap-3"
                    >
                      <FaCapsules className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-orange-100 " />
                      <span>Antibiotik</span>
                    </div>
                    <div
                      data-aos="fade-up"
                      data-aos-delay="500"
                      className="flex items-center gap-3"
                    >
                      <GiStomach className="text-4xl h-12 w-12 shadow-sm p-3 rounded-full bg-yellow-100" />
                      <span>Obat Lambung</span>
                    </div>
                    <div
                      data-aos="fade-up"
                      data-aos-delay="500"
                      className="flex items-center gap-3"
                    >
                      <GiPill className="text-4xl h-12 w-12 shadow-sm p-3 rounded-full bg-yellow-100" />
                      <span>Vitamin & Suplemen</span>
                    </div>
                  </div>
                  <div
                    data-aos="slide-left"
                    className="border-l-4 border-[#00CED1] pl-6 space-y-2"
                  >
                    <h1 className="text-2xl font-semibold font-[Poppins]  ">
                    Pilihan Obat Unggulan
                    </h1>
                    <p className="text-sm text-white-500">
                    Sama seperti meracik obat yang tepat, memilih produk kesehatan yang sesuai membutuhkan ketelitian dan pemahaman yang baik. Kami siap membantu Anda mendapatkan solusi kesehatan terbaik! 
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;