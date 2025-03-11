import React from "react";
import { FaClock } from "react-icons/fa";

// Import images from the src/assets/blog folder
import tipsImage from "../assets/blog/tips.webp"; 
import maintainImage from "../assets/blog/maintain.webp"; 
import aftermarketImage from "../assets/blog/aftermarket.webp"; 
import genuinePartsImage from "../assets/blog/genuineparts.webp"; 
import evPartsImage from "../assets/blog/futureofelectric.webp"; 

const blogPosts = [
  {
    id: 1,
    title: "Top 5 Tips for Buying Quality Car Spare Parts",
    date: "March 11, 2025",
    image: tipsImage,
    excerpt: "Learn how to identify high-quality spare parts and avoid counterfeits...",
    link: "https://medium.com/@premiercarcaredubai/5-important-tips-to-follow-when-buying-car-spare-parts-c20dd92bd5a7",
  },
  {
    id: 2,
    title: "How to Maintain Your Car’s Headlights and Taillights",
    date: "March 8, 2025",
    image: maintainImage,
    excerpt: "Proper maintenance of headlights ensures safety and longevity...",
    link: "https://www.concordkia.com/blog/how-do-you-maintain-your-cars-headlights/#:~:text=Use%20a%20non%2Dabrasive%20cleaner,straight%20ahead%20and%20slightly%20downward.",
  },
  {
    id: 3,
    title: "Best Aftermarket Parts for Your Car Model",
    date: "March 5, 2025",
    image: aftermarketImage,
    excerpt: "Looking for affordable and durable aftermarket car parts? Here are the best...",
    link: "https://shop.jasp.ae/blogs/news/maximizing-performance-the-best-aftermarket-parts-for-your-car",
  },
  {
    id: 4,
    title: "Why Genuine Spare Parts Matter",
    date: "March 2, 2025",
    image: genuinePartsImage,
    excerpt: "Using genuine parts extends your car’s lifespan and ensures safety...",
    link: "https://www.wartsila.com/insights/whitepaper/why-genuine-spare-parts-are-the-best-choice-for-your-vessel#:~:text=Genuine%20spare%20parts%20are%20reliable,money%20in%20the%20long%20run.",
  },
  {
    id: 5,
    title: "The Future of Electric Vehicle Spare Parts",
    date: "February 25, 2025",
    image: evPartsImage,
    excerpt: "EVs are changing the auto industry. Discover how spare parts differ...",
    link: "https://www.krishnaautoelectric.com/blog/the-future-of-automobile-spare-parts-and-components/",
  },
];

const Blog = () => {
  return (
    <>
      {/* Header Section with Container */}
      <section className="py-16 px-6 bg-black text-white flex justify-center">
        <div className="bg-gray-800 shadow-lg rounded-lg p-10 max-w-4xl text-center border border-green-400">
          <h1 className="text-5xl font-bold text-green-400 uppercase">Car Parts Blog</h1>
          <p className="text-lg mt-4 text-gray-300 max-w-2xl mx-auto">
            Stay informed with expert insights, tips, and guides on buying and maintaining car spare parts.
          </p>
        </div>
      </section>

      {/* Blog Articles Section */}
      <section className="bg-gray-900 text-white py-16 px-6">
        <h2 className="text-4xl font-bold text-green-400 text-center mb-10">Latest Articles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-gray-800 p-5 rounded-lg shadow-lg border border-gray-700">
              <img src={post.image} alt={post.title} className="w-full h-52 object-cover rounded-lg mb-4" />
              <h3 className="text-2xl font-bold text-green-400">{post.title}</h3>
              <div className="flex items-center text-gray-400 text-sm mt-2">
                <FaClock className="mr-2" /> {post.date}
              </div>
              <p className="mt-3 text-gray-300">{post.excerpt}</p>
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 bg-[#99edc3] text-black font-semibold px-4 py-2 rounded shadow-md transition transform hover:scale-105 hover:bg-green-300"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Blog;
