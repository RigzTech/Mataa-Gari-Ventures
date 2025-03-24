import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "John",
    role: "Lawyer, Nairobi",
    image: "https://randomuser.me/api/portraits/men/10.jpg",
    feedback:
      "I am grateful to the professional technical support team who helped me with choosing and installing multiple products throughout the years. Great service!",
  },
  {
    name: "Chomba",
    role: "Architect, Nairobi",
    image: "https://randomuser.me/api/portraits/men/20.jpg",
    feedback:
      "After ordering from this company, I am definitely going to stay and become a regular. Great service and top-quality products!",
  },
  {
    name: "Adams",
    role: "Engineer, Nairobi",
    image: "https://randomuser.me/api/portraits/women/30.jpg",
    feedback:
      "Highly satisfied with the products and customer service. The website is easy to navigate, and delivery was on time!",
  },
  {
    name: "Michael Gideon",
    role: "Mechanic, Nairobi",
    image: "https://randomuser.me/api/portraits/men/40.jpg",
    feedback:
      "I have been using their auto parts for years, and they never disappoint. High quality and durable!",
  },
  {
    name: "Emily Lincoln",
    role: "Car Enthusiast, Nairobi",
    image: "https://randomuser.me/api/portraits/women/50.jpg",
    feedback:
      "I love upgrading my car with their accessories! The pricing is fair, and the quality is top-notch.",
  },
  {
    name: "Omweba",
    role: "Taxi Driver, Nairobi",
    image: "https://randomuser.me/api/portraits/men/60.jpg",
    feedback:
      "Fast shipping and excellent customer support. They helped me find the exact side mirror I needed.",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-black text-white py-16 px-6">
      <h2 className="text-4xl font-bold text-[#99EDC3] text-center mb-8">
        Why Us? Testimonials
      </h2>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        className="max-w-6xl mx-auto"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-14 h-14 rounded-full mx-auto mb-3 border-2 border-[#99EDC3]"
              />
              <h3 className="text-xl font-semibold text-[#99EDC3]">
                {testimonial.name}
              </h3>
              <p className="text-sm text-gray-400">{testimonial.role}</p>
              <p className="mt-4 text-lg text-white">{testimonial.feedback}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
