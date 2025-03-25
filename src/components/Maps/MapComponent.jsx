import React from "react";
import BgPng from "../../assets/Medicine/obat.jpg";

const backgroundStyle = {
  backgroundImage: `url(${BgPng})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  position: "relative",
  height: "100%",
  width: "100%",
};

const location = {
  name: "Chemical Life",
  address: "Jl. Cendrawasih No.123, Manokwari, Indonesia",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d792.0984648372391!2d134.06911367133824!3d-0.836415896303816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1742734766400!5m2!1sid!2sid",
};

const MapComponent = () => {
  return (
    // Tambahkan id="lokasi" agar bisa diakses dari navbar
    <div id="maps" className="py-14 relative" style={backgroundStyle}>
      {/* Overlay gelap */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="container relative z-10">
        <div className="grid sm:grid-cols-2 grid-cols-1 items-center gap-8">
          {/* Text Section */}
          <div
            data-aos="fade-right"
            data-aos-duration="800"
            className="space-y-6 max-w-xl mx-auto"
          >
            <h1 className="text-4xl font-extrabold text-white text-center sm:text-left drop-shadow-lg">
              {location.name}
              <span className="text-lg font-light block mt-2 drop-shadow-sm">
                Find Us on Google Maps
              </span>
            </h1>
            <p className="text-white/90 text-center sm:text-left font-medium drop-shadow-md">
              {location.address}
            </p>
          </div>

          {/* Google Maps Section */}
          <div
            data-aos="zoom-in"
            data-aos-duration="800"
            className="w-full h-[300px] sm:h-[400px] rounded-lg overflow-hidden shadow-xl"
          >
            <iframe
              src={location.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapComponent;
