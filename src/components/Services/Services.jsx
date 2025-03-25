import React from "react";

// Mengimpor semua gambar dari folder Medicine
const images = import.meta.glob("../../assets/Medicine/*.png", { eager: true, as: "url" });

// Mengonversi images menjadi objek yang lebih mudah digunakan
const imageMap = Object.fromEntries(
  Object.entries(images).map(([path, url]) => {
    const fileName = path.split("/").pop().replace(".png", "").toLowerCase();
    return [fileName, url];
  })
);

const ServicesData = [
  {
    id: 1,
    name: "Paracetamol",
    description:
      "Digunakan untuk meredakan demam dan nyeri ringan hingga sedang, seperti sakit kepala, sakit gigi, atau nyeri otot.",
    aosDelay: "100",
  },
  {
    id: 2,
    name: "Amoxicillin",
    description:
      "Antibiotik yang digunakan untuk mengobati berbagai infeksi bakteri, seperti infeksi saluran pernapasan, infeksi kulit, dan infeksi saluran kemih.",
    aosDelay: "300",
  },
  {
    id: 3,
    name: "Omeprazole",
    description:
      "Obat yang digunakan untuk mengatasi masalah lambung, seperti asam lambung tinggi, GERD, dan tukak lambung.",
    aosDelay: "500",
  },
  {
    id: 4,
    name: "Bioderma",
    description:
      "Obat yang digunakan untuk mengatasi masalah lambung, seperti asam lambung tinggi, GERD, dan tukak lambung.",
    aosDelay: "500",
  },
  {
    id: 5,
    name: "Chanca Piedra",
    description:
      "Obat yang digunakan untuk mengatasi masalah lambung, seperti asam lambung tinggi, GERD, dan tukak lambung.",
    aosDelay: "500",
  },
  {
    id: 6,
    name: "Cetyl Pure",
    description:
      "Obat yang digunakan untuk mengatasi masalah lambung, seperti asam lambung tinggi, GERD, dan tukak lambung.",
    aosDelay: "500",
  },
];

const Services = () => {
  return (
    <>
      <span id="services"></span>
      <div className="py-10 pb-20 bg-[#1abc9c]">
        <div className="container">
          {/* Heading section  */}
          <div className="text-center mb-20">
            <h1 className="text-4xl font-bold font-[Poppins] text-[#f9f9f9] text-gray-800 relative 
               after:content-[''] after:block after:w-full after:h-[4px] 
               after:bg-black after:mt-4 after:mx-auto after:max-w-[300px]">
               Best Medicine Product
            </h1>



          </div>

          {/* Services Card section  */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
            {ServicesData.map((service) => {
              const imageSrc = imageMap[service.name.toLowerCase()] || imageMap["default"];
              return (
                <div
                  key={service.id}
                  data-aos="fade-up"
                  data-aos-delay={service.aosDelay}
                  className="rounded-2xl bg-white relative shadow-xl duration-300 group max-w-[300px] 
                            hover:bg-[#00CED1] hover:text-white transition-all"
                >
                  <div className="h-[150px] flex justify-center items-center">
                    <img
                      src={imageSrc}
                      alt={service.name}
                      className="max-w-[180px] block mx-auto transform mt-4 
                                 group-hover:scale-105 group-hover:rotate-6 duration-300"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h1 className="text-xl font-bold group-hover:text-white">
                      {service.name}
                    </h1>
                    <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
