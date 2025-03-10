import React from "react";

const blogPosts = [
  {
    title: "How to Choose the Best Headlights for Your Car",
    image: "/images/headlights.jpg",
    category: "Car Lighting",
    author: "James Carter",
    date: "March 10, 2025",
    excerpt: "Upgrading your car's headlights? Here’s a detailed guide to help you make the right choice for safety and style.",
    link: "/blog/headlights-guide",
  },
  {
    title: "Top 5 Car Accessories to Enhance Your Vehicle",
    image: "/images/accessories.jpg",
    category: "Accessories",
    author: "Sarah Thompson",
    date: "February 25, 2025",
    excerpt: "Want to make your car stand out? These 5 must-have accessories will take your vehicle’s aesthetics to the next level.",
    link: "/blog/car-accessories",
  },
  {
    title: "When Should You Replace Your Side Mirrors?",
    image: "/images/mirrors.jpg",
    category: "Maintenance",
    author: "Michael Johnson",
    date: "March 5, 2025",
    excerpt: "Your side mirrors are crucial for safety. Learn when and how to replace them efficiently.",
    link: "/blog/side-mirrors",
  },
  {
    title: "DIY Guide: How to Install New Headlights",
    image: "/images/install-headlights.jpg",
    category: "Installation Guide",
    author: "Emma Davis",
    date: "April 2, 2025",
    excerpt: "Step-by-step instructions to install your headlights safely and efficiently at home.",
    link: "/blog/install-headlights",
  },
  {
    title: "Latest Trends in Car Auto Parts for 2025",
    image: "/images/industry-trends.jpg",
    category: "Industry Updates",
    author: "David Smith",
    date: "March 20, 2025",
    excerpt: "Stay ahead with the latest trends and innovations in car spare parts and accessories.",
    link: "/blog/industry-trends",
  }
];

const Blog = () => {
  return (
    <section className="bg-gray-900 text-white py-16 px-10 text-center">
      <h1 className="text-5xl font-bold text-green-500 mb-6">Our Blog</h1>
      <p className="max-w-3xl mx-auto text-lg mb-10">
        Stay updated with expert tips, latest trends, and guides on car spare parts, accessories, and maintenance.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover rounded-md mb-4"
              onError={(e) => (e.target.src = "/images/default.jpg")}
            />
            <p className="text-green-400 text-sm uppercase font-semibold">{post.category}</p>
            <h2 className="text-xl font-bold mt-2">{post.title}</h2>
            <p className="text-gray-400 text-sm">{post.author} • {post.date}</p>
            <p className="text-gray-300 mt-3">{post.excerpt}</p>
            <a href={post.link} className="text-green-500 font-semibold mt-3 inline-block hover:underline">
              Read More →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
