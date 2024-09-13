"use client";

import React from "react";
import { FaEye } from "react-icons/fa";

const dummyData = [
  {
    id: 1,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNxwXzJPUqr_4HCGrEvuKYFCzvs6MVyThyzA&s",
    title: "Sample Post Title",
    publisherAvatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNxwXzJPUqr_4HCGrEvuKYFCzvs6MVyThyzA&s",
    publisherName: "John Doe",
    views: 123,
    description:
      "This is a short description for the post. It provides a brief overview of the content.",
    readMoreHref: "#",
  },
  {
    id: 2,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNxwXzJPUqr_4HCGrEvuKYFCzvs6MVyThyzA&s",
    title: "Sample Post Title",
    publisherAvatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNxwXzJPUqr_4HCGrEvuKYFCzvs6MVyThyzA&s",
    publisherName: "John Doe",
    views: 123,
    description:
      "This is a short description for the post. It provides a brief overview of the content.",
    readMoreHref: "#",
  },
];

const PostCS = ({ post }) => {
  return (
    <div className="bg-white shadow-xl rounded-lg overflow-hidden pb-4 pt-3 transition-transform transform hover:scale-102 hover:shadow-xl duration-500">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-68 object-cover rounded-3xl p-2 mb-2 transition-all duration-300 ease-in-out hover:opacity-90"
        style={{ borderRadius: "3rem" }}
      />
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-3">{post.title}</h2>
        <div className="flex items-center space-x-3 mb-3 mt-3">
          <img
            src={post.publisherAvatar}
            alt={post.publisherName}
            className="w-12 h-12 rounded-full border-2 border-primary"
          />
          <div>
            <p className="text-lg font-semibold">{post.publisherName}</p>
            <p className="text-sm text-gray-500">Publisher</p>
          </div>
        </div>
        <p className="text-gray-700 mb-4 mt-2">{post.description}</p>
        <div className="flex items-center justify-between text-gray-600 pt-3 pb-4">
          <a
            href={post.readMoreHref}
            className="text-blue-500 hover:underline hover:text-blue-600 transition-colors duration-300"
          >
            Read More
          </a>
          <div className="flex items-center space-x-1">
            <FaEye className="text-primary" />
            <span>{post.views}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const PostCSblogList = () => {
  return (
    <div className="bg-[#f6f5f530] p-8 grid grid-cols-2 gap-6">
      {dummyData.map((post) => (
        <PostCS key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostCSblogList;
